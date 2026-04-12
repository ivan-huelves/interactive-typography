window.onload = function() {
    // get the title DOM element
    let title = this.document.querySelector("#title");
    
    // get the input DOM element
    let h1weight = this.document.querySelector("#h1weight");
    
    // listen the input change event
    h1weight.addEventListener('input', function () {
        // change the CSS property 
        title.style.setProperty('--weightH1', h1weight.value);        
    }, false);
};