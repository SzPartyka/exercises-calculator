$('.pies');
$('#psy');
$('section');
$('a[title="malamut"]');
$('section .psy a');
$('section').find('a');
$('section').children();
$('.pies').next(); // .nextAll, .prev
$('section div').first(); //.last
$('a').parents(); // .parent


var v = $('input[name="inpoot"]');
var a = $('.pies a');

$('button').click(function () {
    var w = v.val();
    var txtA = a.text();
    var txtb = a.html();
    // a.after('<div>Jamnik!</div>')
    // a.before('<div>Kundel!</div>')
    console.log(w);
    // console.log(txtA);
    //  console.log(txtb);

})
$('#psy').toggleClass('#error'); // OBCZAIĆ TO I POPRAWIC!
$('#psy').css('border', "8px solid red");

v.change(function () {
    console.log($(this).val)
})
$('.intext').keyup(function () {
    $('#psy').text($(this).val);
})
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
