let clickButton = document.querySelector('#button_click');
let blockSocialButtons = document.querySelector('.social__buttons');

clickButton.addEventListener('click', function(){
    if(getComputedStyle(blockSocialButtons).right === '-166px') {
        blockSocialButtons.style.display = 'block';
        blockSocialButtons.style.right = '46' + 'px';
        blockSocialButtons.style.opacity = '1';
    } else {
        blockSocialButtons.style.display = 'none';
        blockSocialButtons.style.right = '-166' + 'px';
        blockSocialButtons.style.opacity = '0'
    }
} )

var where = document.referrer;
if (where==0) console.log("Посетитель пришел с <b>пустой страницы</b>")
else document.console.log("Посетитель пришел с сайта: <b>" + where + "</b>")