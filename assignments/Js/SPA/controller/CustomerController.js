const cIdRegx = /^(C00-)[0-9]{1,3}$/;
const cNameRegx = /^[A-z ]{5,20}$/;
const cAddressRegx = /^[0-9/A-z .,]{7,}$/;
const cContactRegx = /^(070|071|072|075|076|077|078|027)[0-9]{7}$/;

var customerValidation=[];


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
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
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

    bindRowDetails();

}

function loadAllCustomer() {

    $("#TblCustomerBody").empty();
    for (var customer of customers){
        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.contact}</td></tr>`
        $("#TblCustomerBody").append(row);
    }

}



$("#UpdateCustomerBtn").on('click',function () {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to update this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
    }).then((result) => {
        if (result.isConfirmed) {

            let customerID = $("#customerIdField").val();
            updateCustomer(customerID);

            Swal.fire(
                'Updated!',
                'Your file has been updated.',
                'success'
            )
        }
    })
})

function bindRowDetails() {
    $('#TblCustomerBody>tr').click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let contact = $(this).children(":eq(3)").text();
        console.log(id+" "+name+" "+address+" "+contact);
        $("#customerIdField").val(id);
        $("#customerNameField").val(name);
        $("#customerAddressField").val(address);
        $("#customerContactField").val(contact);
    });
}
/*Search customer*/
function searchCustomer(cusID) {
    for (let customer of customers) {
        if (customer.id === cusID) {
            return customer
        }
    }
    return null;
}

function updateCustomer (cId) {
    let customer = searchCustomer(cId);

    if (customer != null) {
        customer.id = $("#customerIdField").val();
        customer.name = $("#customerNameField").val();
        customer.address = $("#customerAddressField").val();
        customer.contact = $("#customerContactField").val();
        loadAllCustomer();
        return true;
    } else {
        return false;
    }
}

/*Clear Add customer Fields...*/
$("#ClearCustomerBtn").on('click',function () {

    $("#customerIdField").val('');
    $("#customerNameField").val('');
    $("#customerAddressField").val('');
    $("#customerContactField").val('');

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: ' Clear',
        showConfirmButton: false,
        timer: 1500
    })


});

$("#btnCustomerDelete").on('click',function () {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to Delete this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            let customerId = $("#customerIdField").val();
            deleteCustomer(customerId);


            Swal.fire(
                'Deleted!',
                'Your customer has been Deleted.',
                'success'
            )
        }
    })

    $("#customerIdField").val('');
    $("#customerNameField").val('');
    $("#customerAddressField").val('');
    $("#customerContactField").val('');

});

function deleteCustomer(customerId) {
    let customer = searchCustomer(customerId);
    if (customer != null) {
        let indexNumber = customers.indexOf(customer);
        customers.splice(indexNumber, 1);
        loadAllCustomer();
        return true;
    } else {
        return false;
    }
}

