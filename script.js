$(function () {
    var flag = true
    $('.button-s').click(function () {
        if (flag) {
            $('.search').removeClass('d-none');
            flag = false
        } else {
            $('.search').addClass('d-none');
            flag = true
        }
    })

    $('.resp-btn').click(function () {
        $('.nav-bar').toggleClass('nav-resp')
    })
})