$('.show').click(function () {
    v.toggle(500, () => {
        if (v.css('display') == 'none') {
            $(this).text('Pokaz');
        } else {
            $(this).text('Ukryj');
        }

    });
});
$('.obr').click(function(){
    //$('figure').fadeToggle(500);
    $('figure').animate({
        opacity: 0.1,
        width: '+=20px',
        height: '+=20px',

    });
});
$('nav').click(function(){
    $('.panel').slideToggle(400);
})
