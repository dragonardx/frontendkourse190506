
var html = "";
for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
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

function metersToKilometers(distanceInMeters) {
    return distanceInMeters / 1000;
}

function secondsToMinutes(timeInSeconds) {
    return timeInSeconds / 60;
}

function calcKilometersPerHour(distanceInMeters, timeInSec) {
    return metersToKilometers(distanceInMeters) / (secondsToMinutes(timeInSec) / 60);
}