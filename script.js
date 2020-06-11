// $('form').submit(function(e){
//     e.preventDefault();

//     let fioEl = $(this).find("[name='fio']");
//     let emailEl = $(this).find("[name='email']");
//     let telEl = $(this).find("[name='phone']");

//     if( fioEl.val() != '' && emailEl.val() != '' && telEl.val() != '' ){
//         fioEl.css('border-color', '#00bdec');
//         emailEl.css('border-color', '#00bdec');
//         telEl.css('border-color', '#00bdec');
//         popupEl.fadeOut();
//     }else{
//         if( fioEl.val() == '' ){
//             fioEl.css('border-color', 'red');
//         }else{
//             fioEl.css('border-color', '#00bdec');    
//         }

//         if( emailEl.val() == '' ){
//             emailEl.css('border-color', 'red');
//         }else{
//             emailEl.css('border-color', '#00bdec');    
//         }

//         if( telEl.val() == '' ){
//             telEl.css('border-color', 'red');
//         }else{
//             telEl.css('border-color', '#00bdec');    
//         }
//     }
// });
// $('.left, .right').click(function(e){
//    e.preventDefault();
//     if( $('main').hasClass('business') ){
//         $('main').removeClass('business');   
//     }else{
//         $('main').addClass('business');
//     }
// });

// let sliderEl = $('.main');
// let sliderBox = $('.main-inner');

// let nowShowSlide = 0;

// let sliderItems = sliderEl.find('.main-index');
// let firstSlide = sliderItems.eq(0).clone();
// sliderBox.append(firstSlide);

// sliderItems = sliderEl.find('.main-index');

// let counter = 0;
// sliderEl.find('.right').click(function(){
//     counter++;

//     if (sliderItems.length - 1 > counter ) {
        
//         sliderBox.animate( {
//             'left' : -100 * counter + '%'
//         }, 1000);
//     } else {
        
//         sliderBox.animate( {
//             'left' : -100 * counter + '%'
//         }, 1000, function() {
//             sliderBox.css('left', 0);
            
//         });
//         counter = 0;
//     }
// });


// sliderEl.find('.left').click(function(){
//     if (counter == 0) {
//         sliderBox.animate( {
//             'left' : -100 * (sliderItems.length - 1) + '%'
//         }, 0, function() {
            
//             sliderBox.animate( {
//                 'left' : -100 * (sliderItems.length - 2) + '%'
//             }, 1000)

//         });
//         counter = sliderItems.length - 2;
//     } else {
//         counter--;
//         sliderBox.animate( {
//             'left' : -100 * counter + '%'
//         }, 1000);
//     }
// });



// let num = [];
// for(let i = 0; i < 10; i = i + 1){
//     if( i == 0 || i == 9 ){
//         num.push(1);
//     }else{
//         num.push(0);
//     }
// }
// console.log(num);

let sliderEl = $('.main-inner');
let sliderBox = $('.slider');

let nowShowSlide = 0;

let sliderItems = sliderEl.find('.index-main, .news-1-main, .news-2-main, .contacts-main');
let firstSlide = sliderItems.eq(0).clone();
sliderBox.append(firstSlide);

sliderItems = sliderEl.find('.index-main, .news-1-main, .news-2-main, .contacts-main');

let counter = 0;
sliderEl.find('.right').click(function(){
    counter++;

    if (sliderItems.length - 1 > counter ) {
        
        sliderBox.animate( {
            'left' : -100 * counter + '%'
        }, 1000);
    } else {
        
        sliderBox.animate( {
            'left' : -100 * counter + '%'
        }, 1000, function() {
            sliderBox.css('left', 0);
            
        });
        counter = 0;
    }
});


sliderEl.find('.left').click(function(){
    if (counter == 0) {
        sliderBox.animate( {
            'left' : -100 * (sliderItems.length - 1) + '%'
        }, 0, function() {
            
            sliderBox.animate( {
            'left' : -100 * (sliderItems.length - 2) + '%'
            }, 1000)

        });
        counter = sliderItems.length - 2;
    } else {
        counter--;
        sliderBox.animate( {
            'left' : -100 * counter + '%'
        }, 1000);
    }
});


$('.slider .center-box .btn').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.background-cards').offset().top
    }, 1000);
});

let formsEl = $('.forms-inner, .forms-inner-contacts');
let popupEl = $('.popup');
$('.btn-call').click(function(e){
    e.preventDefault(); 
    popupEl.css('display', 'flex').hide().fadeIn(500);
});

$('.popup-inner-close').click(function(){
    popupEl.fadeOut(500);
    popupEl.find('.popup-inner-success').delay(500).fadeOut();
    popupEl.find('h3').delay(500).slideDown();
    popupEl.find('form').delay(500).slideDown();
    popupEl.find('input, textarea').val('');
});
$('form').submit(function(e){
    e.preventDefault();

    let fioEl = $(this).find("[name='fio']");
    let emailEl = $(this).find("[name='email']");
    let telEl = $(this).find("[name='phone']");

    if( fioEl.val() != '' && emailEl.val() != '' && telEl.val() != '' ){
        fioEl.removeClass('error');
        emailEl.removeClass('error');
        telEl.removeClass('error');

        popupEl.find('h3').delay(500).slideUp(1000);
        popupEl.find('form').slideUp(1000);

        popupEl.find('.popup-inner-success')
            .html('<b><u>' + fioEl.val() + '</u></b>, менеджер вам позвонит по номеру <b><u>' + telEl.val() + '</u></b>')
            .delay(1500)
            .fadeIn();
        // this.submit();
        formsEl.find('h3').delay(500).slideUp(1000);
        formsEl.find('form').slideUp(1000);

        formsEl.find('.forms-inner-success, .forms-inner-contacts-success')
            .html('<b><u>' + fioEl.val() + '</u></b>, менеджер вам позвонит по номеру <b><u>' + telEl.val() + '</u></b>')
            .delay(1500)
            .fadeIn();
        // // this.submit();
        formsEl.find('.forms-inner-contacts-success')
            .html('<b><u>' + fioEl.val() + '</u></b>, менеджер напишет вам на почту <b><u>' + emailEl.val() + '</u></b>')
            .delay(1500)
            .fadeIn();
    }else{
        if( fioEl.val() == '' ){
            fioEl.addClass('error');
        }else{
            fioEl.removeClass('error');    
        }

        if( emailEl.val() == '' ){
            emailEl.addClass('error');
        }else{
            emailEl.removeClass('error');    
        }

        if( telEl.val() == '' ){
            telEl.addClass('error');
        }else{
            telEl.removeClass('error');    
        }
    }

});
$('input').keyup(function(e){
    if( e.keyCode != 9 && e.keyCode != 27 ){
        $(this).removeClass('error');
    }
});

$(window).keyup(function(e){
    if( e.keyCode == 27 ){
        popupEl.fadeOut();   
    }
});

