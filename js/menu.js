console.log("Script Load");
(function ($) {
    $(document).ready(function () {
        console.log('jQuery Ready');
        var _scrollTop = null;
        var _isAni = void 0; // undefined 강제 지정
        var transitionEnd = true;
        function init() {
            layout();
            setting();
            addEvent();
        }
        function layout() {
            // 브라우저 창 셀렉터.
            $win = $(window);

            // 스크롤 애니메이션을 위한 셀렉터.
            $scroll = $('html, body');

            // 메뉴 셀렉터.
            $gnEl = $('.Menu a');
            // console.log($gnEl);
            $section = $('section');
            // 섹션 셀렉터.
            $article = $('article');
            // console.log($section);
        }

        function setting() {
            _isAni = false;
        }

        function addEvent() {
            $win.on('resize', onResize);
            $win.on('scroll', onScrollWin).trigger('scroll');
            $('nav a').on('click', onClick);
        }
        function onResize(e) {
            $('article').css({ 'height': 100 + 'vh' })
        };

        setTimeout(function () {
            $('article').on('wheel', fullpage), { passive: false };
        }, 2700);
        function onScrollWin(e) {
            // console.log('window scroll');
            _scrollTop = $win.scrollTop(); // 스크롤 Y 좌표.
            // console.log(_scrollTop);

            if (!_isAni) {
                scrollMenuActive();
            }
            // 스크롤 이벤트 핸들러의 가장 마지막 부분에 저장.
            // 이전 스크롤 Y 좌표.

        }

        // 스크롤 시 메뉴 활성화 변경 기능.
        function scrollMenuActive() {
            // $.each();
            // $section.each();
            $.each($article, function (index, el) {
                // console.log(index, el);
                var $el = $(el), // 각 요소 셀렉터.
                    start, // 요소가 시작하는 스크롤 시점.
                    end; // 요소가 끝나는 스크롤 시점.


                start = $el.offset().top;

                end = start + $el.innerHeight();
                if (index === 0) {
                    start = 0;
                }
                // console.log(index, start, end); 
                // 스크롤 값과 해당 섹션의 위치를 비교해서 활성화 여부를 판단(조건문).
                if (_scrollTop >= start && _scrollTop < end) {
                    if (!$gnEl.eq(index).hasClass('active')) {
                        $gnEl.removeClass('active');
                        $gnEl.eq(index).addClass('active');
                    }
                }
            });
        }
        var $imgels = $('#skill .photo-box img');
        var $progressEl = $('.progress-bar-fill')
        function progress() {
            if (count == 3) {
                setTimeout(function () {
                    $imgels.eq(0).css({ 'opacity': 1, 'transition': 'all 1s ease-in-out', 'animation': 'hovering 1s infinite ease-in-out' });
                    $imgels.eq(1).css({ 'opacity': 1, 'transition': 'all 1.5s ease-in-out', 'animation': 'hovering 1s infinite ease-in-out' });
                    $imgels.eq(2).css({ 'opacity': 1, 'transition': 'all 2s ease-in-out', 'animation': 'hovering 1s infinite ease-in-out' });
                    $imgels.eq(3).css({ 'opacity': 1, 'transition': 'all 2.5s ease-in-out', 'animation': 'hovering 1s infinite ease-in-out' });
                    $imgels.eq(4).css({ 'opacity': 1, 'transition': 'all 3s ease-in-out', 'animation': 'hovering 1s infinite ease-in-out' });
                    $imgels.eq(5).css({ 'opacity': 1, 'transition': 'all 3.5s ease-in-out', 'animation': 'hovering 1s infinite ease-in-out' });
                }, 1500);
                setTimeout(function () {
                    $progressEl.eq(0).animate({ width: '80%', backgroundColor: 'black' }, { duration: 1000 });
                    $progressEl.eq(1).animate({ width: '60%', backgroundColor: 'black' }, { duration: 1000 });
                    $progressEl.eq(2).animate({ width: '65%', backgroundColor: 'black' }, { duration: 1000 });
                    $progressEl.eq(3).animate({ width: '50%', backgroundColor: 'black' }, { duration: 1000 });
                    $progressEl.eq(4).animate({ width: '50%', backgroundColor: 'black' }, { duration: 1000 });
                }, 1000);
            }
            if (count >= 1) {
                $('.gear').animate({ opacity: 0.3 }, { duration: 500 })
            } else if (count < 1) {
                $('.gear').animate({ opacity: 1 }, { duration: 500 })
            }
        }
        function onClick(e) {
            e.preventDefault();
            var index = $("nav a").index(this);
            console.log(index);
            var href = $(this).attr('href')
            var top = $(href).offset().top
            $('html,body').animate({
                'scrollTop': top
            }, { duration: 500 })
            count = index;
            progress();

        }
        var h = 0;
        $(window).scroll(function () {
            var scrT = parseInt($(this).scrollTop());
            h = $(window).height();
            $(window).resize(function () {
                h = $(window).height()
            });

            $('article').each(function (i) {
                var secTop = $(this).offset().top;

                if (secTop <= scrT) {
                    $('nav ul li a').removeClass('on');
                    $('nav ul li').eq(i).find('a').addClass('on');
                };
            });
        });

        function tEnd() {
            transitionEnd = false;
            setTimeout(function () {
                transitionEnd = true;
            }, 1000);
        }
       
        var count = 0;

        if($(window).innerWidth() > 1100){
            function fullpage(e) {
                e.preventDefault();
    
                if (!transitionEnd) {
                    return;
                };
                // var m = e.originalEvent.wheelDelta;
                if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                    if (count > 0) {
                        count--;
                        console.log(count);
                        var prev = $(this).prev().offset().top;
                        $('html,body').stop().animate({
                            'scrollTop': prev
                        }, { duration: 500 });
                        tEnd();
                    }
                }
                else {
                    if (count < $('article').length - 1) {
                        count++;
                        console.log(count);
                        var next = $(this).next().offset().top;
                        $('html,body').stop().animate({
                            'scrollTop': next
                        }, { duration: 500 });
                        tEnd();
                    }
                }
                progress();
            };
        }
       
        
        if($(window).innerWidth() < 1100){
            $('html').css({'overflow' : 'scroll'})
            $('article').remove('wheel', fullpage);
            setTimeout(function () {
                $imgels.eq(0).css({ 'opacity': 1, 'transition': 'all 1s ease-in-out', 'animation': 'hovering 1s infinite ease-in-out' });
                $imgels.eq(1).css({ 'opacity': 1, 'transition': 'all 1.5s ease-in-out', 'animation': 'hovering 1s infinite ease-in-out' });
                $imgels.eq(2).css({ 'opacity': 1, 'transition': 'all 2s ease-in-out', 'animation': 'hovering 1s infinite ease-in-out' });
                $imgels.eq(3).css({ 'opacity': 1, 'transition': 'all 2.5s ease-in-out', 'animation': 'hovering 1s infinite ease-in-out' });
                $imgels.eq(4).css({ 'opacity': 1, 'transition': 'all 3s ease-in-out', 'animation': 'hovering 1s infinite ease-in-out' });
                $imgels.eq(5).css({ 'opacity': 1, 'transition': 'all 3.5s ease-in-out', 'animation': 'hovering 1s infinite ease-in-out' });
                $progressEl.eq(0).animate({ width: '80%', backgroundColor: 'black' }, { duration: 1000 });
                $progressEl.eq(1).animate({ width: '60%', backgroundColor: 'black' }, { duration: 1000 });
                $progressEl.eq(2).animate({ width: '65%', backgroundColor: 'black' }, { duration: 1000 });
                $progressEl.eq(3).animate({ width: '50%', backgroundColor: 'black' }, { duration: 1000 });
                $progressEl.eq(4).animate({ width: '50%', backgroundColor: 'black' }, { duration: 1000 });
            }, 1000);
            $(window).scroll(function () {
                var height = $(document).scrollTop();
                console.log(height);
                if (height >= 200) {
                    $('.gear').animate({ opacity: 0.3 }, { duration: 100 })
                } else if (height < 200) {
                    $('.gear').animate({ opacity: 1 }, { duration: 100 })
                }
            });
        }


        init();
    });
})(jQuery);
