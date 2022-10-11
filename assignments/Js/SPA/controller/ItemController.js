

var customer=[];


$("#ItemBtn").on('click',function () {
    $("#ItemSearchField").focus();
});

$(window).on('keydown',function (event) {

    if (event.key=='Tab'){
        event.preventDefault();
    }
});

$("#saveCustomerBtn").on('click',function () {

    saveCustomer();
});

function saveCustomer() {
    let customerId = $("#customerIdField").val();
    let customerName = $("#customerNameField").val();
    let customerAddress = $("#customerAddressField").val();
    let customerContact = $("#customerContactField").val();

    var Customer = {
        id: customerId,
        name:customerName,
        address:customerAddress,
        contact: customerContact
    }

    customer.push(Customer);



}

