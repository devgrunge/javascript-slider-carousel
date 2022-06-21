var slider = document.querySelector('.sorep_categories');
var innerSlider = document.querySelector('.innerslider');

//console.log(slider);

var pressed = false;
var startx;
var x;

slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = "grabbling"
} );

slider.addEventListener('mouseenter', () => {
    slider.style.cursor = "grab"

});

// slider.addEventListener('mouseleave', () => {
//     slider.style.cursor = "default"
    
// });

slider.addEventListener('mouseup', () => {
    slider.style.cursor = 'grab'
});

window.addEventListener('mouseup', () => {
    pressed = false;
});

slider.addEventListener('mousemove', (e) => {
    if(!pressed) return;
    e.preventDefault();

    x = e.offsetX

    innerSlider.style.left = `${x - startx}px`;

    checkBoundary();
});


function checkBoundary () {
    var outer = slider.getBoundingClientRect();
    var inner = innerSlider.getBoundingClientRect();

   if(parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = '0px';
   }else if(inner.right < outer.right){
    innerSlider.style.left = `-${inner.width - outer.width}px`
   }
}
