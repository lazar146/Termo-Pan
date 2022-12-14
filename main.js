var ddlNiz = new Array("Class A","Class B"," C")
var dropdawn;

dropdawn = `<select id="ddl">`;
dropdawn+=`<option value=0>Choose class:</option>`
var broj=1;
for(let i=0;i<ddlNiz.length;i++){
  
  dropdawn+=`<option value=${broj++}>${ddlNiz[i]}</option>"`
}
dropdawn+=`</select>`

document.querySelector("#dp").innerHTML = dropdawn;


var Greska = 0;

    let klik = document.querySelector("#dugme");
    klik.addEventListener("click", forma);

    function forma(){
      var provIme,provPrezime,provEmail,provDdl,provRad,provCh,provText;

    provIme = document.querySelector("#Ime");
    provPrezime = document.querySelector("#prezime");
    provEmail = document.querySelector("#mejl");
    provDdl = document.querySelector("#ddl");
    provRad = document.getElementsByName("Rb1");
    provCh = document.getElementsByName("chd");
    provText = document.querySelector("#pisi"); 

      regZaIme = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})?$/;
      regPrezime = /^[A-Z][a-z]{1,20}(\s[A-Z][a-z]{1,20})?$/;
      regEmail = /^[a-z](([a-z])?([0-9])?){1,13}@(gmail|hotmail)\.com$/;

      if(!regZaIme.test(provIme.value)){
        provIme.nextElementSibling.classList.remove("sakrij");
        provIme.nextElementSibling.innerHTML = "The name is wrong. Example: Michael";
        provIme.classList.add("greska");
        Greska5=true;
      }
      else{
        provIme.nextElementSibling.classList.add("sakrij");
        provIme.nextElementSibling.innerHTML = "";
        provIme.classList.remove("greska");
        Greska5=false;
      }




      if(!regZaIme.test(provPrezime.value)){
        provPrezime.nextElementSibling.classList.remove("sakrij");
        provPrezime.nextElementSibling.innerHTML = "The last name is wrong. Example: Dee Santa";
        provPrezime.classList.add("greska");
        Greska6=true;
      }
      else{
        provPrezime.nextElementSibling.classList.add("sakrij");
        provPrezime.nextElementSibling.innerHTML = "";
        provPrezime.classList.remove("greska");
        Greska6=false;
      }


      if(!regEmail.test(provEmail.value)){
        provEmail.nextElementSibling.classList.remove("sakrij");
        provEmail.nextElementSibling.innerHTML = "The email is wrong. Example: example@gmail.com";
        provEmail.classList.add("greska");
        Greska7=true;;
      }
      else{
        provEmail.nextElementSibling.classList.add("sakrij");
        provEmail.nextElementSibling.innerHTML = "";
        provEmail.classList.remove("greska");
        Greska7=false;
      }

      let ddlVrednost = provDdl.options[provDdl.selectedIndex].value;
      
      console.log(ddlVrednost)
      if(ddlVrednost == "0"){
        provDdl.parentElement.nextElementSibling.classList.remove("sakrij");
        provDdl.parentElement.nextElementSibling.innerHTML = "You need to choose a class";
        provDdl.classList.add("greska");
        Greska8=true;
      }
      else{
        provDdl.parentElement.nextElementSibling.classList.add("sakrij");
        provDdl.parentElement.nextElementSibling.classList.innerHTML = "";
        provDdl.classList.remove("greska");
        Greska8=false;
      }

      let usluga = "";
      for(let i = 0; i < provRad.length; i++){
          if(provRad[i].checked){
              usluga = provRad[i].value;
              break;
          }
      }
      

      let ch = "";
      for(let i = 0; i < provCh.length; i++){
          if(provCh[i].checked){
              ch += provCh[i].value + " ";
          }
      }
      var greska1,greska2,greska3,greska4,greska5,greska6,greksa7,greska8
      if(ddlVrednost == "0"){
        provDdl.parentElement.nextElementSibling.classList.remove("sakrij");
        provDdl.parentElement.nextElementSibling.innerHTML = "You need to choose a class";
        provDdl.classList.add("greska");
        Greska1=true;
      }
      else{
        provDdl.parentElement.nextElementSibling.classList.add("sakrij");
        provDdl.parentElement.nextElementSibling.classList.innerHTML = "";
        provDdl.classList.remove("greska");
        Greska1=false;
      }








      if(usluga == ""){
        provRad[0].parentElement.parentElement.nextElementSibling.classList.remove("sakrij");
        provRad[0].parentElement.parentElement.nextElementSibling.innerHTML = "You need to check one";
        provRad[0].parentElement.parentElement.classList.add("greska");
        Greska2=true;
      }
      else{
        provRad[0].parentElement.parentElement.nextElementSibling.classList.add("sakrij");
        provRad[0].parentElement.parentElement.nextElementSibling.classList.innerHTML = "";
        provRad[0].parentElement.parentElement.classList.remove("greska");
        Greska2=false;
      }

      if(ch == ""){
        provCh[0].parentElement.parentElement.nextElementSibling.classList.remove("sakrij");
        provCh[0].parentElement.parentElement.nextElementSibling.innerHTML = "You need to check one";
        provCh[0].parentElement.parentElement.classList.add("greska");
        Greska3=true;
      }
      else{
        provCh[0].parentElement.parentElement.nextElementSibling.classList.add("sakrij");
        provCh[0].parentElement.parentElement.nextElementSibling.classList.innerHTML = "";
        provCh[0].parentElement.parentElement.classList.remove("greska");
        Greska3=false;
      }
       if(provText.value.length <25){
        provText.nextElementSibling.classList.remove("sakrij");
        provText.nextElementSibling.innerHTML = "You need atleast 25 characters to enter";
        provText.classList.add("greska");
        Greska4=true;
      }
      else{
        provText.nextElementSibling.classList.add("sakrij");
        provText.nextElementSibling.innerHTML = "";
        provText.classList.remove("greska");
        Greska4=false;
      }
       console.log(Greska)
      if(Greska1 == false && Greska2 == false && Greska3 == false && Greska4 == false && Greska5 == false && Greska6 == false && Greska7 == false && Greska8 == false ){
        document.querySelector("#dugme").nextElementSibling.classList.remove("sakrij");
        document.querySelector("#dugme").nextElementSibling.innerHTML = "All good!";
        document.querySelector("#dugme").classList.add("greska");
        document.querySelector("#prijava").reset()      
      }
      else{
        document.querySelector("#dugme").nextElementSibling.classList.add("sakrij");
        document.querySelector("#dugme").nextElementSibling.innerHTML = "";
      }

}
document.querySelector("#pisi").addEventListener("keyup",function(){

  var vrednostp=document.querySelector("#pisi");
  var brojkaraktera=vrednostp.value;
  var sadduzinaje = brojkaraktera.length;

  console.log(brojkaraktera);


  if(sadduzinaje<=200){
      
      var smanji=200-sadduzinaje;
      document.querySelector("#brojkar").innerHTML = "Left characters to go:"+" "+smanji;
  }
  else{
      vrednostp.value= brojkaraktera.substring(0,200);
      
  }
});

      //nav


      var ispisNav = "";
      var nizNav = new Array("About Company","Services","Prices","Workers","Contact","Autor");
      var nizNavHref = new Array("#about","#servisi","#skills","#projekti","#contact","ja.html");

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


var rotate = false;
function setbackground(){
  window.setTimeout( "setbackground()", 5000);
  newImage = rotate ? 'url(img/7.jpeg)' : 'url(img/2.jpeg)';
  rotate = !rotate;
  document.getElementById('pozadina').style.backgroundImage = newImage;
}
setbackground();

var commentSlider = {
  
  'config' : {
    'container' : $('#wrapper')
  },
    
  'init' : function(config) {
      if(config && typeof(config) == 'object') {
        $.extend(commentSlider.config, config);
      }
    
      
      
      commentSlider.$container = commentSlider.config.container;

     
      commentSlider.$paragraphs = commentSlider.$container.
        find('p');
    
      
      commentSlider.$dots = commentSlider.$container.
        find('ul.dots-wrap > li');
    
     
      commentSlider.$firstDot = commentSlider.$container.
        find('ul.dots-wrap > li:first-child');
   
      commentSlider.$firstParagraph = commentSlider.$container.
        find('p:first-child');
      
   
      commentSlider.$firstDot.addClass('active');


      commentSlider.$firstParagraph.addClass('activeText');
    
      commentSlider.currentItem(commentSlider.$paragraphs, commentSlider.$dots);
      commentSlider.setActiveDot(commentSlider.$dots);
      commentSlider.timer();
  },
  
 
  'timer' : function() {
    setInterval(function(){ 
      
    }, 5000);
  }, 
  
  
  'dotNumber' : function($dot) {
    var dotClassArray = [];
    var dotClassList = dotClassArray.push($dot.attr('class'));
    var splitArray = dotClassArray.toString().split(' ');
    
    for(i = 0; i < splitArray.length; i++) {
      if (splitArray[i] === "dot") { 
        splitArray.splice(i, 1);
        var dotClickedNumber = splitArray[i];
        commentSlider.paragraphNumber(dotClickedNumber, commentSlider.$paragraphs);
      }
    }
  },
  
  'paragraphNumber' : function(dotClickedNumber, $paragraphs) {
    $paragraphs.each(function() {
        var $paragraph = $(this);
        var paragraphClass = $paragraph.attr('class');    
       
        if(paragraphClass === dotClickedNumber) {          
          $paragraph.addClass('activeText');
          $paragraph.siblings().removeClass('activeText').addClass('slideLeft');
          setTimeout(function () { 
             $paragraph.siblings().removeClass('slideLeft');    
          }, 400);          
        }
    });
  },
  
  
  'currentItem' : function($paragraphs, $dots) {
    $paragraphs.each(function(i) {
      var $paragraph = $(this);
      $paragraph.addClass([] + i);
    });
    
    $dots.each(function(i) {
      var $dot = $(this);
      $dot.addClass([] + i);
    });
  },
  
  
  'setActiveDot' : function($dots) {
    $dots.each( function() {
      var $dot = $(this);
      $dot.on('click', function() {
        if($dot.hasClass('active')) {
          return false;
        } else {
          $dot.addClass('active');
          $dot.siblings().removeClass('active');
        }
        commentSlider.dotNumber($dot);      
      });
    });
  }
};
  

$(document).ready(commentSlider.init);



$( document ).ready(function(){
  $("#close-btn").click(function(){
    
   $(".small-image").removeClass('active');
   $("#show_image_popup").slideUp();
 })

 $(".small-image").click(function(){
     
    $(".small-image").removeClass('active');
  
    $(this).addClass('active');

   var image_path = $(this).attr('src'); 
   $("#show_image_popup").fadeOut();
  
   $("#show_image_popup").fadeIn();
   $("#large-image").attr('src',image_path);

 })

})




document.querySelector("#skldugme").addEventListener("click",function(){
  var konacna;
  var mZaStaklo;
  mZaStaklo = document.getElementById("glass").value  ;
  konacna = mZaStaklo*250;
  

  document.getElementById("glass").nextElementSibling.innerHTML = konacna;
  document.getElementById("glass").nextElementSibling.classList.remove("sakrij");
  console.log(konacna)
  console.log(mZaStaklo)



});







var ogledalo = document.querySelector("#skldugme1").addEventListener("click",function(){
  var konacna;
  
  mZaOgledalo = document.getElementById("mirror").value  ;
  konacna = mZaOgledalo*300;
  

  document.getElementById("mirror").nextElementSibling.innerHTML = konacna;
  document.getElementById("mirror").nextElementSibling.classList.remove("sakrij");
  
});




function izracunajOgledalo(){
  var konacna;
  konacna = 2;  
  
  
  
}
    