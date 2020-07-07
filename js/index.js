$(document).ready(function() {
  "use strict"

  // Change navigation background color on scroll
    
  function menuscroll() {

    var top = $(window).scrollTop();

    var $navmenu = $(".nav-menu");
    if (top > 50) {
      $navmenu.addClass("is-scrolling");
    } else {
      $navmenu.removeClass("is-scrolling");
    }

  }
  menuscroll();

  $(window).on("scroll", function() {
    menuscroll();
  });

  // Close collapse navigation on click

  $(".navbar-nav > li:not(.dropdown) > a").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Toggle navigation

  var siteNav = $("#navbar");
  siteNav.on("show.bs.collapse", function(e) {
    $(this).parents(".nav-menu").addClass("menu-is-open");
  })
  siteNav.on("hide.bs.collapse", function(e) {
    $(this).parents(".nav-menu").removeClass("menu-is-open");
  })

  // Smooth scrolling effect
  
  // Select all links with hashes
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function(event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // Animation for text

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
  
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  // Social icon hover effect

  $(".f_hover").hover(function() {
    $(".f_icon").attr("src", "img/f_icon_hover.png").addClass("active"); 
    }, function() {
        $(".f_icon").attr("src", "img/f_icon.png");
  });

  $(".t_hover").hover(function() {
    $(".t_icon").attr("src", "img/t_icon_hover.png").addClass("active"); 
    }, function() {
        $(".t_icon").attr("src", "img/t_icon.png");
  });

  $(".i_hover").hover(function() {
    $(".i_icon").attr("src", "img/i_icon_hover.png").addClass("active"); 
    }, function() {
        $(".i_icon").attr("src", "img/i_icon.png");
  });

  $(".start_hover").hover(function() {
    $(".start").attr("src", "img/start_hover.png").addClass("active"); 
    }, function() {
        $(".start").attr("src", "img/start.png");
  });
});
