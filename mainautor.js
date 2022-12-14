  //nav


var ispisNav = "";
var nizNav = new Array("Main Site","Autor");
var nizNavHref = new Array("index.html","ja.html");

for(let i=0;i<nizNav.length;i++){
  ispisNav+= `<li class="nav-item"><a class="nav-link" href=${nizNavHref[i]}>${nizNav[i]}</a></li>`
}


document.querySelector(".nav-menu").innerHTML = ispisNav;

var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

window.addEventListener("scroll", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
})