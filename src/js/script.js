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

(function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      $('.catalog-item__btn').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        });
      });
      
      $('[data-modal=consaltation]').on('click', function() {
        $('.overlay, #consaltation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consaltation, #thanks, #order').fadeOut('slow');
    });
    
    $('.catalog-item__btn').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });
     
    function validetForms(forms){
        $(forms).validate({
            rules: {
                name:'required',
                phone:'required',
                email:{
                    required: true,
                    email: true
                } 
            },
            messages: {
                name: "Будь-ласка, введіть ваше ім'я",
                phone:'Будь-ласка, введіть ваш номер',
                email: {
                  required: "Нам потрібна ваша пошта, щоб ми могли звя'затися з вами",
                  email: "Ваша електронна почта повинна бути у форматі name@domain.com"
                }
            }
        
        });

    }

    validetForms('#consaltation form');
    validetForms('#order form');
    validetForms('#consaltation-form');

    //MaskInput
    $('input[name=phone]').mask("+38(099) 999-99-99");

    });
    })(jQuery);
    

    const btnBack = document.querySelectorAll('.catalog-item__back'),
          more = document.querySelectorAll('.catalog-item__link');

    function toggleSlide(tabs){
        tabs.forEach((btn, i)=>{
            btn.addEventListener('click', (e)=>{
                e.preventDefault();
                document.querySelectorAll('.catalog-item__content')[i].classList.toggle('catalog-item__content_active');
                document.querySelectorAll('.catalog-item__list')[i].classList.toggle('catalog-item__list_active');
         
            });
        });
    }

   toggleSlide(btnBack);
   toggleSlide(more);


