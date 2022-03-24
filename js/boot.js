$(document).ready(function(){
    $('.carousel').carousel({
        interval: 2500
      })
      $(".menu_colors li").click(function(){
        console.log();
        $("link[href*='default']").attr("href",$(this).attr("data-value"));
      })



      // start code of overly
      $(window).load(function(){
        $(".overlly .spinner").fadeOut(2000,function(){
          $(".overlly").fadeOut(3000,function(){
            $("body").css("overflow","auto")
          });
        })
      })
})

var x = document.getElementById("main");
var d = document.getElementById("main_page");
var colors =document.querySelectorAll(".menu_colors li");
x.onclick=function(){
  d.classList.toggle("active");
}
console.log(colors);

// colors.forEach(function(e){
//   e.addEventListener("click",function(){
//     console.log(this.getAttribute("data-value"));

//   })
// })

