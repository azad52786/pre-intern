$(document).ready(function() {
    $('form').submit(function() {
        if($("#firstName").val().trim().length == 0 || $("#lastName").val().trim().length == 0 ) {
            alert("Please fill all the fields");
        };
    })
});