

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
}
function loadAllItem() {

    $("#TblItem").empty();
    for (var item of items){
        var row = `<tr><td>${item.Code}</td><td>${item.Name}</td><td>${item.Qty}</td><td>${item.Price}</td></tr>`
        $("#TblItem").append(row);
    }

}

