$(document).ready(function () {
    $('.pop-up').hide();

    $('.footer').click(function () {
        $('.pop-up').fadeIn("fast");
    });

    $('.pop-up button').click(function () {
        $('.pop-up').fadeOut("fast");
    })



    // $('.footer').click(function() {
    //     $('.pop-up').css('display', 'flex');
    // });

    // $('.pop-up img').click(function () {  
    //     $('.pop-up').css('display', 'none');
    // })


})