(function($) {
  "use strict";



  function SendMail() { 
    function SendMessage() {
      var params = { 
          name: document.querySelector('#name').value,
          email: document.querySelector('#email').value,
          message: document.querySelector('#message').value
      }
      const serviceId = "service_qf4gwx1";
      const templateId = "template_02os09h";

      emailjs.send(serviceId,templateId,params).then(
          res => {
              document.querySelector('#name').value = ""
              document.querySelector('#email').value = ""
              document.querySelector('#message').value = ""
              alert('success');
          }
      ).catch(er => {
          console.log(er)
      });
    }
    let form = document.getElementById('contactForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        SendMessage()
    }) 
  }
  SendMail()




 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
     
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation 
});
 
  // owlCarousel
  $(".logo_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="left"><img src="assets/img/left.svg" alt=""></i>',
      '<i class="right"><img src="assets/img/right.svg" alt=""></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 6
      }
    }
  });

 
})(jQuery);
