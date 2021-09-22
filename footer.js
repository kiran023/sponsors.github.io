const slider = document.querySelector('.slider');
const innerSlider = document.querySelector('.inner-slider');
const wid = document.querySelector('.box').offsetWidth;
let x, y, l;
let cnt=1;
let pressed = false;

 intervalId = setInterval(function () {
    innerSlider.style.left= `-${cnt*wid}px`
    cnt++;
    if(cnt==5)
   cnt=1;
   },2000);

slider.addEventListener('mousedown', (e) => {
    clearInterval(intervalId);
    pressed = true;
    x = e.offsetX;
    l = innerSlider.offsetLeft;
    slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseenter", () => {
    slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", () => {
   
    slider.style.cursor = "grab";

});

window.addEventListener("mouseup", () => {
    pressed = false;

});

slider.addEventListener("mousemove", (e) => {
    
    if (!pressed) return;
    y = e.offsetX;
    innerSlider.style.left = `${y - x + l}px`;
    checkboundary();
});

function checkboundary() {

    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px"
    }
    else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`
    }

}



