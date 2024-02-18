// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
const elemc = document.querySelector("#elem-container")
const fixed = document.querySelector("#fixed-images")
elemc.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemc.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})
const elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        const image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// gsap.from("#page3 #elem-container .elem h2", {
//     y: 100,
//     opacity: 0,
//     duration: .1,
//     stagger: .3,
//     scrollTrigger: {
//         trigger: "#page3 #elem-container .elem h2",
//         scroller: "body",
//         scrub: 1,
//         start: "top -50%",
//         markers: true

// }})
var menu = document.querySelector("nav h3")
var scr = document.querySelector("#full-scr")
var toggle = 0
var img = document.querySelector("nav img")
menu.addEventListener("click", function () {
    if (toggle == 0) {
        scr.style.top = 0
        img.style.opacity = 0
        toggle = 1
    } else {
        scr.style.top = "-150%"
        img.style.opacity = 1
        toggle = 0
    }
})
var loader = document.querySelector("#loader")
setTimeout(function () {
    loader.style.top = "-100%"
}, 4000);