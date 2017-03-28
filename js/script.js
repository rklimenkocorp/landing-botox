

$('.slick-slider-block').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow:'<button class="btn-arrow btn-arrow__prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow:'<button class="btn-arrow btn-arrow__next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
});
$('.collage').slick({
    slidesToShow: 4,
});
$('.opinion-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow:'<button class="btn-arrow btn-arrow__prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow:'<button class="btn-arrow btn-arrow__next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
});

/*
 $('.mgnf_pop').magnificPopup({
 delegate: '.mgn_img', // child items selector, by clicking on it popup will open
 type: 'image',
 gallery:{
 enabled:true,
 tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
 }

 // other options
 });

 $('.slick_document').magnificPopup({
 delegate: '.sert_img', // child items selector, by clicking on it popup will open
 type: 'image',
 gallery:{
 enabled:true,
 tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
 }

 // other options
 });*/


