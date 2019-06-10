"use strict";

function createBoard() {
    var board = document.getElementById("board");
    for (var y = 0; y < 8; y++) {
        var row = document.createElement("div");
        row.className = "row";
        board.appendChild(row);
        for (var x = 0; x < 8; x++) {
            var square = document.createElement("div");
            square.id = x.toFixed() + y.toString();
            if ((x + y) % 2) {
                square.className = "b-black";
            } else {
                square.className = "b-white";
            }
            square.setAttribute("draggable", "false");
            row.appendChild(square);
        }
    }
}
createBoard();