var data1 = [["3", "4", "5"], ["8", "2", "10"], ["4", "4", "4"], ["6", "7", "6"]];
var data2 = ["Lygiakraštis", "Lygiašonis", "Statusis", "Įvairiakraštis", "Ne trikampis"];
var data1Text = "";
var type = "";

function ax() {
    for (var i = 0; i < data1.length; i++) {
        var item = data1[i];

        function calc(item

        [0], item[1], item[2]
    )
        {
            document.getElementById('trikampiai').innerHTML = data1Text;
            document.getElementById("type").innerHTML = triangle(item[0], item[1], item[2]);
            document.getElementById("answer").innerHTML = triArea(item[0], item[1], item[2]);
            data1Text += '<tr>' +
                '<td>' + item[0] + '</td>' +
                '<td>' + item[1] + '</td>' +
                '<td>' + item[2] + '</td>' +
                '<td>' + type + '</td>' +
                '</td>' + '</tr>';
        }
    }
}

// END //
function triangle(a, b, c) {
    if ((a < b + c) && (b < c + a) && (c < b + a)) {
        if ((a === b) && (b === c) && (a === c)) {
            type = "Lygiakraštis";
        } else if (a === b || b === c || c === a) {
            type = "Lygiašonis";
        } else if ((a * a + b * b === c * c) || (b * b + c * c === a * a) || (c * c + a * a === b * b)) {
            type = "Statusis";
        } else {
            type = "Įvairiakraštis";
        }
    } else {
        type = "Ne trikampis";
    }
    return type;
}

function triArea(a, b, c) {
    var s = Math.sqrt(((a + b + c) / 2) * ((a + b + c) / 2 - a) * ((a + b + c) / 2 - b) * ((a + b + c) / 2 - c));
    if (type === "Ne trikampis") {
        s = 0;
    }
    return s;
}