document.addEventListener("DOMContentLoaded", () => {
    const logoElement = document.getElementById('variable-logo-container');
    const statusElement = document.getElementById('aqi-status');
    const citySelector = document.getElementById('city-selector');

    function mapAQIToPOLT(aqiValue) {
        const clampedAQI = Math.min(Math.max(aqiValue, 0), 100);
        return clampedAQI.toFixed(2);
    }

    async function fetchAQIAndUpdateLogo(lat, lon, city) {
        try {
            statusElement.textContent = `Analizando calidad del aire en ${city}...`;
            
            const aqiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=european_aqi`;
            const aqiResponse = await fetch(aqiUrl);
            if (!aqiResponse.ok) throw new Error('Fallo al obtener registros atmosféricos');
            const aqiData = await aqiResponse.json();
            
            const currentAQI = aqiData.current.european_aqi;
            const poltValue = mapAQIToPOLT(currentAQI);

            logoElement.style.fontVariationSettings = `'POLT' ${poltValue}`;
            statusElement.innerHTML = `Ciudad monitorizada: ${city} | Índice AQI: ${currentAQI} | Valor eje POLT: ${poltValue}`;
            
        } catch (error) {
            console.error("Interrupción en el flujo de datos", error);
            statusElement.textContent = "Error de conexión con los repositorios. Mostrando caracteres en estado neutro.";
            logoElement.style.fontVariationSettings = `'POLT' 0`;
        }
    }

    async function initAutoLocation() {
        try {
            statusElement.textContent = "Geolocalizando conexión de red...";
            
            const geoResponse = await fetch('https://ipinfo.io/json');
            if (!geoResponse.ok) throw new Error('Fallo al obtener coordenadas geográficas');
            const geoData = await geoResponse.json();
            
            const coordenadas = geoData.loc.split(',');
            const lat = coordenadas[0];
            const lon = coordenadas[1];
            const city = geoData.city || geoData.region || 'Ubicación remota';

            await fetchAQIAndUpdateLogo(lat, lon, city);
        } catch (error) {
            console.error("Fallo de geolocalización", error);
            statusElement.textContent = "No se pudo autodetectar la red. Por favor, selecciona una ciudad manualmente.";
        }
    }

    citySelector.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        
        if (selectedValue === 'auto') {
            initAutoLocation();
        } else {
            const dataParts = selectedValue.split(',');
            const lat = dataParts[0];
            const lon = dataParts[1];
            const city = dataParts[2];
            
            fetchAQIAndUpdateLogo(lat, lon, city);
        }
    });

    initAutoLocation();
});