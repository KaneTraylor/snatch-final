$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });



    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else {
            $(".navbar-area").addClass("sticky");
        }
    });



    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });



    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });


    //===== Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //===== Svg

    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });


    //=====  WOW active

    new WOW().init();


    //=====  Swiper Slider

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
//        autoplay: {
//            delay: 3000,
//        },
        speed: 1000,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 40,
            depth: 150,
            modifier: 1,
            slideShadows: false,
        }
    });
    

    //===== Slick Slider

    $('.testimonial-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-author'
    });
    
    $('.testimonial-author').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.testimonial-content',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: "0",
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },{
            breakpoint: 576,
            settings: {
                slidesToShow: 3
            }
        }]
    });




// grab dropdown and slider inputs
let loan = $("#loans")
let creditScores = $('#inputRange')

// grab dynamic data elements
let displayedMobileCreditScore = $("#mobileCreditScore")
let displayedMobileInterest = $("#mobileAvgInterestCost")
let displayedMobileMonthlyPayment = $("#mobileAvgMonthlyPayment")
let displayedLoanType = $('#loanType')
let displayedAvgLoanAmount = $("#avgLoanAmount")
let displayedAvgInterestCost = $("#avgInterestCost")
let displayedAvgMontlyPayment = $("#avgMonthlyPayment")
let displayedDisclaimer = $("#dynamic-disclaimer")

var autoDisclaimer = `<div id="dynamic-disclaimer">
          Disclaimer: The 60-month auto loan <a class="disclaimer-link" href="https://www.myfico.com/credit-education/calculators/loan-savings-calculator/#apr">APRs</a> are estimated based on a loan amount of $39,731 and FICO scores between 300 and 850. Calculations were made using the <a class="disclaimer-link" href="https://www.calculator.net/auto-loan-calculator.html?cloanamount=39731&cmonthlypay=380&cloanterm=60&cinterestrate=12.84&cdownpayment=0&ctradeinvalue=0&cstate=&csaletax=0&ctitlereg=0&printit=0&ctype=standard&x=0&y=0#autoloanresult">Calculator.net</a> on Nov. 9, 2022.
      </div>`
var mortgageDisclaimer = `<div id="dynamic-disclaimer">
          Disclaimer: The rates shown are averages based on thousands of financial lenders, conducted daily by Informa Research Services, Inc. The 30-year fixed home mortgage APRs are estimated based on the following assumptions. FICO(R) scores between 630 and 670, assume a Loan Amount of $300,000, 1.0 (0.0) Points, a Single Family - Owner Occupied Property Type and an 80% (60-80%) Loan-to-Value Ratio. Calculated by FICO on July 15, 2022. Anything below 620 will need to be discussed with your lender. 
      </div>`
var creditDisclaimer = `<div id="dynamic-disclaimer">
          Disclaimer: The average card balance is based on a review of more than 1 million anonymized <a class="disclaimer-link" href="https://www.lendingtree.com/credit-cards/credit-card-debt-statistics/#:~:text=Overall%2C%20the%20national%20average%20card%20debt%20among%20cardholders%20with%20unpaid%20balances%20was%20%246%2C569.%20That%20includes%20debt%20from%20both%20bank%20cards%20and%20retail%20credit%20cards.">LendingTree</a> users’ credit reports from January 2021 through February 2021. Note: These totals include debt from bank credit cards and store credit cards. The 36 month credit card <a class="disclaimer-link" href="https://www.businessinsider.com/personal-finance/average-credit-card-interest-rate">APRs</a> are estimated based on a credit card balance of $6,569 and FICO scores between 300 and 850. Calculations were made using the <a class="disclaimer-link" href="https://www.bankrate.com/finance/credit-cards/credit-card-payoff-calculator/">Bankrate calculator</a> on Oct 6, 2022.
      </div>`
var personalDisclaimer = `<div id="dynamic-disclaimer">
          Disclaimer: The <a class="disclaimer-link" href="https://www.nerdwallet.com/article/loans/personal-loans/personal-loan-statistics#average-personal-loan-rates">average personal loan amount</a> is based on data from TransUnion. The 5 year personal loan <a class="disclaimer-link" href="https://www.bankrate.com/loans/personal-loans/rates/">APRs</a> are estimated based on a loan amount of $8,085 and FICO scores between 300 and 850. Calculations were made using the <a class="disclaimer-link" href="https://www.bankrate.com/loans/personal-loans/personal-loan-calculator/">Bankrate calculator</a> on Oct 6, 2022.
      </div>`


// build data object
let loanInfo = {
    loanType: '--',
    avgLoanAmount: '--',
    avgInterestCost: '--',
    avgMonthlyPayment: '--',
    disclaimer: '--'
}

const updateData = () => {
    displayedLoanType.text(loanInfo["loanType"])
    displayedAvgLoanAmount.text(loanInfo["avgLoanAmount"])
    displayedAvgInterestCost.text(loanInfo["avgInterestCost"])
    displayedMobileInterest.text(loanInfo["avgInterestCost"])
    displayedAvgMontlyPayment.text(loanInfo["avgMonthlyPayment"])
    displayedMobileMonthlyPayment.text(loanInfo["avgMonthlyPayment"])
    displayedDisclaimer.html(loanInfo["disclaimer"])
}

const setAutoLoanInfo = () => {
    loanInfo["loanType"] = "Auto Loan"
    loanInfo["avgLoanAmount"] = "$39,731"
    loanInfo["disclaimer"] = autoDisclaimer
    let creditScore = creditScores.val()
    if (creditScore < 501) {
        loanInfo["avgInterestCost"] = "$14,314"
        loanInfo["avgMonthlyPayment"] = "$901"
    }
    else if (creditScore >= 501 && creditScore <= 600) {
        loanInfo["avgInterestCost"] = "$10,626"
        loanInfo["avgMonthlyPayment"] = "$839"
    }
    else if (creditScore >= 601 && creditScore <= 660) {
        loanInfo["avgInterestCost"] = "$6,990"
        loanInfo["avgMonthlyPayment"] = "$779"
    }
    else if (creditScore >= 661 && creditScore <= 780) {
        loanInfo["avgInterestCost"] = "$4,204"
        loanInfo["avgMonthlyPayment"] = "$732"
    }
    else if (creditScore >= 781 && creditScore <= 850) {
        loanInfo["avgInterestCost"] = "$3,061"
        loanInfo["avgMonthlyPayment"] = "$713"
    }
    else {
        return;
    }
}
const setMortgageInfo = () => {
    loanInfo["loanType"] = "Mortgage Loan"
    loanInfo["avgLoanAmount"] = "$453,000"
    loanInfo["disclaimer"] = mortgageDisclaimer
    let creditScore = creditScores.val()
    if (creditScore < 620) {
        loanInfo["avgInterestCost"] = "-----"
        loanInfo["avgMonthlyPayment"] = "-----"
    }
    else if (creditScore >= 620 && creditScore <= 639) {
        loanInfo["avgInterestCost"] = "$620,282"
        loanInfo["avgMonthlyPayment"] = "$2,981"
    }
    else if (creditScore >= 640 && creditScore <= 659) {
        loanInfo["avgInterestCost"] = "$561,422"
        loanInfo["avgMonthlyPayment"] = "$2,818"
    }
    else if (creditScore >= 660 && creditScore <= 679) {
        loanInfo["avgInterestCost"] = "$516,062"
        loanInfo["avgMonthlyPayment"] = "$2,692"
    }
    else if (creditScore >= 680 && creditScore <= 699) {
        loanInfo["avgInterestCost"] = "$493,827"
        loanInfo["avgMonthlyPayment"] = "$2,630"
    }
    else if (creditScore >= 700 && creditScore <= 759) {
        loanInfo["avgInterestCost"] = "$475,612"
        loanInfo["avgMonthlyPayment"] = "$2,579"
    }
    else if (creditScore >= 760 && creditScore <= 850) {
        loanInfo["avgInterestCost"] = "$452,996"
        loanInfo["avgMonthlyPayment"] = "$2,517"
    }
    else {
        return;
    }
}
const setCreditCardsInfo = () => {
    loanInfo["loanType"] = "Credit Cards"
    loanInfo["avgLoanAmount"] = "$6,569"
    loanInfo["disclaimer"] = creditDisclaimer
    let creditScore = creditScores.val()
    if (creditScore >= 300 && creditScore <= 579) {
        loanInfo["avgInterestCost"] = "$8,921"
        loanInfo["avgMonthlyPayment"] = "$247"
    }
    else if (creditScore >= 580 && creditScore <= 619) {
        loanInfo["avgInterestCost"] = "$8,812"
        loanInfo["avgMonthlyPayment"] = "$244"
    }
    else if (creditScore >= 620 && creditScore <= 659) {
        loanInfo["avgInterestCost"] = "$8,680"
        loanInfo["avgMonthlyPayment"] = "$241"
    }
    else if (creditScore >= 660 && creditScore <= 719) {
        loanInfo["avgInterestCost"] = "$8,419"
        loanInfo["avgMonthlyPayment"] = "$233"
    }
    else if (creditScore >= 720 && creditScore <= 850) {
        loanInfo["avgInterestCost"] = "$7,933"
        loanInfo["avgMonthlyPayment"] = "$220"
    }
    else {
        return;
    }
}
const setPersonalLoanInfo = () => {
    loanInfo["loanType"] = "Personal Loan"
    loanInfo["avgLoanAmount"] = "$8,085"
    loanInfo["disclaimer"] = personalDisclaimer
    let creditScore = creditScores.val()
    if (creditScore >= 300 && creditScore <= 629) {
        loanInfo["avgInterestCost"] = "$16,296"
        loanInfo["avgMonthlyPayment"] = "$272"
    }
    else if (creditScore >= 630 && creditScore <= 689) {
        loanInfo["avgInterestCost"] = "$12,825"
        loanInfo["avgMonthlyPayment"] = "$214"
    }
    else if (creditScore >= 690 && creditScore <= 719) {
        loanInfo["avgInterestCost"] = "$11,668"
        loanInfo["avgMonthlyPayment"] = "$194"
    }
    else if (creditScore >= 720 && creditScore <= 850) {
        loanInfo["avgInterestCost"] = "$10,914"
        loanInfo["avgMonthlyPayment"] = "$182"
    }
    else {
        return;
    }
}
const resetInfo = () => {
    loanInfo["loanType"] = "--"
    loanInfo["avgLoanAmount"] = "--"
    loanInfo["avgInterestCost"] = "--"
    loanInfo["avgMonthlyPayment"] = "--"
    loanInfo["disclaimer"] = ""
}

const setLoanInfo = () => {
    if (loan.val() == "auto") {
        setAutoLoanInfo()
    }
    else if (loan.val() == "mortgage") {
        setMortgageInfo()
    }
    else if (loan.val() == "creditCards") {
        setCreditCardsInfo()
    }
    else if (loan.val() == "personal") {
        setPersonalLoanInfo()
    }
    else {
        resetInfo()
        // reset the data to just dashes (i.e., if they RE-choose 'selected loan type')
    }
}

// loan dropdown input
loan.on('input', function () {
    setLoanInfo()
    updateData()
});

// slider input
creditScores.on('input', function () {
    // set data
    setLoanInfo()
    updateData()

    // value bubble (big triangle with credit score printed on it)
    var control = $(this),
        controlMin = control.attr('min'),
        controlMax = control.attr('max'),
        controlVal = control.val(),
        controlThumbWidth = control.data('thumbwidth');

    var range = controlMax - controlMin;

    var position = ((controlVal - controlMin) / range) * 100;
    var positionOffset = Math.round(controlThumbWidth * position / 100) - (controlThumbWidth / 2);
    var output = control.next('output');

    output
        .css('left', 'calc(' + position + '% - ' + positionOffset + 'px)')
        .text(controlVal);

    displayedMobileCreditScore.text(controlVal)
});

// add function to slowly increment this
creditScores.val(720).trigger("input");


/* CUSTOM SELECT!!! */
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        // update info when one of the custom select options is clicked
        setLoanInfo()
        updateData()
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// set loan type to 'personal loan' on page load
$("div.select-items div")[3].click()




});

$(document).ready((function($) {
    var excuted = !0;
    function startCarousel(carouselName, dotContainerName) {
        var carouselItems;
        $(carouselName + " .carousel").children("li").each((function() {
            var container = $(this);
            function nextHandler(event) {
                event.preventDefault();
                var wrapper = container.find(".carousel-boundaries");
                if (wrapper.find(".selected").is(":last-child")) {
                    var selectedPosition = container.find(".carousel-boundaries .selected").index() - (wrapper.children("li").length - 1);
                    prevSlide(container, carouselDots, selectedPosition)
                } else
                    nextSlide(container, carouselDots)
            }
            function prevHandler(event) {
                event.preventDefault();
                var wrapper = container.find(".carousel-boundaries");
                if (wrapper.find(".selected").is(":first-child")) {
                    var selectedPosition = container.find(".carousel-boundaries .selected").index() + (wrapper.children("li").length - 1);
                    nextSlide(container, carouselDots, selectedPosition)
                } else
                    prevSlide(container, carouselDots)
            }
            function createSliderDots(container, dotContainerName) {
                var dotsWrapper = $('<ol class="carousel-selector" id=' + dotContainerName + "></ol>").insertAfter(container.children("a"));
                return container.find(".carousel-boundaries li").each((function(index) {
                    var dotWrapper = $(0 == index ? '<li class="selected"></li>' : "<li></li>")
                      , dot = $('<a href="#0"></a>').appendTo(dotWrapper);
                    dotWrapper.appendTo(dotsWrapper),
                    dot.text(index + 1)
                }
                )),
                dotsWrapper.children("li")
            }
            function nextSlide(container, carouselDots, n) {
                var visibleSlide = container.find(".carousel-boundaries .selected")
                  , navigationDot = container.find(".carousel-selector .selected");
                void 0 === n && (n = visibleSlide.index() + 1),
                visibleSlide.removeClass("selected"),
                container.find(".carousel-boundaries li").eq(n).removeClass().addClass("selected").prevAll().removeClass().addClass("hide-left").end().prev().removeClass("hide-left").addClass("move-left").end().nextAll().removeClass().addClass("hide-right").end().next().removeClass("hide-right").addClass("move-right"),
                navigationDot.removeClass("selected"),
                $("#" + dotContainerName + " li").eq(n).addClass("selected")
            }
            function prevSlide(container, carouselDots, n) {
                var visibleSlide = container.find(".carousel-boundaries .selected")
                  , navigationDot = container.find(".carousel-selector .selected");
                void 0 === n && (n = visibleSlide.index() - 1),
                visibleSlide.removeClass("selected focus-on-left"),
                container.find(".carousel-boundaries li").eq(n).removeClass().addClass("selected").nextAll().removeClass().addClass("hide-right").end().next().removeClass().addClass("move-right").end().prevAll().removeClass().addClass("hide-left").end().prev().removeClass("hide-left").addClass("move-left"),
                navigationDot.removeClass("selected"),
                $("#" + dotContainerName + " li").eq(n).addClass("selected")
            }
            function hoverItem(item, bool) {
                item.hasClass("move-right") ? item.toggleClass("hover", bool).siblings(".selected, .move-left").toggleClass("focus-on-right", bool) : item.toggleClass("hover", bool).siblings(".selected, .move-right").toggleClass("focus-on-left", bool)
            }
            carouselDots = createSliderDots(container, dotContainerName),
            container.on("click", ".move-right, .move-left", (function(event) {
                var selectedPosition;
                event.preventDefault(),
                $(this).hasClass("move-right") ? (selectedPosition = container.find(".carousel-boundaries .selected").index() + 1,
                nextSlide(container, carouselDots, selectedPosition)) : (selectedPosition = container.find(".carousel-boundaries .selected").index() - 1,
                prevSlide(container, carouselDots, selectedPosition))
            }
            )),
            container.find(".carousel-boundaries").on("swipeleft", (function(event) {
                var wrapper;
                event.preventDefault(),
                $(this).find(".selected").is(":last-child") ? prevSlide(container, carouselDots, 0) : nextSlide(container, carouselDots)
            }
            )),
            container.find(".carousel-boundaries").on("swiperight", (function(event) {
                event.preventDefault();
                var wrapper = $(this);
                wrapper.find(".selected").is(":first-child") ? nextSlide(container, carouselDots, wrapper.children("li").length - 1) : prevSlide(container, carouselDots)
            }
            )),
            container.on("mouseover", ".move-right, .move-left", (function(event) {
                event.preventDefault(),
                hoverItem($(this), !0)
            }
            )),
            container.on("mouseleave", ".move-right, .move-left", (function(event) {
                event.preventDefault(),
                hoverItem($(this), !1)
            }
            )),
            container.parent().siblings(carouselName + " .next").on("click", (function(event) {
                nextHandler(event)
            }
            )),
            container.parent().siblings(carouselName + " .prev").on("click", (function(event) {
                prevHandler(event)
            }
            )),
            carouselDots.on("click", (function() {
                var selectedDot = $(this);
                if (!selectedDot.hasClass("selected")) {
                    var selectedPosition = selectedDot.index(), activePosition;
                    container.find("#" + dotContainerName + ".carousel-boundaries .selected").index() < selectedPosition ? nextSlide(container, carouselDots, selectedPosition) : prevSlide(container, carouselDots, selectedPosition)
                }
            }
            )),
            $("a#carousel-ext").on("click touchstart touchend", (function(event) {
                event.preventDefault()
            }
            ))
        }
        ))
    }
    excuted && (setTimeout((function() {
        startCarousel("#reviews", "reviews-ratings-dots"),
        startCarousel("#reviews-rating-mobile", "reviews-ratings-mobile-dots")
    }
    ), 100),
    excuted = !1)
}
));
