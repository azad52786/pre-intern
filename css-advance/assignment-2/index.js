$(document).ready(function(){
    $('.navbar__toggler').click(function() {
        $('.navbar__collapse').slideToggle(1000);
        $('.navbar__toggler').toggleClass('active');
        if($('.navbar__toggler').attr('aria-expanded') === 'true') {
            $('.navbar__toggler').attr('aria-expanded', 'false');
        }else {
            $('.navbar__toggler').attr('aria-expanded', 'true');
        }
    })
})