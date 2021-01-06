(function ($) {
  
  $(document).ready(function(){
    
    let switchLang = $(".switch-button");

    switchLang.click(function(){
      let button = $(this); 
      let language = button.data('lang');

      $.getJSON(`lang/${language}.json`, function( data ) {
        let fields =  $('body').find('[data-trans]');
          
        fields.each(function(i, field) {
          let el = $(field);
          let trans = el.data('trans');
          
          el.text(data[trans]);

          $('.lang-active').removeClass('lang-active');
          
        }); 

        button.addClass('lang-active');
      });
    });

  });
  

  $("#owl-carousel-portfolio-one").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 12,
    stagePadding: 12,
    dots:false,
    merge:true,
    center:true,

    autoplayHoverPause: true,
    responsiveClass: true,
    autoHeight: false,
    autoplayTimeout: 2500,
    smartSpeed: 800,
    nav: false,
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 3
      },

      1024: {
        items: 4
      },

      1366: {
        items: 4
      }
    }
  });
  $("#owl-carousel-portfolio-two").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 12,
    rtl:true,
    stagePadding: 12,
    merge:true,
    center:true,
    dots:false,
    /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
 autoplayHoverPause: true,
 responsiveClass: true,
 autoHeight: false,
 autoplayTimeout: 2500,
 smartSpeed: 800,
 nav: false,
 autoWidth: true,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 3
      },

      1024: {
        items: 4
      },

      1366: {
        items: 4
      }
    }
  });


  // Porfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });
  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  });
  // Initiate venobox (lightbox feature used in portofilo)
  $('.venobox').venobox({
    titleBackground: 'transparent',
    share: ['facebook', 'twitter', 'linkedin']
  });
  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
  return false;


})(jQuery);