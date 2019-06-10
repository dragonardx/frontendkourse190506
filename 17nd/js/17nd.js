"use strict";
var account = [{}];
function createAccount() {
    var accName = document.getElementById('create_id').value;
    var accPassword =  document.getElementById('create_password').value;
    for (var i = 0; i <account.length; i++) {
        if (accName === account[i].username) {
            alert('same id');
           return false
        }
    }
    account.push({username: accName, password: accPassword});
    console.log(account);
}
function changePassword() {
    var isIdAvailable = document.getElementById('change_id').value;
    var your_password =  document.getElementById('your_password').value;
    var your_password2 =  document.getElementById('your_password2').value;
    var new_password2 =  document.getElementById('new_password').value;
    if (!accountMatch(isIdAvailable,your_password)) {
        alert('account or password wrong');
        return false;
    }
    if (!passwordsMatch(your_password, your_password2)) {
        alert('passwords dont match');
        return false;
    }
        account.push({ password: new_password2});
        alert('password changed');
        console.log(account);
}
function accountMatch(a, b) {
    for (let i = 0; i < account.length; i++) {
        if (a !== account[i].username || b !== account[i].password) {
            return false;
        }
    }
}
function passwordsMatch(a, b) {
    if (a !== b) {
        return false;
    }
}