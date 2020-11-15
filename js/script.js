var bodyEl = document.querySelector('body');
var gearEl = document.querySelector('.e');
var gear2El = document.querySelector('.g');
var rotateEl = document.querySelectorAll('#rotate');
var reverseRotateEl = document.querySelectorAll('#reverse-rotate');
var scrolliconEl = document.querySelector('.scrollicon');
var callname = document.querySelector('footer p');
var copy = document.querySelector('.copy');

// 햄버거 메뉴
var MenuEl = document.querySelector('.hamburger');
var spanEL = document.querySelectorAll('span');
var navEl = document.querySelector('nav');
var navMenuEl = document.querySelector('div.Menu');
var MenuEls = document.querySelectorAll('div.Menu a');
var hamburger = document.querySelector('.hamburger a');
MenuEls = Array.prototype.slice.call(MenuEls);
var toggle = true;

// 풀페이지
var articleEl = document.querySelectorAll("article"); // article 변수지정
articleEl = Array.prototype.slice.call(articleEl);
var current = 0;
var transitionEnd = true;

// skill
var imgEls = document.querySelectorAll('.photo-box>img')
Array.prototype.slice.call('imgEl');
var progerssEls = document.querySelectorAll('.progress-bar-fill');
Array.prototype.slice.call('progressEls');
var section = document.querySelector('section');

// Accordion
var htmlEl = document.documentElement,
    accordianEl = document.querySelector("#accordion"),
    viewItemEls = accordianEl.querySelectorAll(".view-item"),
    btnCloseEls = accordianEl.querySelectorAll(".view-item > .btn-close"),
    _cuId = null,
    _exId = null,
    _timer;



var contactEl = document.querySelector('.contact');
var contactbodyEl =document.querySelector('.contactbody');
var avavEl = document.querySelector('.avav');

reset();

viewgear();
function reset(){ 
    navEl.style.transform = 'translateX(100%)';
    contactbodyEl.style.transform = 'translateY(100%)';
    
    // navEl.style.borderRadius = '0 0 0 0';
    // MenuEls[0].classList.add('active');
}

// 새로고침시 화면 상단으로 이동
window.onload = function() {
    setTimeout (function () {
        scrollTo(0,0);
        articleEl[0].style.visibility = 'visible';
    },50);
}


// 메인 톱니바퀴 모션 함수
setTimeout(function(){
    // gearEl.style.position = 'fixed';
    gearEl.style.animation = 'rotateGear 4s linear infinite forwards';
    for(var i = 0; i <rotateEl.length; i++){
        rotateEl[i].style.animation = 'rotation 4s linear infinite forwards';
    }
    for(var i = 0; i <reverseRotateEl.length; i++){
        reverseRotateEl[i].style.animation = 'reverse-rotation 4s linear infinite forwards';
    }  
    // bodyEl.style.overflowY = 'scroll';
    
}, 3100);
setTimeout(function(){
    scrolliconEl.style.opacity = '1';
}, 3500);
window.addEventListener("mousewheel", onscroll, {passive:false})    


function onscroll(e){
    e.preventDefault();
    if(!transitionEnd){
        return;
    }
    if(e.type ==="mousewheel"){
        if(e.wheelDelta < 0){
            articleDown();
            
        }
        else if(e.wheelDelta > 0){
            articleUp();
        }
    }
}


function tEnd(){
    transitionEnd = false;
    setTimeout(function(){
        transitionEnd = true;
    },1000);
}



// 아티클 위로 이동
function articleUp(){
    if(current > 0){
        current--;
        var currentResult =  current * -100;
        section.style.transform = 'translateY('+ currentResult +'vh)';
        section.style.transition = 'all 1s ease';
        
    }
    gear2El.style.animation = 'unarticle1 1s linear forwards'; 
    ProgressbarFill();
    tEnd();
    viewgear();
}
// 아티클 아래로 이동
function articleDown(){
    if(current < articleEl.length-1){
        current++;
        var currentResult =  current * -100;
        section.style.transform = 'translateY('+ currentResult +'vh)';
        section.style.transition = 'all 1s ease';             
    }else if(current > articleEl.length){
        return false;
    }
    for(var i = 1; i < articleEl.length; i++){
        articleEl[i].style.visibility = 'visible';
    }
    
    
    // avavEl.style.animation = 'rotation 3s infinite';
    ProgressbarFill();
    tEnd();
    viewgear();
    
}

function viewgear(){
    if(current == 0){
        avavEl.style.visibility = 'hidden';
    }
    setTimeout(function(){
        if(current !=0){
            avavEl.style.visibility = 'visible';
        }
    },1000)
    
}


function ProgressbarFill(){
        if(current == 3){
            gear2El.style.animation = 'article3 1s linear forwards'
            setTimeout(function(){
                for(var i = 0; i<imgEls.length; i++){
                    imgEls[i].style.transition = 'all 3s ease-in-out'
                    imgEls[i].style.animation ='hovering 1s infinite ease-in-out';
                    imgEls[i].style.opacity = '1';
                }
                for(var i = 0; i < progerssEls.length; i++){
                    progerssEls[i].style.visibility = 'visible';
                }
                progerssEls[0].style.animation = 'html 1.5s ease-in-out';
                progerssEls[1].style.animation = 'js 1.5s ease-in-out';
                progerssEls[2].style.animation = 'jquery 1.5s ease-in-out';
                progerssEls[3].style.animation = 'illust 1.5s ease-in-out';
                progerssEls[4].style.animation = 'photo 1.5s ease-in-out';
            },1000);   
        }
}



// 햄버거 클릭시
function MenuChange(){
    
    openmenu();
    for(i=0; i < spanEL.length; i++){
        spanEL[i].style.transition = 'all 0.5s ease-in-out';
    }
    if(toggle){
        spanEL[0].style.transform = 'translateY(9px) rotateZ(45deg)';
        spanEL[1].style.opacity= 0;
        spanEL[2].style.transform = 'translateY(-9px) rotateZ(-45deg)';
        hamburger.style.background = '#444444';
        hamburger.style.boxShadow = '5px 5px 9px #2b2b2b inset, -5px -5px 9px #5d5d5d inset ';
    }else if(!toggle){
        spanEL[0].style.transform = '';
        spanEL[1].style.opacity= 1;
        spanEL[2].style.transform = '';
        hamburger.style.background = 'linear-gradient(145deg, #ffffff, #e6e6e6)';
        hamburger.style.boxShadow ='5px 5px 9px #a1a1a1';

        
    }
    toggle = !toggle;
}
MenuEl.addEventListener('click',MenuChange);

fatimesEl = document.querySelector('.fa-times');

fatimesEl.addEventListener('click', closecontact);
contactEl.addEventListener('click', opencontact);

function closecontact(){
    contactbodyEl.style.transform = 'translateY(100%)';
    contactbodyEl.style.transition = 'all 0.5s ease-in-out'
}


function opencontact(e){
    opencontactbody();
    toggle = !toggle;
}
function opencontactbody(){
    if(toggle){
        contactbodyEl.style.transform = 'scale(1)';
        contactbodyEl.style.opacity = '1';
        contactbodyEl.style.transform = 'translateY(0)';
    }
    else if(!toggle){
        contactbodyEl.style.transform = 'scale(1)';
        contactbodyEl.style.opacity = '1';
        contactbodyEl.style.transform = 'translateY(100%)';
    }
    contactbodyEl.style.transition = 'all 0.5s ease-in-out'
}

// 메뉴 오픈시
function openmenu(){
    if(toggle){
        navEl.style.transform = 'scale(1)';
        navEl.style.opacity = '1';
        navEl.style.transform = 'translateX(0)';
        navMenuEl.style.display = 'block';
        navMenuEl.style.opacity = '0';
        navMenuEl.style.transition = 'opacity 0.3s ease-in-out';
        setTimeout(function(){    
            navMenuEl.style.opacity = '1';
        },500);
    }
    else if(!toggle){
        navEl.style.transform = 'scale(0)';
        navEl.style.opacity = '0';
        navMenuEl.style.opacity = '0';
        navMenuEl.style.visibilty = 'hidden';
        navMenuEl.style.transition = 'opacity 0.3s ease-in-out';
        navEl.style.transform = 'translateX(100%)';
    }
    navEl.style.transition = 'all 0.3s ease-in-out';
}


function onClickMenu(e){
    e.preventDefault();
    console.log('click');
    var el = e.currentTarget;
    var indexEl = MenuEls.indexOf(el);
    var indexResult = indexEl * -100;
    section.style.transform = 'translateY('+ indexResult +'vh)';
    section.style.transition = 'all 1s ease';  
    current = indexEl; 
    ProgressbarFill();
    viewgear();
    
}


for(var i = 0; i < MenuEls.length; i++){
    MenuEls[i].addEventListener('click', onClickMenu);
};




viewItemEls = Array.prototype.slice.call(viewItemEls);
function onResize() {
    clearInterval(_timer);
    htmlEl.classList.add("on-resize");
    _timer = setTimeout(function() {
        htmlEl.classList.remove("on-resize");
    }, 1);
}
function onClickViewItem(e) {
    e.preventDefault();
    var el = e.currentTarget, index = viewItemEls.indexOf(el);
    if(!el.classList.contains("selected")) {
        _cuId = index;
        if(_exId !== null) viewItemEls[_exId].classList.remove("selected");
        el.classList.add("selected");
        _exId = _cuId;
    }else if(el.classList.contains("selected")){
        el.classList.remove('selected');
    }
}
function onClickClose(e) {
    e.preventDefault();
    e.stopPropagation();
    var el = e.currentTarget, itemEl = el.parentElement;
    if(itemEl.classList.contains("selected")) {
        if(_exId !== null) viewItemEls[_exId].classList.remove("selected");
        _cuId = null;
        _exId = _cuId;
    }
}
function addEvent() {
    window.addEventListener("resize", onResize);
    for(var i = 0; i < viewItemEls.length; i++) {
        viewItemEls[i].addEventListener("click", onClickViewItem);
    }
    for(var j = 0; j < btnCloseEls.length; j++) {
        btnCloseEls[j].addEventListener("click", onClickClose);
    }
}
addEvent();

function init() {
    htmlEl.classList.remove("preload");
}
init();