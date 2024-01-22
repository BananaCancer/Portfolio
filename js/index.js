arrow = document.getElementById("arrowLink")
page1 = document.getElementById("page1")
page2 = document.getElementById("page2")

var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var menu3 = document.getElementById("menu3");
var menu4 = document.getElementById("menu4");

document.addEventListener("DOMContentLoaded", function() {
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var text3 = document.getElementById("text3");

    // Wait for a short delay before animating the text
    setTimeout(function() {
        text1.style.transform = "translateX(0)";
        text1.style.opacity = "1";
    }, 500);
    setTimeout(function() {
        text2.style.transform = "translateX(0)";
        text2.style.opacity = "1";
    }, 1000);
    setTimeout(function() {
        text3.style.transform = "translateX(0)";
        text3.style.opacity = "1";
    }, 1500);
    setTimeout(function() {
        arrow.style.transform = "translateX(0)";
        arrow.style.opacity = "1";
    }, 2000);
});

arrow.addEventListener("click", function() {
    if (page1.style.transform === '' || page1.style.transform === 'translateY(0%)') {
        page1.style.transform = 'translateY(-100%)';
        page2.style.transform = 'translateY(0%)';
        setTimeout(function() {
            menu1.style.transform = "translateX(0)";
            menu1.style.opacity = "1";
            menu2.style.transform = "translateX(0)";
            menu2.style.opacity = "1";
            menu3.style.transform = "translateX(0)";
            menu3.style.opacity = "1";
            menu4.style.transform = "translateX(0)";
            menu4.style.opacity = "1";

            contacts = document.getElementsByClassName("contact")

            for (let index = 0; index < contacts.length; index++) {
                const element = contacts[index];
                element.style.transform = "translateY(0)";
                element.style.opacity = "1";
            }

        }, 500);
    } else {
        page1.style.transform = 'translateY(0%)';
        page2.style.transform = 'translateY(100%)';
    }

    
})

