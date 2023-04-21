(function () {
    "use strict";

    $(document).keyup(function (event) {
        console.log(event.keyCode);
        numbersArray.push(event.keyCode);
        console.log(numbersArray);
        if ((numbersArray.join('')) === spaceBar.join('')) {
            gameOver();
        } else {
        cheatCode();
        }
    });

    var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    // console.log(code);
    var numbersArray = [];
    var spaceBar = [32];

    var lives = 3;
    $('#moreLives').text(lives);

    function cheatCode() {
        if ((numbersArray.join('')) === code.join('')) {
            alert('Added 30 lives!');
            numbersArray = [];
            $('#moreLives').text(lives + 30);
        }
    };


    $('#start, #player1').css('cursor', 'pointer');

    function blinkStart() {
        $('#start').fadeOut(500);
        $('#start').fadeIn(500);
    };
    setInterval(blinkStart, 1000);

    $('#start').bind('click', function () {
        jump();
        $('h2').text('');
        $('.lives').text('');
    });

    function gameOver() {
        $('h2').text('GAME OVER');
        $('#moreLives').text('0');
        var audio = $('#gameSound') [0];
        audio.play();
        $('#player1').removeClass('animate');
        numbersArray = [];
    };

    $('#playerImage').bind('click', function () {
        var src = $('#player1').attr('src');
        if (src == "images/draggle.png") {
            $('#player1').attr('src', "images/draggleorange.png");
        } else if (src == "images/draggleorange.png") {
            $('#player1').attr('src', "images/draggleblue.png");
        } else if (src == "images/draggleblue.png") {
            $('#player1').attr('src', "images/dragglepink.png");
        } else if (src == "images/dragglepink.png") {
            $('#player1').attr('src', "images/draggle.png");
        }
    });

    function jump () {
            $('#player1').attr('class', 'animate');
    };




})();