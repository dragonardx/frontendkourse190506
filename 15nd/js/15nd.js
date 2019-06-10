"use strict";
//Functions;
createBoard();
allowDrop();

//Board creation row;
function createBoard() {
    var board = document.getElementById("board");
    for (var y = 0; y < 8; y++) {
        var row = document.createElement("div");
        row.className = "row";
        board.appendChild(row);
        //Board creation coll;
        for (var x = 0; x < 8; x++) {
            var square = document.createElement("div");
            square.id = x.toFixed() + y.toString();
            if ((x + y) % 2) {
                square.className = "b-black";
            } else {
                square.className = "b-white";
            }
            // Create Img;
            if ((x + y) % 2 != 0 && y != 3 && y != 4) {
                var img = document.createElement("img");
                if (y < 3) {
                    img.id = "w" + square.id;
                    img.src = "img/white.jpg";
                } else {
                    img.id = "b" + square.id;
                    img.src = "img/black.jpg";
                }
                img.className = "piece";
                img.setAttribute("draggable", "true");
                square.appendChild(img);
            }
            square.setAttribute("draggable", "false");
            row.appendChild(square);
        }
    }
}
function allowDrop() {
    var squares = document.querySelectorAll('.b-black');
    let i = 0;
    while (i < squares.length) {
        var s = squares[i++];
        s.addEventListener('dragover', dragOver, false);
        s.addEventListener('drop', drop, false);
        s.addEventListener('dragenter', dragEnter, false);
        s.addEventListener('dragleave', dragLeave, false);
    }
    let a = 0;
    var piecees = document.querySelectorAll('img');
    while (a < piecees.length) {
        let p = piecees[a++];
        p.addEventListener('dragstart', dragStart, false);
        p.addEventListener('dragend', dragEnd, false);
    }
}
function dragOver(e) {
    e.preventDefault();
    var dragID = e.dataTransfer.getData("text"); //Dragged element;
    var dragPiece = document.getElementById(dragID);
    //Disabling move;
    if (dragPiece) {
        if (e.target.tagName === "DIV" && isValidMove(dragPiece ,e.target, false)) {
            e.dataTransfer.dropEffect = 'move';
        } else {
            e.dataTransfer.dropEffect = 'none';
        }
    }
}
function dragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', e.target.id);
    e.target.classList.add('selected');
}
function dragEnter(e) {
    //Img of dragged element;
    var dragID = e.dataTransfer.getData("text");
    var dragPiece = document.getElementById(dragID);
    if (dragPiece && e.target.tagName === "DIV"
        && isValidMove(dragPiece, e.target, false)) {
        e.target.classList.add('drop');
    }
}
function dragLeave(e) {
    e.target.classList.remove('drop');
}
function dragEnd(e) {
    e.target.classList.remove('selected');
}
function drop(e) {
    e.stopPropagation();
    e.preventDefault();
    if (droppedPiece && e.target.tagName === "DIV" &&
        isValidMove(droppedPiece, e.target, true)) {
        //Getting draggable element img;
        var dropedId = e.dataTransfer.getData('text');
        var droppedPiece = document.getElementById(dropedId);
        //Create new img;
        var newPiece = document.createElement('img');
        newPiece.src = droppedPiece.src;
        newPiece.id = droppedPiece.id.substr(0, 1) + e.target.id;
        newPiece.draggable = true;
        newPiece.classList.add('piece');
        newPiece.addEventListener('dragstart', dragStart, false);
        newPiece.addEventListener('dragend', dragEnd, false);
        e.target.appendChild(newPiece);
        //Removing old img;
        droppedPiece.parentNode.removeChild(droppedPiece);
        //Removing drop effect;
        e.target.classList.remove('drop');
    }
}
function isValidMove(source, target, drop) {
    //Get location and prefix;
    var startPos = source.id.substr(1, 2);
    var prefix = source.id.substr(0, 1);
    //Get location of drop and prefix;
    var endPos = target.id;
    if (endPos.length > 2) {
        endPos = endPos.substr(1, 2);
    }
    //Cant drop on same place;
    if (startPos === endPos) {
        return false;
    }
    //If occupied;
    if (target.childElementCount != 0) {
        return false;
    }
    var  xStart = parseInt(startPos.substr(0, 1));
    var yStart = parseInt(startPos.substr(1, 1));
    var xEnd = parseInt(endPos.substr(0, 1));
    var yEnd = parseInt(endPos.substr(1, 1));
    switch (prefix) {
            //White piece;
        case 'w':
            if (yEnd <= yStart)
                return false; //Cant go back;
            break;
            //Black pieces;
        case 'b':
            if (yStart >= yStart)
                return false;
            break;
    }
    //Only diagonal move;
    if (yStart === yEnd || xStart === xEnd) {
        return false;
    }
    //Only 2 spaces can move;
    if (math.abs(yEnd - yStart) > 2 || Math.abs(xEnd - xStart) >2) {
        return false;
    }
    //If moving 2 spaces. Find place where jumped;
    if (math.abs(xEnd - xStart) === 2) {
        var pos = ((xStart + xEnd) / 2).toString() +
            ((yStart + yEnd) / 2).toString();
        var div = document.getElementById(pos);
        if (div.childElementCount === 0) { //Cant jum empty square
            return false;
        }
        var img = div.children[0]; //Cant jump same color
        if (img.id.substr(0, 1).toLocaleLowerCase() === prefix.toLocaleLowerCase()) {
            return false;
        }
        if (drop) { //Remove jumped piece if ok;
            div.removeChild(img);
        }
    }
    return true;
}