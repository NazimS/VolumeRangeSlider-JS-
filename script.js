const icon = document.querySelector("#icon"),
range = document.querySelector("input"),
sliderValue = document.querySelector(".slide-value");

range.addEventListener("input", () => {
    let rangeVal = range.value;
    sliderValue.innerText = rangeVal;
    // console.log(rangeVal);
    
    if (rangeVal > 0) {
        icon.classList.replace("uil-volume-mute", "uil-volume-down"); 
    } 
    else {
        icon.classList.replace("uil-volume-down", "uil-volume-mute");  
    }
    if (rangeVal > 35) {
        icon.classList.replace("uil-volume-down", "uil-volume");  
    } 
    else {
        icon.classList.replace("uil-volume", "uil-volume-down");  
    }
    if (rangeVal > 85) {
        icon.classList.replace("uil-volume", "uil-volume-up");  
    } 
    else {
        icon.classList.replace("uil-volume-up", "uil-volume");  
    }

});