window.onload = function() {
    // get the title DOM element
    let h = this.document.querySelector("#h");
    let e = this.document.querySelector("#e");
    let l = this.document.querySelector("#l");
    let l2 = this.document.querySelector("#l2");
    let o = this.document.querySelector("#o");
    
    // get the input DOM element
    let goRandom = this.document.querySelector("#goRandom");

    //variable to get the random number
    let randomCalcH;
    let randomCalcE;
    let randomCalcL;
    let randomCalcL2;
    let randomCalcO;

    // function to generate a random value
    function getRndInteger(min, max) {
        /*randomCalcH = Math.floor(Math.random() * (max - min + 1) ) + min;
        randomCalcE = Math.floor(Math.random() * (max - min + 1) ) + min;
        randomCalcL = Math.floor(Math.random() * (max - min + 1) ) + min;
        randomCalcL2 = Math.floor(Math.random() * (max - min + 1) ) + min;
        randomCalcO = Math.floor(Math.random() * (max - min + 1) ) + min;*/
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    // listen the input change event
    goRandom.addEventListener('click', function () {
        // exectue random function between the min. and max. of the font axes
        randomCalcH = getRndInteger(0,360);
        randomCalcE = getRndInteger(0,360);
        randomCalcL = getRndInteger(0,360);
        randomCalcL2 = getRndInteger(0,360);
        randomCalcO = getRndInteger(0,360);

        // change the CSS property 
        h.style.setProperty('--randomH', randomCalcH);
        e.style.setProperty('--randomE', randomCalcE);
        l.style.setProperty('--randomL', randomCalcL);
        l2.style.setProperty('--randomL2', randomCalcL2);
        o.style.setProperty('--randomO', randomCalcO); 
        console.log(randomCalcH);
        console.log(randomCalcO);
    }, false);

};