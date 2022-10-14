const cIdRegx = /^(C00-)[0-9]{1,3}$/;
const cNameRegx = /^[A-z ]{5,20}$/;
const cAddressRegx = /^[0-9/A-z .,]{7,}$/;
const cContactRegx = /^(070|071|072|075|076|077|078|027)[0-9]{7}$/;

var customerValidation=[];

customerValidation.push(
    {reg: cIdRegx, field: $("#customerIdField"), error: 'Customer ID(Ex : C00-001)'}
);
customerValidation.push(
    {reg: cNameRegx, field: $("#customerNameField"), error: 'Customer Name(Ex : A-z, 5-20)'}
);
customerValidation.push(
    {reg: cAddressRegx, field: $("#customerAddressField"), error: 'Customer Address(Ex : A-z 0-9)'}
);
customerValidation.push(
    {reg: cAddressRegx, field: $("#customerContactField"), error: 'Customer Contact(Ex : 07X XXX XX XX)'}
);

function checkValidations (){
    let x = 0;
    for (let val of customerValidation) {
        if (check(val.reg, val.field)) {
            textSuccess(val.field, "");
        } else {
            x = x + 1;
            setErrorMessage(val.field,val.error);
        }
    }
    setButtonValue(x);
}

function setButtonValue(val) {
    if (val>0) {
        $("#saveCustomerBtn").attr('disabled',true)
    } else {
        $("#saveCustomerBtn").attr('disabled',false)
    }
}

function check(reg, field) {
    let val = field.val();
    return reg.test(val) ? true : false
}

function setErrorMessage (field, error) {
    if (field.val().length <= 0) {
        field.css("border", "1px solid #ced4da")
        field.parent().children('span').text(error);
    } else {
        field.css("border", "2px solid red")
        field.parent().children('span').text(error);
    }
}

function textSuccess(txtField, error) {
    if (txtField.val().length <= 0) {
        txtField.css("border", "1px solid #ced4da")
        txtField.parent().children('span').text(error);
    } else {
        txtField.css("border", "2px solid green")
        txtField.parent().children('span').text(error);
    }
}

function txtFieldFocus (textField) {
    textField.focus();
}

$("#customerIdField,#customerNameField,#customerAddressField,#customerContactField").on('keyup', function (event) {
    checkValidations();
})

$("#customerIdField,#customerNameField,#customerAddressField,#customerContactField").on('blur', function (event) {
    checkValidations();
})

$("#customerIdField").on('keydown', function (event) {
    if (event.key == 'Enter' && check(cIdRegx, $("#customerIdField"))) {
        $("#customerNameField").focus();
    } else {
        txtFieldFocus($("#customerIdField"));
    }
});

$("#customerNameField").on('keydown', function (event) {
    if (event.key == 'Enter' && check(cNameRegx, $("#customerNameField"))) {
        txtFieldFocus($("#customerAddressField"));
    }
});

$("#customerAddressField").on('keydown', function (event) {
    if (event.key == 'Enter' && check(cAddressRegx, $("#customerAddressField"))) {
        txtFieldFocus($("#customerContactField"));
    }
});

$("#customerContactField").on('keydown', function (event) {
    if (event.key == 'Enter' && check(cContactRegx, $("#customerContactField"))) {
        $("#saveCustomerBtn").click();
        $("#customerIdField,#customerNameField,#customerAddressField,#customerContactField").val("");
        $("#customerIdField").focus();
        checkValidations();
    }
});


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

    bindRowDetails();

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

            Swal.fire(
                'Deleted!',
                'Your customer has been Deleted.',
                'success'
            )
        }
    })
    let customerId = $("#customerIdField").val();
    deleteCustomer(customerId);


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

