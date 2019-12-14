$(document).ready(function() {
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