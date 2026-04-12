window.onload = function() {
   
    let year = this.document.querySelector('#year');
    let fontRepresentation = this.document.querySelector("#fontRepresentation");
    let showYEarValue = document.querySelector('#showYearValue');
   
    //NORMALIZE SEA LEVEL DATA TO FONT AXIS VALUE
    //MAP FUNCTION JAVASCRIPT
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    function normalize(sealevel){
        //NORMALIZE THE DATA READED
        let normalizedValueLev = scale(sealevel, 0, 8.980314951, 100, 900);
        //SHOW ON THE HTML THE NORMALIZED VALUE
        showAxisValue.innerHTML = `${normalizedValueLev}`;
        //SHOW THE DATA REPRESENTED THROUGH A VARIABLE FONT
        fontRepresentation.style.setProperty('--weightH1', normalizedValueLev);
        //SHOW THE DATA OF SEA LEVEL
        showSealevel.innerHTML = `${sealevel} mm.`;
    }

    // una función asincrónica para esperara a que se cargue el json
    async function getData(url) {
        const response = await fetch(url);    
        return response.json()
    }
    
    // también asincrónica para esperar a que sea lea el json
    async function main() {
        const datos = await getData('sea-level.json');
    
        console.log(datos);

        // the following code is to show some data before the user start changing the slider
        normalize(datos[0]["CSIRO Adjusted Sea Level"]);

        //read the position of the slider and show it on the HTML. Year is the range. Input is js sintax 
        year.addEventListener('input', function () {
              showYEarValue.innerHTML = year.value;
        }, false);

        //read the changes on the slider
        year.addEventListener('change', function () {
            //esto sería algo así como por cada objetos de datos haz...
            datos.forEach(obj => {
                // aquí me pierdo 
                var d = new Date(Object.entries(obj)[4][1]);
 
                if(d.getFullYear() == year.value){
                    console.log(Object.entries(obj)[0][1]);  
                    normalize(Object.entries(obj)[0][1]);
                }
           
            });
     
        }, false);
    }
    main();
    

}