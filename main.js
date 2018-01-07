function main() {
$('.container').hide();
$('.container').fadeIn(1000);  
}

$(document).ready(main);

$(document).ready(function(){
    $("#hamburgericon").click(function(){
        $(".hamburgershow").slideToggle("100");
    });
 });

$(document).ready(function(){
    $(".hamburgerlink").click(function(){
        $(".hamburgershow").toggle();
    });
});

$('#tothetop').click(function(){
    $('body, html').animate({
        scrollTop: 0
    }, 2000);
});


$('#square1').click(function(){
   window.location = 'http://www.mijnbabykaartje.nl'
});

$('#square2').click(function(){
   window.location = 'https://www.nieuwbouwintenboer.nl'
});

$('#square3').click(function(){
   window.location = '#'
});

$(document).ready(function(){
$('#imglogo').click(function(){
   window.location = '#'
});
});










