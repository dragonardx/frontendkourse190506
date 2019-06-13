"use strict";

var carObject = [];

document.getElementById('save_new_entry').addEventListener('click', function (e) {
    e.preventDefault();
    createObj();
    return false;
});
function createObj() {
    var car_plate = document.getElementById('car_plate').value;
    var data = document.getElementById('data').value;
    var distance = document.getElementById('distance').value;
    var time = document.getElementById('time').value;
    var kmH = kilometerPerHour(distance, time);
    carObject.push({car_plate: car_plate, data: data, distance: distance, time: time,kmh: kmH});
    createRow();
}
function createRow() {
    for (let i = 0; i < carObject.length; i++) {
        var item = carObject[i];
    }
    var table = document.getElementById('table');
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = item.car_plate;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = item.data;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = item.distance;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = item.time;
    var cell5 = row.insertCell(4);
    cell5.innerHTML = item.kmh;
    var cell6 = row.insertCell(5);
    cell6.innerHTML = '<button id="edit">Edit</button>';
    var cell7 = row.insertCell(6);
    cell7.innerHTML = '<button id="edit">Delete</button>';
}

var index, table = document.getElementById('table');
for(let i = 1; i < table.rows.length; i++)
{
    table.rows[i].cells[6].onclick = function() {
        var c = confirm("do you want to delete this row");
        if(c === true) {
            index = this.parentElement.rowIndex;
            table.deleteRow(index);
        }

        console.log(index);
    };

}
function kilometerPerHour(distance, time) {
    var kmH = (distance / 1000) / (time / 120);
    return kmH;
}