$(document).ready(function() {
    $(".burger").click(function(event) {
        $(".burger, .nav").toggleClass("active");
        $("body").toggleClass("lock");
    }) 
    
    $('.nav').click(function(event) {
        $('.burger,.nav').removeClass('active');
        $('body').removeClass('lock');
    })
    
    let slider_item = $('.slider_item');
    slider_item.on('click', function() {
	slider_item.removeClass('active');
    $(this).addClass('active');
    });
    
    const accBtn = document.querySelectorAll(".acc_header");
    const tabsItems = document.querySelectorAll(".accordion_item");

    accBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId); 
        
        if( ! currentBtn.classList.contains("active") ) {
            accBtn.forEach(function(item) {
            item.classList.remove("active");    
        });

        tabsItems.forEach(function(item) {
            item.classList.remove("active");    
        });
        
        currentBtn.classList.add("active");
        currentTab.classList.add("active");   
        }
         
        });
    });
    
    $('.quotes_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });
    
    $('.testimonials_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });
    

   
})









    








