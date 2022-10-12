

var items=[];


$("#ItemBtn").on('click',function () {
    $("#ItemSearchField").focus();
});

$(window).on('keydown',function (event) {

    if (event.key=='Tab'){
        event.preventDefault();
    }
});

$("#saveItemBtn").on("click",function () {

    saveItem();

    /*Notification*/
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item has been saved',
        showConfirmButton: false,
        timer: 1500
    })
});

function saveItem() {

    let ItemCode = $("#txtItemCode").val();
    let ItemName = $("#txtItemName").val();
    let ItemQty = $("#txtItemQty").val();
    let ItemPrice = $("#txtItemPrice").val();

    //object
    var Item = {
        Code : ItemCode,
        Name : ItemName,
        Qty : ItemQty,
        Price : ItemPrice
    }

    items.push(Item);

    loadAllItem();

    bindRowDetails();
}
function loadAllItem() {

    $("#TblItem").empty();
    for (var item of items){
        var row = `<tr><td>${item.Code}</td><td>${item.Name}</td><td>${item.Qty}</td><td>${item.Price}</td></tr>`
        $("#TblItem").append(row);
    }

}

/*Update btn click*/
$("#UpdateItemBtn").on('click',function () {


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

            let itemCode = $("#txtItemCode").val();
            updateItem(itemCode);

            Swal.fire(
                'Updated!',
                'Your file has been updated.',
                'success'
            )
        }
    })

})

/*set all values in to the text fields in the table*/
function bindRowDetails() {
    $('#TblItem>tr').click(function () {
        let code = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let qty = $(this).children(":eq(2)").text();
        let price = $(this).children(":eq(3)").text();
        console.log(code+" "+name+" "+qty+" "+price);
        $("#txtItemCode").val(code);
        $("#txtItemName").val(name);
        $("#txtItemQty").val(qty);
        $("#txtItemPrice").val(price);
    });
}
/*Search Item*/
function searchItem(iCode) {
    for (let item of items) {
        if (item.Code === iCode) {
            return item
        }
    }
    return null;
}

function updateItem (iCode) {
    let item = searchItem(iCode);

    if (item != null) {
        item.Code = $("#txtItemCode").val();
        item.Name = $("#txtItemName").val();
        item.Qty = $("#txtItemQty").val();
        item.Price = $("#txtItemPrice").val();
        loadAllItem();
        return true;
    } else {
        return false;
    }
}

/*Clear Add customer Fields...*/
$("#ClearItemBtn").on('click',function () {

    clearfield();

});

/*Clear text field method*/
function clearfield(){
    $("#txtItemCode").val('');
    $("#txtItemName").val('');
    $("#txtItemQty").val('');
    $("#txtItemPrice").val('');

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: ' Clear',
        showConfirmButton: false,
        timer: 1500
    })
}




/*Delete Items*/
$("#btnItemDelete").on('click',function () {


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

            let itemCode = $("#txtItemCode").val();
            deleteItem(itemCode);


            Swal.fire(
                'Updated!',
                'Your file has been updated.',
                'success'
            )
        }
    })


    $("#txtItemCode").val('');
    $("#txtItemName").val('');
    $("#txtItemQty").val('');
    $("#txtItemPrice").val('');

})


function deleteItem(itemCode) {
    let item = searchItem(itemCode);
    alert(item)
    if (item != null) {
        let indexNumber = items.indexOf(item);
        items.splice(indexNumber, 1);
        loadAllItem();
        return true;
    } else {
        return false;
    }
}