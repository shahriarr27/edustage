$(window).on('scroll',function(){
   if($(window).scrollTop()> 100){
       $('nav').addClass('nav-white');
   }
   else{
       $('nav').removeClass('nav-white');
   }
});



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    mouseDrag: true,
    autoplay:true,
     autoplayTimeout:5000,
     smartSpeed: 1500,
     dots:false,
 //    autoplaySpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },
        1024:{
            items:3
        },
        1440:{
            items:3
        }
    }
 });
 














 var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
});
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    owl.trigger('prev.owl.carousel', [300]);
});























