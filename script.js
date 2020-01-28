var countDownDate = new Date("Mar 9, 2020").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days-anim").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days-anim").innerHTML = "Oops too late!";
    }
}, 1000);

var newCountDownDate = new Date("Apr 23, 2020").getTime();

var y = setInterval(function () {

    var now = new Date().getTime();
    var distance = newCountDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days-anim1").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(y);
        document.getElementById("days-anim1").innerHTML = "Oops too late!";
    }
}, 1000);

function saveEdits() {
    var editElem = document.getElementById("edit");
    var userVersion = editElem.innerHTML;
    localStorage.userEdits = userVersion;
}

function checkEdits() {
    if (localStorage.userEdits != null)
        document.getElementById("edit").innerHTML = localStorage.userEdits;
}