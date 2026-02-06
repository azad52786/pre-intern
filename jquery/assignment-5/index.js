$(document).ready(function () { 
    // $('.pop-up').hide();
    
    // $('.footer').click(function() {
    //     $('.pop-up').show();
    // });
    
    // $('.pop-up img').click(function () {  
    //     $('.pop-up').hide();
    // })
    
    
    $('.footer').click(function() {
        $('.pop-up').css('display', 'flex');
    });
    
    $('.pop-up img').click(function () {  
        $('.pop-up').css('display', 'none');
    })
    
    
})