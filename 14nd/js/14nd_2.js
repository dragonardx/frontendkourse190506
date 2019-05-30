var car = ["2017-07-06", "LRS123", 5000, 118,];
document.getElementById('date').innerHTML = car[0];
document.getElementById('number').innerHTML = car[1];
document.getElementById('total').innerHTML = car[2];
document.getElementById('time').innerHTML = car[3];

function calKm () {
    var km = (car[2]/1000)/(car[3]/120);
    return km;
}

document.getElementById('kmh').innerHTML = calKm().toFixed(0);