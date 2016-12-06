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

<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>

<script type="text/javascript">
  var myLatlng = new google.maps.LatLng(48.852937,2.364178);

  var myOptions = {
      zoom: 14,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#a6aa93"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#e7ff00"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"on"}]}]
  };

  var map = new google.maps.Map(document.getElementById('map'), myOptions);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: "You are here!"
  });
</script>


