$(function(){
    $('#start').on("click", function(){
        $('.boundary').removeClass("youlose");
        $("#status").text("The Game Begin");
    });

    $('.boundary').on('mouseover',function(){
        lose();
    });
    $('#maze').on('mouseleave',function(){
        lose();
    });

    $('#end').on('mouseover', function(){
        if(!$('.boundary').hasClass('youlose')){
            $("#status").text("You win! n_n");
        }
    });

    function lose() {
        $('.boundary').addClass("youlose");
        $("#status").text("You lose! U_U");
    }
});