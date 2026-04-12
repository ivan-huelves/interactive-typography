
//cargo el archivo json
fetch('https://sensorvariablefont.com/examples/data-visualization/assets/data/sea-level.json')
  .then(response => response.json())
  .then(data => {

    let key = Object.keys(data)[1];
    value = data[key]   
    console.log(value);

    let output = '<h2>Sea level</h2>';
    output += '<ul>';
    data.forEach(function (dataSealevel) {
      output += `
                      <li>
                          ${dataSealevel.sealevel}
                      </li>
                  `;
                  //console.log(Object.keys(dataSealevel)[0]);
                  
    });
    output += '</ul>'
    document.getElementById("sea-level").innerHTML = output;
    
  });
 
  

  
    