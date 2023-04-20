(function () {
    "use strict";

    $(document).keyup(function (event) {
        console.log(event.keyCode);
        numbersArray.push(event.keyCode);
        console.log(numbersArray);
        cheatCode();
    });

    var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    // console.log(code);
    var numbersArray = [];

    var lives = 3;
    $('#moreLives').text(lives);
    function cheatCode() {
        if ((numbersArray.join('')) === code.join('')) {
            alert('Added 30 lives!');
            numbersArray = [];
            $('#moreLives').text(lives + 30);
        }
    };



    $('#start').css('cursor', 'pointer');

    function blinkStart() {
        $('#start').fadeOut(500);
        $('#start').fadeIn(500);
    };
    setInterval(blinkStart, 1000);

    $('#start').bind('click', function () {
        gameOver();
    });

    function gameOver() {
        $('h2').text('GAME OVER');
        $('#moreLives').text('0');
        var audio = $('#gameSound') [0];
        audio.play();
    };



})();