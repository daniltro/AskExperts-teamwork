 $(document).ready 
 
 (function(){

    $('.testimonial__slider').slick({
      arrows: false,
      slidesToShow: 1,
    })

    $('.testimonial--prev-button').on('click', function (e) {
      e.preventDefault()
      $('.testimonial__slider').slick('slickPrev')
    })

    $('.testimonial--next-button').on('click', function (e) {
      e.preventDefault()
      $('.testimonial__slider').slick('slickNext')
    })
    
 });
 
 