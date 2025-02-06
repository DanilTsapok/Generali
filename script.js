var input = document.querySelector("#phone");
  var iti = window.intlTelInput(input, {
    initialCountry: "it", 
    separateDialCode: true, 
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js" // Enable number formatting
  });

  $(document).ready(function() {
    $("#rangeSliderMonth").ionRangeSlider({
      skin: "round",        
      min: 1,               
      max: 100,                        
      from: 0,
      keyboard: true,
      grid: true,   
      step: 1,         
      values: ["1 month", "3 month","6 month","9 month","12 month"]
    
    });
    $("#rangeSliderEuro").ionRangeSlider({
        skin: "round",        
        min: 300,               
        max: 15000,                        
        from: 0,
        keyboard: true,
        grid: true,   
        step: 1,         
        values: ["300€", 3975, 7650, 11325 ,"15000€"]
      
      });
  });

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    spaceBetween:40,
    autoplay: {
        delay: 4000, 
        disableOnInteraction: false, 
      },
  
  
  });