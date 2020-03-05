$(function() {

    //Set card-header background image;
    $(".card .card-header").each(function(index) {
        let imageSrc = $(this).next().find(".card--photo img").attr("src");
        $(this).append('<img src=\'' + imageSrc + '\' />');
        $(this).addClass("opacity-background");
        //console.log(imageSrc);
    });

});