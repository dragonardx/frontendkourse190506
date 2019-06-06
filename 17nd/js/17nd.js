var account = [];
function create() {
    account.push(document.getElementById('create_password').value);
    alert('Password Created');
}
function change() {
    var a = document.getElementById('create_password').value;
    var b = document.getElementById('change_password').value;
    for (var i = 0; i < account.length; i++) {
        var check = account[i];
        if (check === a) {
            check= b;
            alert('Password Changed');
            break
        } else {
            alert('Wrong Password');
        }
    }
}