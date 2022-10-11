$("#CustomerBtn").on('click',function () {

    $("#DashboardSection").css('display','none');
    $("#ItemSection").css('display','none');
    $("#OrderSection").css('display','none');

    $("#CustomerSection").css('display','inline');

});

$("#ItemBtn").on('click',function () {

    $("#DashboardSection").css('display','none');
    $("#CustomerSection").css('display','none');
    $("#OrderSection").css('display','none');

    $("#ItemSection").css('display','inline');

});

$("#OrderBtn").on('click',function () {

    $("#DashboardSection").css('display','none');
    $("#CustomerSection").css('display','none');
    $("#ItemSection").css('display','none');

    $("#OrderSection").css('display','inline');

});

$("#HomeBtn").on('click',function () {

    $("#OrderSection").css('display','none');
    $("#CustomerSection").css('display','none');
    $("#ItemSection").css('display','none');

    $("#DashboardSection").css('display','inline');

});
