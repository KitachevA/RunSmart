const slider = tns({
    container: '.carousel__inner',
    items: 1,
    nav: true,
    controls:false,
    navPosition: 'bottom',
    navContainer: '#dots',
    autoplay:true,
    autoplayTimeout: 1000,
    autoplayText:['<i class="fa-solid fa-play"></i>','<i class="fa-solid fa-pause"></i>'],
    autoplayButton:'.autoplay',
    responsive:{
        1025:{
            nav:false,
            autoplay:false
            
        }
    }
  });

document.querySelector('.carousel__inner-prev').addEventListener('click', function(){
    slider.goTo('prev');
});

document.querySelector('.carousel__inner-next').addEventListener('click', function(){
    slider.goTo('next');
});