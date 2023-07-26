console.log("Script Load");
(function ($) {
    $(document).ready(function () {
        console.log('jQuery Ready');
        // Image Slider.
        var _this = this;
        var _cuId = 0,
            _exId = 0,
            _max = void 0;
        var _isAni = false; // 애니메이션 여부를 판단하는 Boolean 변수 true
        function init() {
            // 초기화 함수.
            layout();
            setting();
            addEvent();
            reset();
        }
        function layout() {
            // 셀렉터를 찾아오는 함수.
            _this.$banner = $('.slide-box');
            // console.log(_this.$banner);    
            // paddle navigation
            _this.$paddleNav = _this.$banner.find('.paddle-nav');
            _this.$btnPaddle = _this.$paddleNav.find('button.arrow');
            _this.$btnPaddlePrev = _this.$paddleNav.find('button.arrow.prev');
            _this.$btnPaddleNext = _this.$paddleNav.find('button.arrow.next');
            // dot navigation
            _this.$dotNav = $('.dot-nav');
            _this.$dotEl = _this.$dotNav.find('img');
            // banner
            _this.$wrap = _this.$banner.children('.banner-wrap');
            _this.$container = _this.$wrap.children('.banner-container');
            _this.$item = _this.$container.children('.banner-item');
        }
        function setting() {
            // 초기 세팅 함수.
            _cuId = 0;
            _exId = _cuId;
            // 전체 이미지 아이템의 개수.
            _max = _this.$item.length;
        }
        function addEvent() {
            // 이벤트 연결 함수.
            _this.$btnPaddle.on('click', onClikcBtnPaddle)
            _this.$dotEl.on('click', onClickDotEl)
        }
        // console.log(_this.$btnPaddle);
        function reset() {
            // 세팅과 연결 후 초기화 함수.
            paddleSet();
            dotSet();
        }
        function onClikcBtnPaddle(e) {
            if (_isAni) return; // 애니메이션 중이면 클릭이 되지 않는다.

            var $el = $(e.currentTarget);
            // prev 혹은 next 버튼을 구분하기.
            if ($el.hasClass('prev')) {
                console.log('이전');
                _cuId--; // 클릭 이벤트가 발생될 때마다 1씩 감소

                // _cuId 가 0 보다 작아지면 이미지가 없다.
                if (_cuId < 0) {
                    _cuId = 0;
                }
            } else if ($el.hasClass('next')) {
                console.log('다음');
                _cuId++; // 클릭 이벤트가 발생될 때마다 1씩 증가
                // _cuId 가 마지막 이지미 번호일 때 다음 이미지가 있다.
                if (_cuId > _max - 1) {
                    _cuId = _max - 1;
                }
            }
            if (_exId !== _cuId) { // 이전 ID 값과 현재 ID 값이 다를 때에만 배너 애니메이션 호출됨.
                // 각 버튼의 기능 점검이 끝나면 실제 배너가 바뀔 수 있도록.
                changeBanner();
            }
        }
        function onClickDotEl(e) {
            // var $el = $(e.currentTarget);
            var id = _this.$dotEl.index(e.currentTarget);
            if (_exId !== id) {
                _cuId = id;
                changeBanner();
            }
        }
        function changeBanner() {
            console.log('Change Banner');

            _isAni = true; // 애니메이션이 이뤄지는 중 - 클릭을 방지
            //console.log(_cuId);
            var bannerWidth = $('.banner-wrap').width();
            var left = bannerWidth * _cuId * -1;
            var duration = 350 + Math.abs(_exId - _cuId) * 150;
            // 기본 속도는 350 ----- + 이동하려는 ID와의 간격에 따라 150 속도를 추가
            // 1 - 350 + 150
            // 2 - 350 + 300
            // 3 - 350 + 450
            // ......
            console.log(duration);
            // console.log(Math.abs(_exId = _cuId)); _exId 와 _cuId의 비교값.(절대값 적용)
            paddleSet();
            dotSet();

            // left 속성 값을 변경.
            // _this.$container.css({
            //     'left' : left
            // });

            // left 속성 값을 변경하여 0.8초 동안 애니메이션 생성.
            // _this.$container.stop(true).animate({
            //     'left' : left
            // }, 800);
            _this.$container.stop(true)
                .animate(
                    { 'left': left }, // 애니메이션 이뤄질 스타일
                    {   // 애니메이션 옵션
                        'duration': duration, // duration = 애니메이션 속도
                        'easing': 'easeInQuart',
                        'complete': function () { // complete 함수 - 애니메이션 완료 callback 함수
                            // console.log('Complete')
                            _exId = _cuId;
                            _isAni = false; // 애니메이션이 완료 - 클릭이 될 수 있는 상태
                        }
                    });
        }
        // Id 에 따라 paddle 화살표의 활성화 / 비활성화 기능.
        function paddleSet() {
            _this.$btnPaddle.removeClass('disabled');
            if (_cuId === 0) {
                // _cuId 가 첫번째일 때 이전버튼은 비활성화, 다음버튼은 활성화
                _this.$btnPaddlePrev.addClass('disabled');
            } else if (_cuId === _max - 1) {
                // _cuId 가 마지막번째일 때 이전버튼은 활성화, 다음버튼은 비활성화
                _this.$btnPaddleNext.addClass('disabled');
            }
        }
        // dot nav 부분의 활성화를 바꿔주는 기능
        function dotSet() {
            _this.$dotEl.removeClass('selected');
            _this.$dotEl.eq(_cuId).addClass('selected');
        }
        // 전체 호출.
        init();
    });
})(jQuery);
