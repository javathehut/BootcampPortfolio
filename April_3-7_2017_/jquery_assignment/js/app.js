$(document).ready(function(){

    $('#box1').css('background-color', 'green');
    $('#para1').css({
        'font-weight': 'bold', 
        'font-size':'2em'
    });
    $('.box2').addClass('spin');


    $('#button1').click(function(){
        alert("Ouch! Don't click so hard!");

    });

    $('#box3').hover(function(){

        $(this).css('background-color', 'green');

    }, function(){

        $(this).css('background-color', 'red');

    });

    $('#input1').keyup(function(){

        var answer = $(this).val();
        console.log(answer);

    });

    $('#button2').click(function(){
        
        $('#box4').animate({top: '150px', left: '400px'}, 2000);

    });

    $('#button3').click(function(){
        
        $('#box4').animate({top: '0px', left: '0px'}, 2000);

    });
});