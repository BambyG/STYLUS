//= require jquery
//= require bootstrap-sprockets
//= require_tree .

//$(document). ready (function(){
  
//  $(window).on("scroll",function() {
//    if ( $(this).scrollTop() > 640){
 //     $(".navbar").css("background-color", "#222222" );
 // } else{
 //   $(".navbar").css("background-color", "transparent");
 // }

// });
//});


$(document).ready(function() {
  // navbar transition jQuery script
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 200) {
      $(".navbar").slideUp();
    }
    else {
      $(".navbar").slideDown();
    }
  });
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


