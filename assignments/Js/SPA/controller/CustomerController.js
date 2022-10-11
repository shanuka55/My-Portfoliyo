
$("#CustomerBtn").on('click',function () {
    $("#SearchFieldID").focus();
});




$(window).on('keydown',function (event) {

    if (event.key=='Tab'){
       event.preventDefault();
    }


})