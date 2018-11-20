$(document).ready(function(){
    $('.click_but').on('click', function(){
        var attr = $(this).attr('data-set');
        var open_menu = $('#'+attr);
        open_menu.show();
    })

    $('.close').on('click', function(){
     $('.menu_media').hide();
    })

    
    $('.phone_modal').mask('+7'+'(000) 000-0000', {placeholder: "+7 ( _ _ _ ) _ _ _ - _ _  - _ _ "});

    $('.sc').click(function () {
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 1000);
      return false;
  });

});



$('.reviews_blocks').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	

          