const slider= document.querySelector('.slider');
const innerSlider = document.querySelector('.inner-slider');
let x;
let startx;
let pressed = false;

slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX- innerSlider.offsetLeft;
    slider.style.cursor= "grabbing";
});

slider.addEventListener("mouseenter", ()=>{
    slider.style.cursor= "grab";
});

slider.addEventListener("mouseup", ()=>{
    slider.style.cursor= "grab";
});

window.addEventListener("mouseup", ()=>{
    pressed= false;
   
});

slider.addEventListener("mousemove", (e)=>{
    if(!pressed) return;
    x= e.offsetX;
    console.log(x);

    innerSlider.style.left= `${x-startx}px` ;
    checkboundary();
});

function checkboundary(){

    let outer= slider.getBoundingClientRect();
    let inner= innerSlider.getBoundingClientRect();

    if(parseInt(innerSlider.style.left)>0){
        innerSlider.style.left= "0px"
    }
    else if(inner.right < outer.right){
        innerSlider.style.left= `-${inner.width-outer.width}px`
    }

}



