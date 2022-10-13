




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

/*load all customer ids in the cmbBox*/
function loadAllCustomerIds(){
    $("#inputCmbCustomerId").empty();
    $("#inputCmbCustomerId").append(`<option></option>`);
    for (let cus of customers){
        $("#inputCmbCustomerId").append(`<option class="text-dark">${cus.id}</option>`);
    }
}

$("#inputCmbCustomerId").click(function () {

    loadAllCustomerIds();
});


/*Load item code in to cmbBox*/
$("#inputCmbItemCode").click(function () {

    loadAllItemIds();
})

function loadAllItemIds() {
    $("#inputCmbItemCode").empty();
    $("#inputCmbItemCode").append(`<option></option>`);
    for (let item of items){
        /*alert(item.Code);*/
        $("#inputCmbItemCode").append(`<option class="text-dark">${item.Code}</option>`);
    }
}


/*Fill customer Details*/

$("#inputCmbCustomerId").on('change',function () {

    let cId = $(this).val();
    fillCustomerTextField(cId);

});

function fillCustomerTextField(cId) {

    let customer = searchCustomer(cId);
    $("#txtOrderCustomerName").val(customer.name);
    $("#txtOrderCustomerAddress").val(customer.address);
    $("#txtOrderCustomerContact").val(customer.contact);

}


/*Fill items Details*/

$("#inputCmbItemCode").on('change',function () {

    let Icode = $(this).val();
    fillItemTextField(Icode);

});

function fillItemTextField(Icode) {

    let item = searchItem(Icode);
    $("#txtOrderItemName").val(item.Name);
    $("#txtOrderItemQtyOnHand").val(item.Qty);
    $("#txtOrderItemPrice").val(item.Price);

}











