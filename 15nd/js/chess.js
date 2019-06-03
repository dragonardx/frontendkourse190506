function createBoard() {
    var board = document.getElementById('board');

    for (var y = 0; y < 8; y++) {
        var row = document.createElement('div');
        row.className = 'row';
        board.appendChild(row);
        for (var x = 0; x < 8; x++) {
            var square = document.createElement('div');
            square.id = x.toFixed() + y.toString();
            if ((x + y) % 2) {
                square.className = 'bblack';
            } else {
                square.className = 'bwhite';
            }
            if ((x + y) % 2 != 0 && y != 3 && y != 4) {
                var img = document.createElement('img');
                if (y < 3) {
                    img.id = 'w' +square.id;
                    img.src = 'img/white.png';
                } else {
                    img.id = 'b' + square.id;
                    img.src = 'img/black.png';
                }
                img.className = 'piece';
                img.setAttribute('draggable', 'true');
                square.appendChild(img);
            }
            square.setAttribute('draggable', 'false');
            row.appendChild(square);
        }
    }
}
createBoard();

function allowDrop() {
    var square = document.querySelectorAll('.bblack');
    var i = 0;
    while (i < square.length) {
        var s = square[i++];
        s.addEventListener('dragover', dragOver, false);
        s.addEventListener('drop', drop, false);
        s.addEventListener('dragenter', dragEnter, false);
        e.addEventListener('dragleave', dragLeave, false);
    }
    i = 0;
    var pieces = document.querySelectorAll('img');
    while (i <square.length) {
        var p = pieces[i++];
        p.addEventListener('dragstart', dragStart, false);
        p.addEventListener('dragend', dragEnd, false);
    }
}
function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

allowDrop();

function dragStart(e) {
    e.dataTransfer.effectAllowed = 'all';
    e.dataTransfer.setData('text/plain',e.target.id);
    e.target.classList.add('selected');
}
function dragEnd(e) {
    e.target.classList.remove('selected');
}
function drop(e) {
}
function dragEnter(e) {
    e.target.classList.add('drop');
}
function dragLeave(e) {
    e.target.classList.remove('drop');
}