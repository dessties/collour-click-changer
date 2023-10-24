window.onload = function () {
    let color2 = randomColor();
    let rgbColor2 = `rgb(${color2.r}, ${color2.g}, ${color2.b})`;
    document.getElementById("bg").style.backgroundColor = rgbColor2;
    
    document.getElementById("openWindow").classList.add("appear");
    let color1 = randomColor();
    let rgbColor1 = `rgb(${color1.r}, ${color1.g}, ${color1.b})`;
    document.body.style.transition = "none";
    document.body.style.backgroundColor = rgbColor1;
  };

let isFirstClick = true;
document.body.addEventListener("click", () => {
    if (isFirstClick) {
        openWindow.classList.remove("appear");

        document.getElementById("openWindow").classList.add("disappear");
        isFirstClick = false;
    }
    else {
        document.body.style.transition = "background-color 0.5s ease";
        let color = randomColor();
        let rgbColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
        document.body.style.backgroundColor = rgbColor;
    }
});
