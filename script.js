document.addEventListener("DOMContentLoaded", function() {
    currentSlide(1);
    displayStatus("vmo", "status-info-vmo");
    displayStatus("zoo", "status-info-zoo");
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("imageGallerySlides");
    if (slides.length === 0) {
        return; // Exit the function if there are no slides
    }
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function isOpen(place) {
    let now = new Date();
    let day = now.getDay();
    let hour = now.getHours();

    switch (place) {
        case "zoo":
            return (now.getDay() >= 1 && now.getDay() <= 6) && (now.getHours() >= 9 && now.getHours() < 18);
        case "vmo":
            return (now.getDay() >= 2 && now.getDay() <= 6 || now.getDay() == 0) && (now.getHours() >= 10 && now.getHours() < 18);
        default:
            return false;
    }
}

function displayStatus(place, elementId) {
    let isOpenNow = isOpen(place);
    let statusInfo = document.getElementById(elementId);

    console.log(statusInfo)

    if (isOpenNow) {
        statusInfo.textContent = 'Otevřeno';
        statusInfo.style.color = 'green';
    } else {
        statusInfo.textContent = "Uzavřeno";
        statusInfo.style.color = 'red';
    }
}
