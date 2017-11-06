$().ready(function () {
    $('#login-button').click(function (event) {
        event.preventDefault();
        $('form').fadeOut(500);
        $('#login').addClass('from-success');
        var t = setTimeout(function () {
            window.location.href = "book-search.html";
        }, 1000);
    });
});