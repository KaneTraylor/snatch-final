 // <!-- ******************************* Mobile menu toggle ******************************* -->

    $(".menu-button").click(function(){
        $(".mobile-nav").slideToggle();
    });

// <!-- ******************************* on Scroll Fix Header ******************************* -->

    $(window).scroll(function(){
        var navbar = $('.header-navbar'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) navbar.addClass('fixed');
        else navbar.removeClass('fixed');
    });

// <!-- ******************************* Vimo video logo hide ******************************* -->

    $(document).ready(function(){
        $(".logo").addClass('nayab');
        });
      