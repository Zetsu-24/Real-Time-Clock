
function updateTime() {
    var dateinfo = new Date();

    /* time */
    var hr,
        _min = (dateinfo.getMinutes() < 10) ? "0" + dateinfo.getMinutes() : dateinfo.getMinutes(),
        sec = (dateinfo.getSeconds() < 10) ? "0" + dateinfo.getSeconds() : dateinfo.getSeconds(),
        ampm = (dateinfo.getHours() >= 12) ? "PM" : "AM";

    // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
    if (dateinfo.getHours() == 0) {
        hr = 12;
    } else if (dateinfo.getHours() > 12) {
        hr = dateinfo.getHours() - 12;
    } else {
        hr = dateinfo.getHours();
    }

    var currentTime = hr + ":" + _min + ":" + sec;

    // print time
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;
    document.getElementsByClassName("ampm")[0].innerHTML = ampm;

    /* date */
    var dow = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
        month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
    day = dateinfo.getDate();

    var date = dateinfo.getDate();
    var yr = dateinfo.getFullYear();

    // store date
    var currentDate = date + "-" + month[dateinfo.getMonth()] + "-" + yr;


    var month = dateinfo.getMonth();




    document.getElementsByClassName("date")[0].innerHTML = currentDate;
};

// print time and date once, then update them every second
updateTime();
setInterval(function () {
    updateTime()
}, 1000);