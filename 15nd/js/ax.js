
var board = [
    [-1, 1, -1, 1, -1, 1, -1, 1],
    [1, -1, 1, -1, 1, -1, 1, -1],
    [-1, 1, -1, 1, -1, 1, -1, 1],
    [0, -1, 0, -1, 0, -1, 0, -1],
    [-1, 0, -1, 0, -1, 0, -1, 0],
    [2, -1, 2, -1, 2, -1, 2, -1],
    [-1, 2, -1, 2, -1, 2, -1, 2],
    [2, -1, 2, -1, 2, -1, 2, -1]
];

var positionElements = document.getElementsByClassName('black_box');
for (var i = 0; i < positionElements; i++) {
    positionElements[i].addEventListener('drop', function (e) {
        var droppedElmId = e.dataTransfer.getData("text");
        var droppedElm = document.getElementById(droppedElmId);
        var playerId = droppedElm.getAttribute('data-player-id');
        var figureId = droppedElm.getAttribute('data-figure-id');
        var positionId = this.getAttribute('data-position-id');
        var position = lenta[positionId];
        if (!position) {
            lenta[positionId] = players[playerId][figureId];
        } else if (position.playerId === playerId) {
            return false;
        } else if (position.playerId !== playerId) {
            position.status = 1;
        }
    });
}


var players = {
    PLAYER_1: {
        figure1: {name: 'figure1', status: 0, playerId: PLAYER_1,},
        figure2: {name: 'figure2', status: 0, playerId: PLAYER_1,},
        figure3: {name: 'figure1', status: 0, playerId: PLAYER_1,},
        figure4: {name: 'figure1', status: 0, playerId: PLAYER_1,},
        figure5: {name: 'figure1', status: 0, playerId: PLAYER_1,},
        figure6: {name: 'figure1', status: 0, playerId: PLAYER_1,},
        figure7: {name: 'figure1', status: 0, playerId: PLAYER_1,},
        figure8: {name: 'figure1', status: 0, playerId: PLAYER_1,},
        figure9: {name: 'figure1', status: 0, playerId: PLAYER_1,},
        figure10: {name: 'figure1', status: 0, playerId: PLAYER_1,},
        figure11: {name: 'figure1', status: 0, playerId: PLAYER_1,},
        figure12: {name: 'figure1', status: 0, playerId: PLAYER_1,},
    },
    PLAYER_2: {
        figure1: {name: 'figure1', status: 0, playerId: PLAYER_2,},
        figure2: {name: 'figure2', status: 0, playerId: PLAYER_2,},
        figure3: {name: 'figure1', status: 0, playerId: PLAYER_2,},
        figure4: {name: 'figure1', status: 0, playerId: PLAYER_2,},
        figure5: {name: 'figure1', status: 0, playerId: PLAYER_2,},
        figure6: {name: 'figure1', status: 0, playerId: PLAYER_2,},
        figure7: {name: 'figure1', status: 0, playerId: PLAYER_2,},
        figure8: {name: 'figure1', status: 0, playerId: PLAYER_2,},
        figure9: {name: 'figure1', status: 0, playerId: PLAYER_2,},
        figure10: {name: 'figure1', status: 0, playerId: PLAYER_2,},
        figure11: {name: 'figure1', status: 0, playerId: PLAYER_2,},
        figure12: {name: 'figure1', status: 0, playerId: PLAYER_2,},
    }
};

