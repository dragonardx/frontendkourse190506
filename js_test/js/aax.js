/** Turime masyvą, kurio kiekvienas elementas yra masyvas iš keturių elementų: a) data kaip tekstinė eilutė,
 * pvz: '2017-07-06 19:59:45' b) automobilio numeris, pvz.: 'LRS123' c) automobilio nuvažiuotas kelias metrais d)
 * automobilio sugaištas laikas sekundėmis Išveskite visus automobilius į html lentelę kartu su suskaičiuotu automobilio greičiu kilometrais per valandą. **/
var arr = [
    ["2017-07-01 14:59:45", "LRS123", "2000", "120"],
    ["2017-07-02 15:59:45", "LRS123", "1000", "120"],
    ["2017-07-03 16:59:45", "LRS123", "15000", "1200"],
    ["2017-07-04 17:59:45", "LRS150", "1020", "135"],];
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