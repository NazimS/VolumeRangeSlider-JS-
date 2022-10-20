
const icon = document.querySelector("#icon"),
range = document.querySelector("input"),
sliderValue = document.querySelector(".slide-value");

range.addEventListener("input", () => {
    let rangeValue = range.value;
    sliderValue.innerText = rangeValue;
    // console.log(rangeVal);

    if (rangeValue > 0) {
        icon.classList.replace("uil-volume-mute", "uil-volume-down"); 
    } 
    else {
        icon.classList.replace("uil-volume-down", "uil-volume-mute");  
    }
    if (rangeValue > 40) {
        icon.classList.replace("uil-volume-down", "uil-volume");  
    } 
    else {
        icon.classList.replace("uil-volume", "uil-volume-down");  
    }
    if (rangeValue > 85) {
        icon.classList.replace("uil-volume", "uil-volume-up");  
    } 
    else {
        icon.classList.replace("uil-volume-up", "uil-volume");  
    }

});