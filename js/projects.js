spans = document.getElementsByClassName("soft-skill")

let currentSlide = 1;

function nextSlide() {
    const slideContainer = document.querySelector('.slide-container');
    currentSlide++;
    if (currentSlide > document.getElementsByClassName("slide").length) {
        currentSlide = 1
    }
    // Shift the container to the left to reveal the next slide
    slideContainer.style.transform = `translateX(-${(currentSlide - 1) * 100}vw)`;
}

function prevSlide() {
    const slideContainer = document.querySelector('.slide-container');
    currentSlide--;
    if (currentSlide <= 0) {
        currentSlide = document.getElementsByClassName("slide").length
    }
    // Shift the container to the left to reveal the next slide
    slideContainer.style.transform = `translateX(-${(currentSlide - 1) * 100}vw)`;
}

document.addEventListener("DOMContentLoaded", function() {
    for (var i = 0; i < spans.length; i++) {
        var span = spans[i];
    
        switch (span.textContent) {
            case "Autonomy":
                span.style.backgroundColor = "#f2fa65" //jaune
                break;
            case "Communication":
                span.style.backgroundColor = "#96f6ff" //bleu clair
                break;
            case "Decision-making":
                span.style.backgroundColor = "#ec95ff" //rose
                break;
            case "Time-management":
                span.style.backgroundColor = "rgb(149, 161, 255)" //bleu
                break;
            case "Teamwork":
                span.style.backgroundColor = "rgb(167, 255, 149)" //vert
                break;
            case "Creativity":
                span.style.backgroundColor = "rgb(255, 167, 123)" //orange
                break;
            default:
                break;
        }
    }
});


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    if (e.keyCode == '38') {
        prevSlide() 
    }
    else if (e.keyCode == '40') {
        nextSlide()
    }
    else if (e.keyCode == '37') {
       prevSlide()
    }
    else if (e.keyCode == '39') {
        nextSlide()
    }

}
date = new Date()
wheelTimer = date.getTime()
document.addEventListener('wheel', function(event) {
    if ((new Date().getTime() - wheelTimer) > 250) {
        // Get the distance that the mouse wheel was rotated
        const deltaX = event.deltaX;
        const deltaY = event.deltaY;
        
        // Check the value of delta
        if (deltaX > 0 || deltaY > 0) {
            nextSlide() 
        } else if (deltaX < 0 || deltaY < 0) {
            prevSlide() 
        }
        wheelTimer = new Date().getTime()
    }
    });