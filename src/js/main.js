$(document).ready(function(){

    // Carousel
    $('.cards').owlCarousel({
        // autoplay: true,
        // autoplayTimeout: 10000,
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
    
    playButtons.forEach(item => item.addEventListener('click', function(){
      this.querySelector('audio').play();
    }));
    
});
