$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 78;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

$(".warn_btn").click(function() {
    $(this).toggleClass("closed");
    $(".warn_content").slideToggle(300);
})