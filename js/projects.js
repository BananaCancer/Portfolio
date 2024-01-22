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
            case "Positive attitude":
                span.style.backgroundColor = "rgb(255, 123, 123)" //red
                break;
            case "Presentation skills":
                span.style.backgroundColor = "rgb(212, 150, 255)" //purple
                break;
            case "Attention to detail":
                span.style.backgroundColor = "rgb(199, 99, 255)" //purple
                break;
            case "Commitment":
                span.style.backgroundColor = "rgb(146, 51, 200)" //purple
                break;
            case "Leadership":
                span.style.backgroundColor = "rgb(225, 40, 40)" //red
                break;
            case "Conflict resolution":
                span.style.backgroundColor = "rgb(40, 225, 40)" //green
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
