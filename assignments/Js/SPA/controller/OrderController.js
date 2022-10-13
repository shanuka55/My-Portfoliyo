




$("#OrderBtn").on('click',function () {
    loadToItemBox();
    $("#Order-Id").focus();
});




$(window).on('keydown',function (event) {

    if (event.key=='Tab'){
        event.preventDefault();
    }


})

function loadToItemBox(){

}
function loadAllCustomerIds(){
    $("#inputCmbCustomerId").empty();
    $("#inputCmbCustomerId").append(`<option></option>`);
    for (let cus of customers){
        $("#inputCmbCustomerId").append(`<option class="text-dark">${cus.id}</option>`);
    }
}

$("#inputCmbCustomerId").click(function () {

    loadAllCustomerIds();
})

















