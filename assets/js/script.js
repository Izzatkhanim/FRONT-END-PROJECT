$(document).ready(function() {

    // LOADER
    $(function() {
        $(".loader").fadeOut(2000, function() {
            $(".page").fadeIn(1000);
        })
    })


    // ALERT-BOX-CLOSE
    $(".close-button").click(function() {
        $("#alert-box").slideUp();
    });

    // NAVBAR 

    $(".nav-item").hover(function() {
        $(this).find(".dropdown-menu").addClass("show");
        $(this).find(".gallery").removeClass("show");
        $(this).find(".search-menu").removeClass("show");


    }, function() {
        $(this).find(".dropdown-menu").removeClass("show");
    })
    $(".title ").hover(function() {
        $(".gallery").addClass("show");

    }, function() {
        $(".gallery").removeClass("show")
    })
    $(".icon").click(function() {
        $(this).toggleClass("fa-times");
        if ($(this).hasClass("fa-times")) {
            $(this).parent().next().addClass("d-block")
        } else {
            $(this).parent().next().removeClass("d-block")
        }
    })

    $(window).scroll(function() {
        if ($("html").scrollTop() > 200) {
            $("#edu-global").addClass("fixed-top");
            $("#edu-global").css("background-color", "white")
        } else {
            $("#edu-global").removeClass("fixed-top");
        }
    });

    // SLIDER CAROUSEL

    if ($("#slider").length) {
        $("#slider").hover(function() {
            $(this).find(".carousel-control-prev").addClass("d-block");
            $(this).find(".carousel-control-next").addClass("d-block")
            $(this).find(".carousel-control-next-icon").addClass("d-block")


        }, function() {
            $(this).find(".carousel-control-prev").removeClass("d-block");
            $(this).find(".carousel-control-next").removeClass("d-block");
            $(this).find(".carousel-control-prev-icon").addClass("d-block")

        });
    }

    // OWL CAROUSEL

    $('.owl-carousel').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 4
    });

    // COUNTER

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    })

    // GALLERY ISOTOP

    $(".gallery-item").isotope({
        itemSelector: ".item",
        layoutMode: "fitRows"
    });
    $(".buttons ul li a").click(function() {
        $(".buttons ul li a").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $(".gallery-item").isotope({
            filter: selector
        });
        return false;
    });

    // ACTIVE CLASS FOR GALLERY

    $(".pic").click(function(event) {
        event.preventDefault();
        $(".pic").removeClass("active");
        $(this).addClass("active");
    });

    // STUDENTS SAY

    $('.student-owl-carousel').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false
    });

    // OUR CLIENT 

    $('.client-owl-carousel').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false
    });

    // SCROLL UP 

    $(window).scroll(function() {
        if ($("html").scrollTop() > 100) {
            $(".scrollup").css("opacity", "1");

        } else {
            $(".scrollup").css("opacity", "0")
        }
    });

    $(".scrollup").click(function(e) {
        e.preventDefault()
        var body = $("html, body");
        body.stop().animate({ scrollTop: 0 }, 500, 'swing', function() {});
    })



});