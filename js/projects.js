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
                span.style.backgroundColor = "#f2fa65"
                break;
            case "Communication":
                span.style.backgroundColor = "#96f6ff"
                break;
            case "Decision-making":
                span.style.backgroundColor = "#ec95ff"
                break;
            case "Time-management":
                span.style.backgroundColor = "rgb(149, 161, 255)"
                break;
            case "Teamwork":
                span.style.backgroundColor = "rgb(167, 255, 149)"
                break;
            case "Creativity":
                span.style.backgroundColor = "rgb(255, 167, 123)"
                break;
            case "Positive attitude":
                span.style.backgroundColor = "rgb(255, 123, 123)"
                break;
            case "Presentation skills":
                span.style.backgroundColor = "rgb(212, 150, 255)"
                break;
            case "Attention to detail":
                span.style.backgroundColor = "rgb(199, 99, 255)"
                break;
            case "Commitment":
                span.style.backgroundColor = "rgb(146, 51, 200)"
                break;
            case "Leadership":
                span.style.backgroundColor = "rgb(225, 40, 40)"
                break;
            case "Conflict resolution":
                span.style.backgroundColor = "rgb(40, 225, 40)"
                break;
            case "Curiosity":
                span.style.backgroundColor = "rgb(225, 182, 40)" 
                break;
            default:
                break;
        }
    }
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
        
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    })
    butterup.options.toastLife = 5000
    butterup.toast({
        title:'For an easier navigation',
        message:'You can use the keyboard arrows for navigation',
        type:'info',
        icon: true,
        position: 'top-right',
        dismissable: true,
        
      });
});



document.onkeydown = checkKey;

function preventDefault(event) {
    if (event.keyCode == "40" || event.keyCode == "38") {
        event.preventDefault()
    }
}

input.addEventListener('keypress', preventDefault, false);


function checkKey(e) {

    e = e || window.event;
    if (e.keyCode == '38') {
        e.preventDefault();
        prevSlide() 
    }
    else if (e.keyCode == '40') {
        e.preventDefault();
        nextSlide()
    }
    else if (e.keyCode == '37') {
       prevSlide()
    }
    else if (e.keyCode == '39') {
        nextSlide()
    }

}
