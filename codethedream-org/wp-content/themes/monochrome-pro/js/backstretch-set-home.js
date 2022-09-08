// Thanks to Tonya. https://wpdevelopersclub.slack.com/archives/code-php/p1470103914000440

;(function ( $, window, document, undefined ) {
    'use strict'

    var $frontPageElement;

    function initImg() {
        if ( typeof BackStretchImg !== 'object' || BackStretchImg.src == '' ) {
            return;
        }

        //var images = $.parseJSON( BackStretchImg.src );
        var images = BackStretchImg;

        if ( ! $.isArray( images ) ) {
            return;
        }

        //console.log( images );

        $frontPageElement.backstretch( images,{
            duration: 3000,
            fade: 2000,
        });
    }

    $( document ).ready( function () {
        $frontPageElement = $( ".front-page-1" );

        //console.log( BackStretchImg );

        if ( typeof $frontPageElement === "undefined" ) {
            return;
        }

        initImg();

    } );

}( jQuery, window, document ));
