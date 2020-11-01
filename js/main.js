


    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        asNavFor: '.heroes__slider-img',
        prevArrow: '<button class="slick-btm slick-next"><img src="images/стрелка.png" alt="prev"> </button>',
        nextArrow: '<button class="slick-next slick-next"><img src="images/стрелка.png" alt="next"> </button>',
    });
    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
       asNavFor:'.heroes__slider-img',
       fade:true,
      });
 
