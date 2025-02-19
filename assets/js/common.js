(function($){

    // nav 관련
    $(document).on('click', '.btn-nav', function(){
        $(this).toggleClass('close');
        $('body').toggleClass('nav-opened');
    });

    // gnb 관련
    $(document).on('click', '.gnb > li > a', function(){
        $('.gnb > li').removeClass('active');
        $('.gnb > li > ul').stop().slideUp();
        $(this).siblings('ul').stop().slideDown();
        $(this).parent().addClass('active');
    });
    $(document).on('click', '.gnb > li.active > a', function(){
        $(this).siblings('ul').stop().slideUp();
        $(this).parent().removeClass('active');
    });
    
    // quick top 추가
    $(document).on('click', '.btn-top', function(e) {
        $('html, body').stop().animate({
            scrollTop: 0
        });
        e.preventDefault();
    });

})(jQuery);