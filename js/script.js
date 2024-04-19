  // preloader js
  $(window).on('load', function () {
    $('.preloader').delay(0).fadeOut(300);
  })

  // banner slider js
  $('.left-banner-main').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
    nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
    fade: true,
  });

  // banner bottom category slider js
  $('.banner-bottom-category-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 8,
    slidesToScroll: 1,
    prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
    nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // featured brand slider js
  $('.brand-slider-main').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
    nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // prodcut list slider js
  $('.product-list-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
    nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // all prodcut list slider js
  $('.all-product-list-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
    nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // blog list slider js
  $('.blog-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.bar-icon').click(function () {
    $('.left-menu-body').addClass('show-menu')
  })

  $('.close-menu').click(function () {
    $('.left-menu-body').removeClass('show-menu')
  })

  $('.close-menu').click(function () {
    $('.main-overlay').removeClass('show-main-overlay')
  })

  $('.bar-icon').click(function () {
    $('.main-overlay').addClass('show-main-overlay')
  })

  $('.main-overlay').click(function () {
    $('.main-overlay').removeClass('show-main-overlay')
  })

  $('.main-overlay').click(function () {
    $('.left-menu-body').removeClass('show-menu')
  })

  $(".hasDD").click(function (e) {
    $(this)
      .find("> ul")
      .slideToggle();
  });

  $('.search').click(function () {
    $('.right-search-option').slideDown();
  })
  $('.cancel').click(function () {
    $('.right-search-option').slideUp();
  })

  // back to top js
  let btn = $('#button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });

  // login and register js
  $('.customer').click(function () {
    $('.hide-and-show-part').slideUp();
  })
  $('.vendor').click(function () {
    $('.hide-and-show-part').slideDown();
  })

  // feedback slider js
  $('.feedback-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // partnership slider js
  $('.partnership-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  // coupon code js
  $('.coupon-code-here').click(function () {
    $('.coupon-code-form').slideToggle();
  })
  // ship address js
  $('.show-hide-ship-address').click(function () {
    $('.different-address').slideToggle();
  })

  // product detils image change js

  $(document).ready(function () {
    $('.zoom-child-image img').click(function () {
      let image = $(this).attr('src');
      $('.big-side-image img').attr('src', image)
    })

    $('.zoom-child-image').on('click', function () {
      $('.zoom-child-image.active').removeClass('active');
      $(this).addClass('active');
    })
  })

  $('.filter').click(function () {
    $('.mobile-filter-overlay').addClass('show-mobile-filter-overlay')
  })

  $('.mobile-filter-overlay').click(function () {
    $('.mobile-filter-overlay').removeClass('show-mobile-filter-overlay')
  })

  $('.mobile-filter-overlay').click(function () {
    $('.mobile-filter').removeClass('show-mobile-filter')
  })

  $('.filter').click(function () {
    $('.mobile-filter').addClass('show-mobile-filter')
  })

  $('.close-mobile-filter').click(function () {
    $('.mobile-filter').removeClass('show-mobile-filter')
  })

  $('.close-mobile-filter').click(function () {
    $('.mobile-filter-overlay').removeClass('show-mobile-filter-overlay')
  })

  $('.mobile-cart').click(function () {
    $('.mobile-shopping-overlay').addClass('show-mobile-shopping-overlay')
  })

  $('.mobile-shopping-overlay').click(function () {
    $('.mobile-shopping-overlay').removeClass('show-mobile-shopping-overlay')
  })

  $('.mobile-cart').click(function () {
    $('.mobile-shopping-cart').addClass('show-mobile-shopping-cart')
  })

  $('.mobile-shopping-overlay').click(function () {
    $('.mobile-shopping-cart').removeClass('show-mobile-shopping-cart')
  })

  $('.close-mobile-shopping').click(function () {
    $('.mobile-shopping-cart').removeClass('show-mobile-shopping-cart')
  })

  $('.close-mobile-shopping').click(function () {
    $('.mobile-shopping-overlay').removeClass('show-mobile-shopping-overlay')
  })