function scrollValue() {
    var navbar = document.querySelector(".header");
    var scroll = window.scrollY;
    if (scroll < 150) {
        navbar.classList.remove('BgColour');
    } else {
        navbar.classList.add('BgColour');
    }
}

window.addEventListener('scroll', scrollValue);