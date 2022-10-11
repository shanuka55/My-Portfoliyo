

$("#OrderBtn").on('click',function () {
    $("#Order-Id").focus();
});




$(window).on('keydown',function (event) {

    if (event.key=='Tab'){
        event.preventDefault();
    }


})