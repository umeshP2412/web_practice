$(document).ready(function () {
    //your all code to be executed once DOm is loaded

    console.log($)

    // $('p').click(()=> console.log("you clicked on p"));
    $('p').click(function () {
        console.log("you clicked on p")

    });

    $('custom').click(function () {
        $(this).hide();

    });
    // three types of selector
    // 1. element selector
    // $('p').click();
    // 2. id selector
    // $('#kj').click()
    // 3. class selecor
    // $('.cls').click()
    // $('p.cls').click()
    // $('p:first').click()


    // Events in jQuery
        // Mouse events : click, dblclick, mouseenter, mouseleave, mouseover, mouseout, mousemove, mousedown, mouseup
        // Keyboard events : keydown, keypress, keyup
        // Form events : focus, blur, change, select, submit, reset
        // Document events : load, unload, beforeunload, resize, scroll
        // Clipboard events : copy, cut, paste
        // Media events : abort, canplay, canplaythrough, durationchange, emptied, ended, error, loadeddata, loadedmetadata, loadstart, pause, play, playing, progress, ratechange, seeked, seeking, stalled, suspend, timeupdate, volumechange, waiting
        // Touch events : touchstart, touchend, touchmove, touchcancel
 

    $('#dblclk').dblclick(function(){
        console.log('You double clicked me');
    });

    // $('#mouseover').mouseover(function(){
    //     console.log('You mouse over me');
    // });

    // $('#multiev').on(
    //     {
    //         mouseenter: function(){
    //             console.log('You mouse enter me');
    //         },
    //         click: function(){
    //             console.log('You clicked me');
    //         },
    //         mouseleave: function(){
    //             console.log('You mouse leave me');
    //         }
    //     }
    // );

    //show(milliseconds) hide(milliseconds) toggle(milliseconds) 
    // fadeIn works on items which has display:none,
    // fadeIn(1000) will fade in the item in 1 sec
    // fadeOut works on visible items,
    // fadeOut(1000) will fade out the item in 1 sec
    // fadeToggle is same as toggle(toggle between fadeIn and fadeOut),
    // fadeToggle(1000) will fade in and out the item in 1 sec
    // fadeTo ,makes opacity of an item to some value(0 to 1 we can set).
    // fadeTo(duration, opacity)

    
    // $('#wiki').animate({opacity:0.4}, 2000);
    // $('#wiki').animate({opacity:0.9}, 3000);
    // $('#wiki').animate({width:'350px'}, 8000);

    // console.log($('#wiki').html());
    // $('#wiki').html('This is new changed doc');

    $('#wikibgbtn').click(function(){

        $('#wiki').addClass('wiki');
        // $('#wiki').removeClass('wiki');
    });

    $('#btn').click(function(){
        $('#comment').val('Hi Sagar Patil');
    });
});

