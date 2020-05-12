$(document).ready(function(){
    // ScrollToTop
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1200) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    $("a[href=#up]").click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(_href).offset().top + "px"
      }, 600);
      return false;
    });

    // Carousel
    $('.cards').owlCarousel({
        autoplay: true,
        autoplayTimeout: 10000,
        smartSpeed: 500,
        margin: 25,
        responsive:{
          0:{
            items: 1,
            nav: false
          },
          1050:{
            items: 2,
          }
        }
    });

    // Audio
    let playButtons = document.querySelectorAll('#play-button');
    
    playButtons.forEach(item => item.addEventListener('click', function(e){
      e.preventDefault();
      if(this.querySelector('audio').paused) {
        this.querySelector('audio').play();
      } else {
        this.querySelector('audio').pause();
      }
    }));

    // Effects
    $('.promo__quote').slideDown(500);

});
