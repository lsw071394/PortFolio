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
// var dotNav = document.querySelectorAll('.dot-nav li');
// Array.prototype.slice.call('dot-nav');

console.log(MenuEls);
reset();


function reset(){ // article 의 top 값 초기화
    // for(let i =0; i<articleEl.length;i++){
    //     articleEl[i].style.top = "100vh";
    // }
    // articleEl[current].style.top = "0";
    navEl.style.transform = 'translateX(100%)';
    navEl.style.borderRadius = '0 0 0 0';
    // for(var i = 0; i < articleEl.length; i++){
    //     articleEl[i].style.visibility = 'hidden';
    // }
    
    // articleEl[2].style.visibility = 'hidden';
    // articleEl[3].style.visibility = 'hidden';
    // articleEl[4].style.visibility = 'hidden';
    // articleEl[5].style.visibility = 'hidden';
    // for(var i =0; i <dotNav.length; i++){
    //     dotNav[i].style.visibilty = 'hidden';
    // }
    MenuEls[0].classList.add('active');

    
}

// 새로고침시 화면 상단으로 이동
window.onload = function() {
    setTimeout (function () {
        scrollTo(0,0);
        articleEl[0].style.visibility = 'visible';
    },50);
}

// window.addEventListener('scroll', function () {
//     value = window.scrollY;
//     // console.log(value);
// });

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
    // for(var i = 0;i<articleEl.length;i++){
    //     articleEl[i].style.visibility = "hidden";
    // }
    //     articleEl[current].style.visibility = "visible";
    if(e.type ==="mousewheel"){
        
        if(e.wheelDelta < 0){
            // console.log("down");
            articleDown();
            // console.log(current);
        }
        else if(e.wheelDelta > 0){
            // console.log("up");
            articleUp();
        }
    }
    // console.log(current);
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
        // articleEl[current+1].style.top = "100vh";
        // articleEl[current].style.top = "0";
        // for(let i =0; i<articleEl.length;i++){  
        //     articleEl[i].style.transition = "top 1s ease";
        // }
    }
    
    gear2El.style.animation = 'unarticle1 1s linear forwards'    
    gearupmove();
    tEnd();
}

function gearupmove(){
    if(current == 0){
        // setTimeout(function(){
        //     gearEl.style.animation = 'rotateGear 4s linear infinite forwards';
        // },1000)        
    }
    if(current == 1){    
        gear2El.style.animation = 'unarticle2 1s linear forwards';
        
    }
    if(current == 2){    
        gear2El.style.animation = 'unarticle3 1s linear forwards';
        
    }
    if(current == 3){    
        gear2El.style.animation = 'unarticle4 1s linear forwards';
        
    }
    if(current == 4){    
        gear2El.style.animation = 'unarticle5 1s linear forwards'
        
    }
    
}

var gearmasterEl = document.querySelector('.gearMaster');


function articleDown(){
    if(current < articleEl.length-1){
        current++;
        var currentResult =  current * -100;
        // console.log(currentResult);
        // articleEl[current-1].style.top = "-100vh";
        // articleEl[current].style.top = "0";
        section.style.transform = 'translateY('+ currentResult +'vh)';
        
        section.style.transition = 'all 1s ease';     
        // for(let i =0; i<articleEl.length;i++){
        //     articleEl[i].style.transition = "top 1s ease";
        // }
    }else if(current > articleEl.length){
        return false;
    }
    for(var i = 1; i < articleEl.length; i++){
        articleEl[i].style.visibility = 'visible';
    }
    // articleEl[1].style.visibility = 'visible';
    // articleEl[2].style.visibility = 'visible';
    // articleEl[3].style.visibility = 'visible';
    // articleEl[4].style.visibility = 'visible';
    // articleEl[5].style.visibility = 'visible';
    geardownmove();
    tEnd();
    
}

function geardownmove(){
    if(current == 1){
        // setTimeout(function(){
        //     box1El.style.animation = 'down 2s linear forwards' 
        // },1000);
        gear2El.style.animation = 'article1 1s linear forwards ';
        
    }
    if(current == 2){        
        gear2El.style.animation = 'article2 1s linear forwards ';
        
        
        
    }
    if(current == 3){
        gear2El.style.animation = 'article3 1s linear forwards'
        setTimeout(function(){
            for(var i = 0; i<imgEls.length-1; i++){
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
    if(current == 4){
        gear2El.style.animation = 'article4 1s linear forwards';
       
        
    }
    if(current == 5){
        gear2El.style.animation = 'article5 1s linear forwards';
       
    }
}

// 햄버거 클릭시
function MenuChange(){
    
    openmenu();
    // console.log('click');
    for(i=0; i < spanEL.length; i++){
        spanEL[i].style.transition = 'all 0.5s ease-in-out';
    }

    if(toggle){
        spanEL[0].style.transform = 'translateY(9px) rotateZ(45deg)';
        spanEL[1].style.opacity= 0;
        spanEL[2].style.transform = 'translateY(-9px) rotateZ(-45deg)';
    }else if(!toggle){
        spanEL[0].style.transform = '';
        spanEL[1].style.opacity= 1;
        spanEL[2].style.transform = '';
    }
    
    toggle = !toggle;
}
MenuEl.addEventListener('click',MenuChange);


// 메뉴 오픈시
function openmenu(){
    if(toggle){
        // navEl.style.transform = 'translateX(0) translateY(0)';
        // navEl.style.width = '100%';
        // navEl.style.height = '100vh';
        navEl.style.transform = 'scale(1)';
        navEl.style.opacity = '1';
        navEl.style.transform = 'translateX(0)';
        // navEl.style.borderRadius = '0 0 0 0';
        navMenuEl.style.display = 'block';
        navMenuEl.style.opacity = '0';
        navMenuEl.style.transition = 'opacity 0.3s ease-in-out';
        
        setTimeout(function(){    
            navMenuEl.style.opacity = '1';
        },500);
    }
    else if(!toggle){
        // navEl.style.transform = '';
        // navEl.style.width = '0';
        // navEl.style.height = '0';
        navEl.style.transform = 'scale(0)';
        navEl.style.opacity = '0';
        navMenuEl.style.opacity = '0';
        navMenuEl.style.visibilty = 'hidden';
        
        navMenuEl.style.transition = 'opacity 0.3s ease-in-out';
        // navEl.style.borderRadius = '0 0 0 0';
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

    
    
    geardownmove();
    
}


for(var i = 0; i < MenuEls.length; i++){
    MenuEls[i].addEventListener('click', onClickMenu);
};





// function onClick(e){
//     e.preventDefault();
//     console.log('click');
//     var el = e.currentTarget, index = MenuEls.indexOf(el);
//     _cuId = index;
    
//      pageUpSlide();
    
// }

// function pageUpSlide(){
//     if(_cuId == 0){
//         current++;
//         articleEl[current - 1].style.top = "-100vh"* current
//         articleEl[current].style.top = "0"
//         for(let i =0; i<articleEl.length;i++){
//         articleEl[i].style.transition = "top 1s ease";
//         }
//     }else if(_cuId == 1){
//         current++;
//         articleEl[current - 1].style.top = "-200vh"
//         articleEl[current].style.top = "0"
//         for(let i =0; i<articleEl.length;i++){
//         articleEl[i].style.transition = "top 1s ease";
//         }
//     }
    
//     gearupmove();
    
// }


// function pageDownSlide(){
//     current--;
//     articleEl[current+1].style.top = "100vh"* current
//     articleEl[current].style.top = "0"
//     for(let i =0; i<articleEl.length;i++){
//         articleEl[i].style.transition = "top 1s ease";
//     }
//     geardownmove();
    
// }

// function addEvent(){
//     for(var i = 0; i < MenuEls.length; i++){
//         MenuEls[i].addEventListener('click', onClick);       
//     }
    
// }
   
//     addEvent();

// function onClicka(e){
//     console.log('click')
//     var el = e.currentTarget, index = MenuEls.indexOf(el);
//     _cuId = index;
    
//      pageUpSlide();
//      pageDownSlide()
// }

// for(var i = 0; i <MenuEls.length; i++){
//     MenuEls[i].addEventListener('click', onClicka);
// }



// var logoEl = document.querySelector('#logo')
// var el = e.currentTarget, index = MenuEls.indexOf(el);
// function onClick2(e){
//     e.preventDefault();
//     current--;
//     articleEl[current+1].style.top = "100vh" * articleEl.length - el;
//     articleEl[current].style.top = "0"
// }
// logoEl.addEventListener('click', onClick2);



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
// function timer_test(){
//     location.href = "/index.html"
// }

function init() {
    htmlEl.classList.remove("preload");
    // addEvent();
}
init();