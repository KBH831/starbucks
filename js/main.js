$(function(){
    $('.main li').mouseenter(function(){
        let idx = $(this).index()
        $('.sub-inner').hide()
        $('.sub-inner').eq(idx).css('visibility', 'visible')
        $('.sub-inner').eq(idx).slideDown(300)
    })
    $('.sub-menu .sub-inner').mouseleave(function(){
        let idx = $(this).index()
        // $('.sub-inner').hide()
        $('.sub-inner').eq(idx).slideUp(300)
        // $(this).slideUp(300)
    })

    $('.play').click(function(){
        $(this).toggleClass('play-start');
        let temp = $(this).hasClass('play-start');
        if(temp) {
           bs.autoplay.stop()
        }else {
            bs.autoplay.start()
        }
    })
    $('.x, .close button').click(function(){
        $('.popup').addClass('active')
    })

    $(window).scroll(function(){
        if($(this).scrollTop() >= 1000){
            $('.corporate, .gotop').fadeIn()
        }else{
            $('.corporate, .gotop').fadeOut()
        }
    })
    $('.gotop').click(function(){
        $('html, body').stop().animate({
            scrollTop : 0
        }, 2000)
    })

})