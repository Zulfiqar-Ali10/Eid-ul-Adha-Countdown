
function countDown() {

    var eidDate = new Date('2024-07-21');

    var currentDate = new Date();

    var msPerDay = 1000 * 60 * 60 * 24;

    var timeDiff = eidDate.getTime() - currentDate.getTime();


    var seconds = Math.floor(timeDiff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var months = Math.floor(days / 30);


    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

countDown();