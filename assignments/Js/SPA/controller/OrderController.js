




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

let cId;

$("#inputCmbCustomerId").on('change',function () {

    cId = $(this).val();
    fillCustomerTextField(cId);

});

function fillCustomerTextField(cId) {

    let customer = searchCustomer(cId);
    $("#txtOrderCustomerName").val(customer.name);
    $("#txtOrderCustomerAddress").val(customer.address);
    $("#txtOrderCustomerContact").val(customer.contact);

}
let Icode;

/*Fill items Details*/

$("#inputCmbItemCode").on('change',function () {

    Icode= $(this).val();
    fillItemTextField(Icode);

});

function fillItemTextField(Icode) {

    let item = searchItem(Icode);
    $("#txtOrderItemName").val(item.Name);
    $("#txtOrderItemQtyOnHand").val(item.Qty);
    $("#txtOrderItemPrice").val(item.Price);

}

/*Add new Customer Btn*/

$("#btnAddNewCustomer").on('click',function () {

    $("#DashboardSection").css('display','none');
    $("#ItemSection").css('display','none');
    $("#OrderSection").css('display','none');

    $("#CustomerSection").css('display','inline');

});



var cartDetailsArry=[];

/*Add to cart Btn*/
$("#btnAddToCart").on('click',function () {


    var cart ={
        Code: Icode,
        Name: $("#txtOrderItemName").val(),
        UnitPrice : $("#txtOrderItemPrice").val(),
        Qty : $("#txtOrderItemQty").val(),
        Total :getTotal()
    }
    cartDetailsArry.push(cart);
    loadCartDeatails();

    calculateTotal();

});

function loadCartDeatails() {

    $("#tblCart").empty();
    for (let cart of cartDetailsArry){

        var cartRow = `<tr><td>${cart.Code}</td><td>${cart.Name}</td><td>${cart.UnitPrice}</td><td>${cart.Qty}</td><td>${cart.Total}</td></tr>`
        $("#tblCart").append(cartRow);
    }

}

var subTotalArray=[];

function getTotal() {

   var price = $("#txtOrderItemPrice").val();

   var qty = $("#txtOrderItemQty").val();

   var tot = price*qty;

   subTotalArray.push(tot);

   return tot;
}

var orderDetails=[];


                /*place Order btn*/
$("#btnPlaceOrder").on('click',function () {

    var OrderId = genarateOrderId();
    var Date = getDate();

    /*alert("hello");*/
    var orderDetail = {
        OrderId: OrderId,
        CustomerId: cId,
        Total: orderTotal,
        Date: Date
    }

    orderDetails.push(orderDetail);

    alert(orderDetail);

    loadOrderDetailstable();

    Swal.fire('Your Order has been save Successfully.');
});

function getDate() {

    const date = new Date().toLocaleDateString("de-DE");
    console.log(date);
    return date;

}

function genarateOrderId() {

        var ids = 0;
        var orderId = "Or-00";
        if (orderDetails.length==0){

            ids=ids+1
            return orderId+ids;
        }

        else {
            var detail = orderDetails[orderDetails.length-1]
            var id = detail.OrderId;
            var x = id.substr(4,);
            var intx = parseInt(x);
            intx = intx+1;
            var newId = intx;
            return newId;
        }

}

var orderTotal;

function calculateTotal() {

    let total = 0
    for(var i=0; i<subTotalArray.length; i++){

        total += subTotalArray[i]
    }
    orderTotal=total;

}

function loadOrderDetailstable() {

    $("#tblOrderDeatails").empty();
    for (var orderDetail of orderDetails){
        /*alert(orderDetail.OrderId+''+orderDetail.Total+""+orderDetail.Date);*/
        var row = `<tr><td>${orderDetail.OrderId}</td><td>${orderDetail.CustomerId}</td><td>${orderDetail.Total}</td><td>${orderDetail.Date}</td></tr>`
        $("#tblOrderDetails").append(row);
    }

}

$("#OrderDetailsBtn").on('click',function () {


    loadOrderDetailstable();

})




















