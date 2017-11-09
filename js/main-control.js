$(document).ready(function(){
    $("#greeting1").delay(300).fadeIn(800);
    $("#greeting2").delay(1600).fadeIn(800);
    $("#greeting3").delay(3100).fadeIn(800);
    $("#greeting4").delay(3100).fadeIn(800);
    $("#wrapper-face-down").delay(4200).fadeIn(800);
    $(function(){
        $(window).on("scroll", function(){
            if ($(window).scrollTop() > ($("#wrapper-aboutme").offset().top - 50)) {
                var windowpos = -0.05 * ($(window).scrollTop() - $(window).height());
                $("body").css({
                    backgroundPositionY: windowpos
                })
            }
        })
    });
    if ($(window).scrollTop() > 0){
        if ($(window).scrollTop() > ($("#wrapper-aboutme").offset().top - 50)) {
            var windowpos = -0.05 * ($(window).scrollTop() - $(window).height());
            $("body").css({
                backgroundPositionY: windowpos
            })
        }
        $("#header").stop(true, false).animate({
            height: "50px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderBottomColor: "#FFFFFF"
        });
        $(".header-logo").stop(true, false).animate({
            height: "50px",
            width: "50px"
        });
        $(".header-menu").stop(true, false).animate({
            height: "50px"
        });
    }
    $(window).scroll(function(){
        if ($(this).scrollTop() == 0){
            $("#header").stop(true, false).animate({
                height: "90px",
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderBottomColor: "rgba(255, 255, 255, 0)"
            });
            $(".header-logo").stop(true, false).animate({
                height: "90px",
                width: "90px"
            });
            $(".header-menu").stop(true, false).animate({
                height: "90px"
            });
        } else{
            $("#header").stop(true, false).animate({
                height: "50px",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderBottomColor: "rgba(255, 255, 255, 0.3)"
            });
            $(".header-logo").stop(true, false).animate({
                height: "50px",
                width: "50px"
            });
            $(".header-menu").stop(true, false).animate({
                height: "50px"
            });
        }
    });
    $("#menu-home").click(function(){
        if ($(window).scrollTop() != 0) {
            $('html, body').animate({
                scrollTop: $("#wrapper-face").offset().top
            }, 1500, "easeInOutQuint");
        }
    });
    $("#menu-about").click(function(){
        var pos = $("#wrapper-aboutme").offset().top - 50;
        if ($(window).scrollTop() != pos) {
            $('html, body').animate({
                scrollTop: pos
            }, 1500, "easeInOutQuint");
        }
    });
    $("#menu-experience").click(function(){
        var pos = $("#wrapper-experience").offset().top - 50;
        if ($(window).scrollTop() != pos) {
            $('html, body').animate({
                scrollTop: pos
            }, 1500, "easeInOutQuint");
        }
    });
    $("#menu-project").click(function(){
        var pos = $("#wrapper-project").offset().top - 50;
        if ($(window).scrollTop() != pos) {
            $('html, body').animate({
                scrollTop: pos
            }, 1500, "easeInOutQuint");
        }
    });
    $("#menu-contact").click(function(){
        var pos = $("#wrapper-contact").offset().top - 50;
        if ($(window).scrollTop() != pos) {
            $('html, body').animate({
                scrollTop: pos
            }, 1500, "easeInOutQuint");
        }
    });
    $("#wrapper-face-down").click(function(){
        var pos = $("#wrapper-aboutme").offset().top - 50;
        if ($(window).scrollTop() != pos) {
            $('html, body').animate({
                scrollTop: pos
            }, 1500, "easeInOutQuint");
        }
    })
    $("#back-to-top-img").click(function(){
        $('html, body').animate({
            scrollTop: $("#wrapper-face").offset().top
        }, 1500, "easeInOutQuint");
    })
})