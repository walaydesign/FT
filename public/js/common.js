$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 78;
    $(".detail").removeClass("active");
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

$(".warn_btn").click(function() {
    $(this).toggleClass("closed");
    $(this).parents(".warn").find(".warn_content").slideToggle(300);
})

$(".come_btn").click(function() {
    let detail = $(this).data("detail");
    $(detail).addClass("active");
});

$(".detail_close").click(function() {
    $(this).parents(".detail").removeClass("active");
});