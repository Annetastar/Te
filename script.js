let clickButton = document.querySelector('#button_click');
let blockSocialButtons = document.querySelector('.social__buttons');
let show = document.querySelector('.show');
let messenger = document.querySelector('.messenger');

clickButton.addEventListener('click', function(){
    if(getComputedStyle(blockSocialButtons).right === '-40px') {
        blockSocialButtons.style.visibility = 'visible';
        blockSocialButtons.style.right = '46' + 'px';
        blockSocialButtons.style.opacity = '1';
    } else {
        blockSocialButtons.style.visibility  = 'hidden';
        blockSocialButtons.style.right = '-40' + 'px';
        // blockSocialButtons.style.opacity = '0';
        
        
    
    }
} )



var where = document.referrer;
if (where==0) console.log("Посетитель пришел с <b>пустой страницы</b>")
else document.console.log("Посетитель пришел с сайта: <b>" + where + "</b>")