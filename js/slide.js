const track = document.getElementById('track');
const slides = track.children;
const totalSlides = slides.length; 

let indexSlide = 0;
const larguraSlide = 330; 

setInterval(() => {

    indexSlide++;

    if(indexSlide >=totalSlides) {
        indexSlide = 0;
    }

    track.style.transform = `translateX(-${indexSlide * larguraSlide}px)`
}, 3000)