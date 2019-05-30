var carArr = [];
document.getElementById('car-form').addEventListener("submit", function (e) {
    e.preventDefault();
    var dateTime = document.getElementById('date_time').value;
    var plateNr = document.getElementById('plate_nr').value;
    var distanceInMeters = parseInt(document.getElementById('distance_in_meters').value);
    var timeInSec = parseInt(document.getElementById('time_in_sec').value);
    if (dateTime.length <= 0) {
        alert('Empty dateTime');
        return false;
    }
    if (plateNr.length <= 0) {
        alert('Empty plateNr');
        return false;
    }
    if (distanceInMeters) {
        alert('Empty distanceInMeters');
        return false;
    }
    if (distanceInMeters < 0) {
        alert('Please enter distanceInMeters >= 0');
        return false;
    }
    if (timeInSec) {
        alert('Empty timeInSec');
        return false;
    }
    if (timeInSec < 10) {
        alert('TimeInSec to small');
        return false;
    }
    addCar(dateTime, plateNr, distanceInMeters, timeInSec);
    generateTable();
    return false;
});

function addCar(dateTime, plateNr, distanceInMeters, timeInSec) {
    carArr.push([dateTime, plateNr, distanceInMeters, timeInSec]);
}

function generateTable() {
    var html = "";
    for (var i = 0; i < carArr.length; i++) {
        var item = carArr[i];
        var distance = parseInt(item[2]);
        var time = parseInt(item[3]);
        html += '<tr>' +
            '<td>' + item[0] + '</td>' +
            '<td>' + item[1] + '</td>' +
            '<td>' + metersToKilometers(distance) + '</td>' +
            '<td>' + secondsToMinutes(time) + '</td>' +
            '<td>' + calcKilometersPerHour(distance, time).toFixed(2) +
            '</td>' + '</tr>';
    }
    document.getElementById("cars-table-content").innerHTML = html;
}

function metersToKilometers(distanceInMeters) {
    return distanceInMeters / 1000;
}

function secondsToMinutes(timeInSeconds) {
    return timeInSeconds / 60;
}

function calcKilometersPerHour(distanceInMeters, timeInSec) {
    return metersToKilometers(distanceInMeters) / (secondsToMinutes(timeInSec) / 60);
}