let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    // slides 1
    let slides_1 = document.getElementsByClassName("slides-1");
    if (n > slides_1.length){
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides_1.length;
    }
    for (let i = 0;i < slides_1.length; i++) {
        slides_1[i].style.display = "none"
    }
    slides_1[slideIndex - 1].style.display = "block";

    // slides 2
    let slides_2 = document.getElementsByClassName("slides-2");
    if (n > slides_2.length){
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides_2.length;
    }
    for (let i = 0;i < slides_2.length; i++) {
        slides_2[i].style.display = "none"
    }
    slides_2[slideIndex - 1].style.display = "block";

    // slides 3
    let slides_3 = document.getElementsByClassName("slides-3");
    if (n > slides_3.length){
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides_3.length;
    }
    for (let i = 0;i < slides_3.length; i++) {
        slides_3[i].style.display = "none"
    }
    slides_3[slideIndex - 1].style.display = "block";

    // slides 4
    let slides_4 = document.getElementsByClassName("slides-4");
    if (n > slides_4.length){
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides_4.length;
    }
    for (let i = 0;i < slides_4.length; i++) {
        slides_4[i].style.display = "none"
    }
    slides_4[slideIndex - 1].style.display = "block";

    // slides 5
    let slides_5 = document.getElementsByClassName("slides-5");
    if (n > slides_5.length){
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides_5.length;
    }
    for (let i = 0;i < slides_5.length; i++) {
        slides_5[i].style.display = "none"
    }
    slides_5[slideIndex - 1].style.display = "block";
}

setInterval(function() {changeSlide(1);},3000);

