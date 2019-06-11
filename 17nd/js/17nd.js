"use strict";
var accouns = [];

function createAccount() {
    var accName = document.getElementById('create_id').value;
    var accPassword = document.getElementById('create_password').value;
    if (accName < 4 || accPassword < 4) {
        alert('Need to write atleast 4 symbols');
        return false;
    }
    for (var i = 0; i < accouns.length; i++) {
        if (accName === accouns[i].username) {
            alert('same id');
            return false
        }
    }
    accouns.push({username: accName, password: accPassword});
    console.log(accouns);
}

function changePassword() {
    var isIdAvailable = document.getElementById('change_id').value;
    var your_password = document.getElementById('your_password').value;
    var new_password = document.getElementById('new_password').value;
    var new_password2 = document.getElementById('new_password2').value;
    if (isIdAvailable < 4 && your_password < 4 && new_password && new_password2) {
        alert('Need 4 write atleast 4 symbols');
        return false;
    }
    if (new_password < 4 || new_password2 < 4) {
        alert('Need to write atleast 4 symbols');
        return false;
    }
    if (!accountMatch(isIdAvailable, your_password)) {
        alert('account or password wrong');
        return false;
    } else if (!passwordsMatch(new_password, new_password2)) {
        alert('passwords dont match');
        return false;
    } else {
        acc.password = new_password;
        alert('Password Changed');
    }
    console.log(accouns);
}

var acc = null;

function accountMatch(a, b) {
    for (var i = 0; i < accouns.length; i++) {
        acc = accouns[i];
        if (a !== accouns[i].username || b !== accouns[i].password) {
            return false;
        }
        return acc;
    }
}

function passwordsMatch(new_password, new_password2) {
    if (new_password !== new_password2) {
        return false;
    }
    return true;
}