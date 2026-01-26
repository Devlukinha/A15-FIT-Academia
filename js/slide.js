const track = document.getElementById('track');
const slides = track.children;
const totalSlides = slides.length; 

let indexSlide = 0;
let larguraSlide = 330; 

setInterval(() => {

    indexSlide++;

    if(indexSlide >=totalSlides) {
        indexSlide = 0;
    }

    if(window.innerWidth >= 600) {
        larguraSlide = 430;
    }
    else {
        larguraSlide = 330;
    }

    track.style.transform = `translateX(-${indexSlide * larguraSlide}px)`
}, 2500)