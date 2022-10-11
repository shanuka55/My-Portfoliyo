

var item=[];


$("#ItemBtn").on('click',function () {
    $("#ItemSearchField").focus();
});

$(window).on('keydown',function (event) {

    if (event.key=='Tab'){
        event.preventDefault();
    }
});

$("saveItemBtn").on("click",function () {

    saveItem();
});

function saveItem() {

    let ItemCode = $("ItemCodeField").val();
    let ItemName = $("ItemNameField").val();
    let ItemQty = $("ItemQtyField").val();
    let ItemPrice = $("ItemPriceField").val();

    var Item = {
        Code : ItemCode,
        Name : ItemName,
        Qty : ItemQty,
        Price : ItemPrice
    }

    item.push(Item);
}

