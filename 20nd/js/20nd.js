"use strict";
var carsArr = [];
var itemsIdCounter = 1;
document.getElementById('save_new_entry').addEventListener('click', function (e) {
    e.preventDefault();
    addNewCarItem();
    return false;
});

function addNewCarItem() {
    var carNR = document.getElementById('car_plate');
    var date = document.getElementById('data');
    var distance = document.getElementById('distance');
    var time = document.getElementById('time');
    var item = {
        id: itemsIdCounter,
        carNumber: carNR.value,
        date: date.value,
        distance: distance.value,
        duration: time.value,
        calcKmPerHour: function () {
            return (this.distance / 1000) / (this.duration / 3600)
        },
    };
    itemsIdCounter++;
    carsArr.push(item);
    generateTable();
}

function generateTable() {
    var html = "";
    for (var i = 0; i < carsArr.length; i++) {
        var item = carsArr[i];
        html += '<tr data-car-id="'
            + item.id + '">' + '<td>'
            + item.carNumber + '</td>' + '<td>' + item.date
            + '</td>' + '<td>' + item.distance + '</td>'
            + '<td>' + item.duration + '</td>' + '<td>' + item.calcKmPerHour()
            + '</td>' + '<td><button class="btn btn-primary change-car" data-car-item-id="'
            + item.id + '">Change</button></td>'
            + '<td><button class="btn btn-danger delete-car" data-car-item-id="'
            + item.id + '">Delete</button></td>' + '</tr>';
    }
    document.getElementById('table').getElementsByTagName('tbody')[0].innerHTML = html;
    addEventListeners();
    console.log(carsArr);
}

function addEventListeners() {
    // Handle change events
    var changeCarElements = document.getElementsByClassName("change-car");
    for (let i = 0; i < changeCarElements.length; i++) {
        let elm = changeCarElements[i];
        elm.addEventListener('click', function (e) {
            e.preventDefault();
            handleChange(this.getAttribute("data-car-item-id"));
            return false;
        });
    }        // Handle delete events
    var deleteCarElements = document.getElementsByClassName("delete-car");
    for (let i = 0; i < deleteCarElements.length; i++) {
        let elm = deleteCarElements[i];
        elm.addEventListener('click', function (e) {
            e.preventDefault();
            handleDelete(this.getAttribute("data-car-item-id"), elm);
            return false;
        });
    }
}

function findMyCarItem(id) {
    var carItem = null;
    for (var i = 0; i < carsArr.length; i++) {
        var item = carsArr[i];
        if (item.id === id) {
            carItem = item;
            break;
        }
    }
    return carItem;
}
function handleDelete(id, elm) {
    var carItem = findMyCarItem(id);
    if (confirm('Do you want to remove this?')) {
        let p = elm.parentNode.parentNode;
        p.parentNode.removeChild(p);
        carsArr.splice(carItem);
        console.log(carsArr);
    }
}
function handleChange(id) {

}