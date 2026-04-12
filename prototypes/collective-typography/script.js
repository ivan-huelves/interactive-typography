// --- CONFIGURACIÓN ---
const MASA_CRITICA = 30; 
const TOTAL_SILUETAS = 30; 
const EJE_MAXIMO = 10;

// Estado
let sistemaDesbloqueado = false; 
let personasReales = 0;
let ejeObjetivo = 0;
let ejeVisualActual = 0;
let siluetasDOM = []; 
let bloqueadoPorSeguridad = false; 

// Serial
let port, reader;

// Elementos DOM
const elCuerpo = document.getElementById('cuerpo');
const elContador = document.getElementById('contador');
const elBarra = document.getElementById('barra');
const elLed = document.getElementById('led');
const elDebug = document.getElementById('val-eje');
const elEstado = document.getElementById('estado-conexion');
const overlay = document.getElementById('overlay-inicio');
const contenedorSiluetas = document.getElementById('contenedor-siluetas');

document.addEventListener('DOMContentLoaded', () => {
    generarSiluetas();
    loopVisual();
    document.getElementById('btn-conectar').addEventListener('click', conectarArduino);
    
    window.addEventListener('keydown', (e) => {
        if (!sistemaDesbloqueado) return;
        if (e.key === 'ArrowRight') sumarPersona();
        if (e.key === 'r' || e.key === 'R') location.reload();
    });
});

function generarSiluetas() {
    contenedorSiluetas.innerHTML = '';
    siluetasDOM = [];
    const anchoBase = 12;
    let listaTemp = [];

    // --- Distribución por Sectores ---
    let carriles = Array.from({length: TOTAL_SILUETAS}, (_, i) => i);
    carriles.sort(() => Math.random() - 0.5);

    for (let i = 0; i < TOTAL_SILUETAS; i++) {
        // Cada silueta ocupa un sector del ~3.3% del ancho (100/30)
        const sectorAncho = 90 / TOTAL_SILUETAS; 
        const baseLeft = carriles[i] * sectorAncho;
        const variacionAleatoria = Math.random() * (sectorAncho * 0.5);
        const rLeft = baseLeft + variacionAleatoria;

        const rScale = 0.8 + Math.random() * 0.6;  
        const baseHundimiento = -3;
        const factorProfundidad = (rScale - 0.8) * 15;
        const rBottom = baseHundimiento - factorProfundidad;
        const zIndex = Math.floor(rScale * 100);
        
        const numStr = (i + 1).toString().padStart(2, '0');
        const ruta = `assets/img/personas/silueta${numStr}.png`;

        listaTemp.push({ img: ruta, left: rLeft, bottom: rBottom, scale: rScale, zIndex: zIndex });
    }

    listaTemp.sort((a, b) => a.zIndex - b.zIndex);

    listaTemp.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('silueta');
        div.style.backgroundImage = `url('${data.img}')`;
        div.style.left = `${data.left}%`;
        div.style.bottom = `${data.bottom}%`;
        div.style.width = `${anchoBase * data.scale}%`;
        div.style.zIndex = data.zIndex;
        contenedorSiluetas.appendChild(div);
        siluetasDOM.push(div);
    });

    siluetasDOM.sort(() => Math.random() - 0.5);
}

function sumarPersona() {
    if (bloqueadoPorSeguridad) return;
    if (personasReales < MASA_CRITICA) {
        bloqueadoPorSeguridad = true;
        personasReales++;
        actualizarUI();
        mostrarSiguienteSilueta();
        setTimeout(() => { bloqueadoPorSeguridad = false; }, 300);
    }
}

function actualizarUI() {
    elContador.innerText = personasReales.toString().padStart(2, '0');
    const progreso = personasReales / MASA_CRITICA;
    elBarra.style.width = `${progreso * 100}%`;
    ejeObjetivo = progreso * EJE_MAXIMO;
    elLed.classList.add('on');
    setTimeout(() => elLed.classList.remove('on'), 150);
}

function mostrarSiguienteSilueta() {
    for (let i = 0; i < personasReales; i++) {
        if (siluetasDOM[i] && !siluetasDOM[i].classList.contains('ha-entrado')) {
            siluetasDOM[i].classList.add('ha-entrado');
        }
    }
}

function loopVisual() {
    const factorSuavidad = 0.05;
    const distancia = ejeObjetivo - ejeVisualActual;
    if (Math.abs(distancia) > 0.001) {
        ejeVisualActual += distancia * factorSuavidad;
        elCuerpo.style.fontVariationSettings = `'PART' ${ejeVisualActual.toFixed(3)}`;
        elDebug.innerText = ejeVisualActual.toFixed(2);
    }
    requestAnimationFrame(loopVisual);
}

async function conectarArduino() {
    if (!navigator.serial) return alert("Por favor, usa Chrome o Edge.");
    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });
        overlay.style.display = 'none';
        
        if(elEstado) {
            elEstado.innerText = "ON";
            elEstado.style.color = "#fff";
        }
        
        sistemaDesbloqueado = true;
        leerSerial();
    } catch (err) {
        console.error("Error al conectar:", err);
    }
}

async function leerSerial() {
    const reader = port.readable.getReader();
    const decoder = new TextDecoder();
    try {
        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            if (value && sistemaDesbloqueado) {
                const chunk = decoder.decode(value);
                if (chunk.includes('1')) sumarPersona();
            }
        }
    } catch (error) { 
        console.error("Error serial:", error); 
    } finally {
        reader.releaseLock();
    }
}