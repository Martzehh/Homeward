$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        var $aboutArt = $("#aboutArt");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        $aboutArt.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
