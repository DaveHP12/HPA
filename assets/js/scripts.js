
/*************Inicialización de MaterializedCSS***************/
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(document).ready(function(){
    $('.parallax').parallax();
  });

  $(document).ready(function(){
    $('.slider').slider();
 
  });

 $(document).ready(function(){
    $('.carousel').carousel();
  });

        
         $(document).ready(function(){
    $('.modal').modal();
  });

  $(document).ready(function(){
    $('.tabs').tabs();
  });


 $(document).ready(function(){
    $('.tap-target').tapTarget();
  });
      
        $(document).ready(function(){
    $('.collapsible').collapsible();
  });

    $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

   $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false
    });
  });


 $(document).ready(function(){
    $('.tooltipped').tooltip();
  });
  /*************Acaba - Inicialización de MaterializedCSS***************/




/*******************Cambia el color de la navbar al hacer el scroll*******************/
$(function () {
  $(document).scroll(function () {
    var $nav = $(".transnav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});



/************************************************************************/
/*********************Aquí va el slider de acerca de nosotros********/
jQuery(document).ready(function($) {
        		"use strict";
		        $('#customers-testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 3
		              }
		            }
		        });
        	});