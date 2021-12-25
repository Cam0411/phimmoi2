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

// modal 

var menu = document.querySelector(".menu")
var modal = document.querySelector(".modal")
var modalContent = document.querySelector(".modal__content")
var modalbackground = document.querySelector(".modal__background")
menu.addEventListener("click",function(){
    modal.classList.add("open")
})
modal.addEventListener("click",function(){
    modal.classList.remove("open")
    modalbackground.classList.remove("open2")
})
modalContent.addEventListener("click",function(event){
    event.stopPropagation()
})
menu.addEventListener("click",function(){
    modalbackground.classList.toggle("open2")
})


var search = document.querySelector(".search")
var searchModal = document.querySelector(".modal__search ")
var  modalbackground = document.querySelector(".modal__background")
var searchContent = document.querySelector(".search__content ")
search.addEventListener("click",function(){
    searchModal.classList.add("open")
})
searchModal.addEventListener("click",function(){
    searchModal.classList.remove("open")
    modalbackground.classList.remove("open2")
})
searchContent.addEventListener("click",function(event){
    event.stopPropagation()
})
search.addEventListener("click",function(){
    modalbackground.classList.toggle("open2")
})