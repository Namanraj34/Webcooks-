$(document).ready(function () {
    console.log('I am in a new file now')
    // your jquery code is here
    console.log("We are using jquery");
    // Jquery Syntax looks like this
    // $('Selector').action()

    // clicks on all the p elements.
    // $('p').click();
    // $('p').click(function () {
    //     console.log('You clicked on p', this);
    //     // $('p').hide();
    //     // $(this).hide();
    //     // $('#id').hide();
    //     // $('.class').hide();
    // });

    //do this when u click

    //     $('p').dblclick(function () {
    //         console.log('You double clicked on p', this);

    //     });

    //     $('p').mouseenter(function () {
    //         console.log('You entered:', this);

    //     });
    //     $('p').hover(function () {
    //         console.log('You hover:', this);

    //     },function(){
    //     console.log('Thanks for coming')
    // });

    // There are three main types of selectors in jquery

    // 1. element selector
    // 2. id selector
    // 3. class selector

    // 1. element selector - This is an example of element selector which clicks on all p 
    //    $('p').click();

    // 2. id selector - this is an example of id selector
    // $('#second').click();

    //2. Class selector - this is an example of id selector
    // $('.odd').click();

    //Other selectors  
    //$('*').click(); //click on all the elements
    //$('p.odd').click(); //click on all the elements
    //$('p:first').click(); //click on all the elements

    //Events in Jquery

    // Mouse events = click, double click, mouse CustomElementRegistry, mouse leave
    // Keyboard events = keypress , keydown, keydown
    // form events = submit, change, focus, blur
    // document/window events= load, resize,scroll, upload




    // demoing thte on method
    $('p').on(
        {
            click: function() {
                console.log('Thanks for clicking', this)
            },
            mouseleave: function name(){
                 console.log('mouseleave');
            }
        })




        // $('#wiki').hide(1000, function(){
        //     console.log("hidden");
        // })

        // $('#wiki').show(1000, function(){
        //     console.log("show");
        // })

        $("#but").click(function(){
            $("#wiki").fadeOut(1000);
        })

    
        // fadeIn()
        // fadeOut()
        // fadetoggle()
        // fadeto()


        // Slide methods - callback parameters are optional
        // $("#wiki").slideUp(1000,function(){
        //     console.log("Done")
        // })
        // $("#wiki").slideDown(1000)
        // $("#wiki").slideToggle(1000)



        // Animate function in Jquery
        // $("#wiki").animate({
        //     opacity:0.3,
        // height: "150px",
        // width: "350px"
        // }, 'fast')
            
        // $("#wiki").animate({opacity:0.3},4000);
        // $("#wiki").animate({opacity:0.9},4000);
        // $("#wiki").animate({width:'350px'},1000);

        // $("#ta").val   // value show krana
        // $("#ta").val('Naman Raj');  //value change
        // $("#ta").html('setting it to naman');
        // $("#inp").html('setting it to naman');
        // $("#ta").empty();
        // $("#wiki").empty();
        // $("#wiki").text('your are good');
        // $("#wiki").remove()

        $("#wiki").addClass('myclass');
     
        
        $("#wiki").css('background-color', 'red')


        $.get()

});
