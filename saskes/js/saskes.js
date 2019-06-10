
var PLAYER_1 = 1;
var PLAYER_2 = 2;
var players = {
    PLAYER_1: {
        figure1: {name: 'figure1', status: 0, playerId: PLAYER_1,},
        figure2: {name: 'figure2', status: 0, playerId: PLAYER_1,},
        figure3: {name: 'figure3', status: 0, playerId: PLAYER_1,},
        figure4: {name: 'figure4', status: 0, playerId: PLAYER_1,},
        figure5: {name: 'figure5', status: 0, playerId: PLAYER_1,},
        figure6: {name: 'figure6', status: 0, playerId: PLAYER_1,},
        figure7: {name: 'figure7', status: 0, playerId: PLAYER_1,},
        figure8: {name: 'figure8', status: 0, playerId: PLAYER_1,},
        figure9: {name: 'figure9', status: 0, playerId: PLAYER_1,},
        figure10: {name: 'figure10', status: 0, playerId: PLAYER_1,},
        figure11: {name: 'figure11', status: 0, playerId: PLAYER_1,},
        figure12: {name: 'figure12', status: 0, playerId: PLAYER_1,},
    },
    PLAYER_2: {
        figure1: {name: 'figure13', status: 0, playerId: PLAYER_2,},
        figure2: {name: 'figure14', status: 0, playerId: PLAYER_2,},
        figure3: {name: 'figure15', status: 0, playerId: PLAYER_2,},
        figure4: {name: 'figure16', status: 0, playerId: PLAYER_2,},
        figure5: {name: 'figure17', status: 0, playerId: PLAYER_2,},
        figure6: {name: 'figure18', status: 0, playerId: PLAYER_2,},
        figure7: {name: 'figure19', status: 0, playerId: PLAYER_2,},
        figure8: {name: 'figure20', status: 0, playerId: PLAYER_2,},
        figure9: {name: 'figure21', status: 0, playerId: PLAYER_2,},
        figure10: {name: 'figure22', status: 0, playerId: PLAYER_2,},
        figure11: {name: 'figure23', status: 0, playerId: PLAYER_2,},
        figure12: {name: 'figure24', status: 0, playerId: PLAYER_2,},
    }
};

var blackBox = document.getElementsByClassName('black_box');
for (var i = 0; i < blackBox.length; i++) {
    var elm = blackBox[i];

    elm.addEventListener('dragover', function (e) {
        allowDrop(e, this.getAttribute('id'));
    });

    elm.addEventListener('drop', function (e) {
        drop(e);
    });
}
function dragStar(e) {
    dragStar.preventDefault();
    document.getElementById(e)
}
function isdropAlowed() {
    
}
var isdropAlowed = false;
function drop(e) {
    drop.preventDefault();
    if (!isdropAlowed) {
        return false;
    }
    var data = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(data));
    }