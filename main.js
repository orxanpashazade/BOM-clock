let hour1 = document.querySelector(".hour1")
let hour1Value = 2;
let hour2 = document.querySelector(".hour2")    
let hour2Value = 3;
let min1 = document.querySelector(".min1")
let min1Value = 0;
let min2 = document.querySelector(".min2")
let min2Value = 0;
let sec1 = document.querySelector(".sec1")
let sec1Value = 0;
let sec2 = document.querySelector(".sec2")
let sec2Value = 0;

let hourTime = setInterval(()=>{
    ++hour2Value;
    hour2.textContent =hour2Value

    if(hour2Value===4){
        hour2Value = 0;
        hour2.textContent = hour2Value;
        ++hour1Value;
        hour1.textContent = hour1Value;
        if(hour1Value === 3){
            hour1Value = 0;
            hour1.textContent = hour1Value
        }
    }
},3600000)
let minTime = setInterval(()=>{
    ++min2Value;
    min2.textContent =min2Value

    if(min2Value===10){
        min2Value = 0;
        min2.textContent = min2Value;
        ++min1Value;
        min1.textContent = min1Value;
        if(min1Value === 6){
            min1Value = 0;
            min1.textContent = min1Value
        }
    }
},60000)
let secTime = setInterval(()=>{
    ++sec2Value;
    sec2.textContent =sec2Value
    if(sec2Value===10){
        sec2Value = 0;
        sec2.textContent = sec2Value;
        ++sec1Value;
        sec1.textContent = sec1Value;
        if(sec1Value === 6){
            sec1Value = 0;
            sec1.textContent = sec1Value
        }
    }
},1000)