$(document).ready(function () {
    $('form').submit(function (e) {
        let allValid = true;
        $('input').each((index, ele) => {
            if ($(ele).val().trim().length === 0) {
                alert("Please fill all the fields");
                allValid = false;
                return false;
            }
        });
        if(!allValid) return false;
    })  
});