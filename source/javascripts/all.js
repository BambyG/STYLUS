//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document). ready (function(){
  
  $(window).on("scroll",function() {
    if ( $(this).scrollTop() > 640){
      $(".navbar").css("background-color", "#333333");
  } else{
    $(".navbar").css("background-color", "transparent");
  }

 });
});



