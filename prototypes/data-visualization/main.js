window.onload = function() {
    let fontRepresentation = this.document.querySelector("#fontRepresentation");
    let showAxisValue = document.getElementById("showAxisValue");
    let showSealevel = document.getElementById("showSealevel");

    //NORMALIZE SEA LEVEL DATA TO FONT AXIS VALUE
    //MAP FUNCTION JAVASCRIPT
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    //BUILD AND GET JSON OBJECT
    fetch('sea-level.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here

        // Access complete object
        //console.log(data);
        // Access array element
        //console.log(data[0]);
        // Access key inside de array element
        //console.log(data[0].Year);
        // Access spaced-key inside de array element
        // data is the object created, [133] is the position of the array I read, [text] I have to use brackets because is a text with spaces
        //console.log(data[1]["CSIRO Adjusted Sea Level"]);
       
        pintaralgo(data[50]["CSIRO Adjusted Sea Level"]);
    })

    .catch(err => {
    //     // Do something for an error here
        this.alert("Can't load the data ...")
    })   

    function pintaralgo(sealevel){
        //NORMALIZE THE DATA READED
        let normalizedValueLev = scale(`${sealevel}`, 0, 9, 100, 700);
        //SHOW ON THE HTML THE NORMALIZED VALUE
        showAxisValue.innerHTML = `Weight font value: ${normalizedValueLev}`;
        //SHOW THE DATA REPRESENTED THROUGH A VARIABLE FONT
        fontRepresentation.style.setProperty('--weightH1', normalizedValueLev);
        //SHOW THE DATA OF SEA LEVEL
        showSealevel.innerHTML = `Sea level: ${sealevel}`;
    }
};

