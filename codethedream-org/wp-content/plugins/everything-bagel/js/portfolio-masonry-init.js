console.log(" Masonry INIT 1157a");

var container = document.querySelector(".portfolio-shortcode-area");
var body = document.getElementsByTagName("body")[0];
var msnry;
// initialize Masonry after all images have loaded
imagesLoaded(body, function() {
  msnry = new Masonry(container, {
    itemSelector: ".entry",
    gutter: 20
  });
});

// layout after everything loaded
// window.on( 'load', function() {
//      console.log('TEST 1128a');
//   container.msnry();
// });

// without jQuery (doesn't work in older IEs)
// document.addEventListener('DOMContentLoaded', function(){
//      msnry = new Masonry( container, {
//     	itemSelector: '.entry',
//     	gutter: 20
//     });
// }, false);
