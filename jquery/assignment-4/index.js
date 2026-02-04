$(document).ready(function() {
    $(".header").click(function() {
        $(this).css('background-color', '#55eb8c')
    })
    
    $(".sidebar").click(function() {
        $(this).text("Leftbar");
    })
    
    $(".extra-content").click(function() {
        $(".main-content").fadeOut("slow");
    })
})