
jQuery(document).ready(function($){
  // document.body.classList.add("has-people-grid");
 $(".team-member").hover(function(){
   console.log('hhhhhhhh')
   $(this).children('.team-front').hide();
   $(this).children('.team-hover').show();
   // $('.team-front').css({'opacity': ".2"});
   $('.team-front').addClass("half-opacity");


 }, function() {
   $(this).children('.team-front').show();
   $(this).children('.team-hover').hide();
   // $('.team-front').css({'opacity': "1"});
   $('.team-front').removeClass("half-opacity");

 });

});
