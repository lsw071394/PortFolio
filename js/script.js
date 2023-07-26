var bodyEl = document.querySelector('body');
var gearEl = document.querySelector('.e');

var rotateEl = document.querySelectorAll('#rotate');
var reverseRotateEl = document.querySelectorAll('#reverse-rotate');
var scrolliconEl = document.querySelector('.scrollicon');

// 햄버거 메뉴
var MenuEl = document.querySelector('.hamburger');
var spanEL = document.querySelectorAll('span');
var navEl = document.querySelector('nav');
var navMenuEl = document.querySelector('div.Menu');
var hamburger = document.querySelector('.hamburger a');
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
var contactbodyEl = document.querySelector('.contactbody');
var gear = document.querySelectorAll('.gear');
// reset();
// function reset() {
//     navEl.style.transform = 'translateX(100%)';
//     contactbodyEl.style.transform = 'translate(-50%,-50%) scale(0)';
// }
window.onload = function () {
    setTimeout(function () {
        scrollTo(0, 0);
        articleEl[0].style.visibility = 'visible';
    }, 50);
}
// 메인 톱니바퀴 모션 함수
setTimeout(function () {
    gearEl.style.animation = 'rotateGear 2s linear infinite forwards';
    for (var i = 0; i < rotateEl.length; i++) {
        rotateEl[i].style.animation = 'rotation 2s linear infinite forwards';
    }
    for (var i = 0; i < reverseRotateEl.length; i++) {
        reverseRotateEl[i].style.animation = 'reverse-rotation 2s linear infinite forwards';
    }
}, 2100);

setTimeout(function () {
    scrolliconEl.style.opacity = '1';
}, 2500);

// 햄버거 클릭시
function MenuChange(e) {
    e.preventDefault();
    openmenu();
    for (i = 0; i < spanEL.length; i++) {
        spanEL[i].style.transition = 'all 0.5s ease-in-out';
    }
    if (toggle) {
        spanEL[0].style.transform = 'translateY(9px) rotateZ(45deg)';
        spanEL[1].style.opacity = 0;
        spanEL[2].style.transform = 'translateY(-9px) rotateZ(-45deg)';
        hamburger.style.background = '#444444';
        hamburger.style.boxShadow = '5px 5px 9px #2b2b2b inset, -5px -5px 9px #5d5d5d inset ';
    } else if (!toggle) {
        spanEL[0].style.transform = '';
        spanEL[1].style.opacity = 1;
        spanEL[2].style.transform = '';
        hamburger.style.background = 'linear-gradient(145deg, #ffffff, #e6e6e6)';
        hamburger.style.boxShadow = '5px 5px 9px #a1a1a1';
    }
    toggle = !toggle;
}
MenuEl.addEventListener('click', MenuChange);

fatimesEl = document.querySelector('.fa-times');
// fatimesEl.addEventListener('click', closecontact);
// contactEl.addEventListener('click', opencontact);
function closecontact() {
    for (var i = 0; i < gear.length; i++) {
        gear[i].style.opacity = '0.3';
        gear[i].style.transition = 'all .5s ease-in'
    }
    contactbodyEl.style.transform = 'translate(-50%,-50%) scale(0)';
    contactbodyEl.style.transition = 'all 0.3s ease-in-out';
}


function opencontact(e) {
    for (var i = 0; i < gear.length; i++) {
        gear[i].style.opacity = '1';
        gear[i].style.transition = 'all 1s ease-in'
    }
    contactbodyEl.style.transform = 'translate(-50%,-50%) scale(1)';
    contactbodyEl.style.opacity = '1';
    // contactbodyEl.style.transform = 'translateY(0)';
    contactbodyEl.style.transition = 'all 0.3s ease-in-out';
}


// 메뉴 오픈시
function openmenu() {
    if (toggle) {
        navEl.style.transform = 'scale(1)';
        navEl.style.opacity = '1';
        navEl.style.transform = 'translateX(0)';
        navMenuEl.style.display = 'block';
        navMenuEl.style.opacity = '0';
        navMenuEl.style.transition = 'opacity 0.3s ease-in-out';
        setTimeout(function () {
            navMenuEl.style.opacity = '1';
        }, 500);
    }
    else if (!toggle) {
        navEl.style.transform = 'scale(0)';
        navEl.style.opacity = '0';
        navMenuEl.style.opacity = '0';
        navMenuEl.style.visibilty = 'hidden';
        navMenuEl.style.transition = 'opacity 0.3s ease-in-out';
        navEl.style.transform = 'translateX(100%)';
    }
    navEl.style.transition = 'all 0.3s ease-in-out';
}

viewItemEls = Array.prototype.slice.call(viewItemEls);
function onResize() {
    clearInterval(_timer);
    htmlEl.classList.add("on-resize");
    _timer = setTimeout(function () {
        htmlEl.classList.remove("on-resize");
    }, 1);
}
function onClickViewItem(e) {
    e.preventDefault();
    var el = e.currentTarget, index = viewItemEls.indexOf(el);
    if (!el.classList.contains("selected")) {
        _cuId = index;
        if (_exId !== null) viewItemEls[_exId].classList.remove("selected");
        el.classList.add("selected");
        _exId = _cuId;
    } else if (el.classList.contains("selected")) {
        el.classList.remove('selected');
    }
}
function onClickClose(e) {
    e.preventDefault();
    e.stopPropagation();
    var el = e.currentTarget, itemEl = el.parentElement;
    if (itemEl.classList.contains("selected")) {
        if (_exId !== null) viewItemEls[_exId].classList.remove("selected");
        _cuId = null;
        _exId = _cuId;
    }
}
function addEvent() {
    window.addEventListener("resize", onResize);
    for (var i = 0; i < viewItemEls.length; i++) {
        viewItemEls[i].addEventListener("click", onClickViewItem);
    }
    for (var j = 0; j < btnCloseEls.length; j++) {
        btnCloseEls[j].addEventListener("click", onClickClose);
    }
}
addEvent();




