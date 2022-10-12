
var customers=[];

$("#CustomerBtn").on('click',function () {
    $("#SearchFieldID").focus();
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

    customers.push(Customer);

    loadAllCustomer();

}

function loadAllCustomer() {

    $("#TblCustomerBody").empty();
    for (var customer of customers){
        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.contact}</td></tr>`
        $("#TblCustomerBody").append(row);
    }

}