
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

  document.body.classList.add('show');
  // document.addEventListener("DOMContentLoaded", function(e) {
  //   document.body.classList.remove('fade');
  // });

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({topSpacing:0});

     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });


  // $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.active-works-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 100,
        dots: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }
    });

    $('.active-gallery').owlCarousel({
        items:6,
        loop:true,
        dots: true,
        autoplay:true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>",
        "<span class='lnr lnr-arrow-down'></span>"],        
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 6,
            }

        }
    });


  //   $(document).ready(function() {

  //     $('html').addClass('js-enabled');
  
     
  //     $(window).load(function() {
  //         $(".js-preloader").fadeOut(800, function() {
  //             $(".js-main-container").fadeIn(800);
  
  //             // setup_scrollreveal();
  //             setup_progress_bar_animation();
  //         });
  //     });
  
  // });
  
  
  
  // function setup_progress_bar_animation()
  // {
  //     var $animation_elements = $("[class*='a-']");
  //     var $window = $(window);
  
  //     $window.on('scroll resize', function() {
  //         var window_height = $window.height();
  //         var window_top_position = $window.scrollTop();
  //         var window_bottom_position = (window_top_position + window_height);
  
  //         $.each($animation_elements, function() {
  //             var $element = $(this);
  //             var element_height = $element.outerHeight();
  //             var element_top_position = $element.offset().top;
  //             var element_bottom_position = (element_top_position + element_height);
  
  //             // Check to see if this current container is within viewport
  //             if ((element_bottom_position >= window_top_position) &&
  //                 (element_top_position <= window_bottom_position)) {
  //                 $element.addClass('in-view');
  
  //                 // Animate progress bar
  //                 if ($element.hasClass('a-progress-bar')) {
  //                     $element.css('width', $element.attr('data-percent') + '%');
  //                 }
  
  //             }
  //             //else {
  //             //    $element.removeClass('in-view');
  //             //}
  //         });
  //     });
  
  //     $window.trigger('scroll');
  
  // }
  



    // Select all links with hashes
    $('.navbar-nav a[href*="#"]') 

    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click',function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-50
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
    });

        // Select all links with hashes
        $('.landing-content a[href*="#"]') 

        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click',function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top-50
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
        });

      $(document).ready(function() {
          $('#mc_embed_signup').find('form').ajaxChimp();
      });   

 });
