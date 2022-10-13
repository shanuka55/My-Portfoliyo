$("#CustomerBtn").on('click',function () {

    $("#DashboardSection").css('display','none');
    $("#ItemSection").css('display','none');
    $("#OrderSection").css('display','none');
    $("#OrderDetailsSection").css('display','none');

    $("#CustomerSection").css('display','inline');




    var time = timer();

    $("#Time").text(time);



});

$("#ItemBtn").on('click',function () {

    $("#DashboardSection").css('display','none');
    $("#CustomerSection").css('display','none');
    $("#OrderSection").css('display','none');
    $("#OrderDetailsSection").css('display','none');

    $("#ItemSection").css('display','inline');

    var time = timer();

    $("#Time2").text(time);

});

$("#OrderBtn").on('click',function () {

    $("#DashboardSection").css('display','none');
    $("#CustomerSection").css('display','none');
    $("#ItemSection").css('display','none');
    $("#OrderDetailsSection").css('display','none');

    $("#OrderSection").css('display','inline');

});

$("#HomeBtn").on('click',function () {

    $("#OrderSection").css('display','none');
    $("#CustomerSection").css('display','none');
    $("#ItemSection").css('display','none');
    $("#OrderDetailsSection").css('display','none');

    $("#DashboardSection").css('display','inline');

});

$("#OrderDetailsBtn").on('click',function () {

    $("#OrderSection").css('display','none');
    $("#CustomerSection").css('display','none');
    $("#ItemSection").css('display','none');
    $("#DashboardSection").css('display','none');

    $("#OrderDetailsSection").css('display','inline');


});

function timer(){


    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var sec = currentTime.getSeconds()

    var time = hours+":"+minutes+":"+sec;

    if(hours > 11){
        time += "PM";
    } else {
        time += "AM";
    }



    return time;
}



