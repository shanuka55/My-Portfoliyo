
$("#ItemBtn").on('click',function () {
    $("#ItemSearchField").focus();
});




$(window).on('keydown',function (event) {

    if (event.key=='Tab'){
        event.preventDefault();
    }


})