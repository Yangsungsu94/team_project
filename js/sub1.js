// 위로슬라이드
function slide() {
    $(".roll_list").animate({ marginTop: -50 }, function () {
        $(".roll_list li:first").appendTo(".roll_list");
        $(".roll_list").css({ marginTop: 0 });
    });
};
setInterval(slide, 3000);

// 위로슬라이드 끝

// menu_select

$(function () {
    $(".title_btn_list>button:nth-of-type(1)").click(function () {
        $(this).css("background-color", "#212121").css("color", "#fff");
        $(".title_btn_list>button:nth-of-type(2)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(3)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(4)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(5)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".swiper2").show();
        $(".swiper3").hide();
        $(".swiper4").hide();
        $(".swiper5").hide();
        $(".swiper6").hide();
    });

    $(".title_btn_list>button:nth-of-type(2)").click(function () {
        $(this).css("background-color", "#212121").css("color", "#fff");
        $(".title_btn_list>button:nth-of-type(1)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(3)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(4)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(5)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".swiper2").hide();
        $(".swiper3").show();
        $(".swiper4").hide();
        $(".swiper5").hide();
        $(".swiper6").hide();
    });

    $(".title_btn_list>button:nth-of-type(3)").click(function () {
        $(this).css("background-color", "#212121").css("color", "#fff");
        $(".title_btn_list>button:nth-of-type(2)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(1)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(4)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(5)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".swiper2").hide();
        $(".swiper3").hide();
        $(".swiper4").show();
        $(".swiper5").hide();
        $(".swiper6").hide();
    });

    $(".title_btn_list>button:nth-of-type(4)").click(function () {
        $(this).css("background-color", "#212121").css("color", "#fff");
        $(".title_btn_list>button:nth-of-type(2)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(3)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(1)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(5)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".swiper2").hide();
        $(".swiper3").hide();
        $(".swiper4").hide();
        $(".swiper5").show();
        $(".swiper6").hide();
    });

    $(".title_btn_list>button:nth-of-type(5)").click(function () {
        $(this).css("background-color", "#212121").css("color", "#fff");
        $(".title_btn_list>button:nth-of-type(2)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(3)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(1)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(4)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".swiper2").hide();
        $(".swiper3").hide();
        $(".swiper4").hide();
        $(".swiper5").hide();
        $(".swiper6").show();
    });
});

// 반응형 max-500

// $(window).resize(function(){
//     if(window.innerWidth>=760){
//         $(".swiper-slide>img").css("width","100%");
//     }else{
//         $(".swiper-slide>img").css("width","360px");
//     }
// })