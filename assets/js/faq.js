$(function() {
    
        
    $(".dd-menu-btn").on('click',function(){
        $(".dd-menu").slideToggle();
    });
    
    $(".dd-menu a").on('click',function(){
        event.preventDefault();
        $(".dd-menu").slideToggle();
        var anchor = $(this).attr("href");
        var scrollto = $(anchor).offset().top - 240;
        console.log(scrollto);
        $('html, body').animate({scrollTop:scrollto}, 'slow');
    });
      
    $('#accordion').find('.accordion-toggle').click(function(){
        //Expand or collapse this panel
        if ( $(this).hasClass('open') ) {
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
        }
        
        $(this).next().slideToggle();
        
        //Hide the other panels
        $(".accordion-toggle").not($(this)).removeClass('open');
        $(".accordion-content").not($(this).next()).slideUp();
    });

 
});