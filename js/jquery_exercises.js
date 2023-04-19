(function () {
    "use strict";

    // $(function() {
    //     alert( 'The DOM has finished loading!' );
    // });

    // var contents = $('#title').html();
    // alert(contents);

    // $('#title, p').css('color', 'blue');
    //
    // $('.codeup, h1, p').css('background-color', 'yellow');
    //
    // $('li').css('font-size', '20px');
    //
    // $('body').css('background-color', 'gray');
    //
    // $('ul').css('max-width', '100px');
    //
    // $('*').css('text-align', 'center');
    //
    // $('.divs').css('border', '5px solid #F00');
    //
    // $('#codeup').css('color', 'red');


    $('h1').click(
        function () {
            $(this).css('background-color', 'yellow');
            $(this).css('text-align', 'center');
            $(this).css('font-size', '50px');
        }
    );

    $('p').dblclick(
        function () {
            $(this).css('font-size', '18px');
        }
    );

    $('li').hover(
        function () {
            $(this).css('color', 'red');
        },
        function () {
            $(this).css('color', 'black')
        }
    );




})();