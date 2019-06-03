var PLAYER_1 = 1;
var PLAYER_2 = 2;
var players = {
    PLAYER_1: {
        figure1: {name: 'figure1', status: 0, playerId: PLAYER_1,},
        figure2: {name: 'figure2', status: 0, playerId: PLAYER_1,},
    },
    PLAYER_2: {
        figure1: {name: 'figure1', status: 0, playerId: PLAYER_2,},
        figure2: {name: 'figure2', status: 0, playerId: PLAYER_2,},
    }
};
var lenta = {positionA1: null, positionA2: null, positionA3: null,};
lenta['positionA1'] = player1['figure1'];
lenta.positionA1 = player1.figure1;

var positionElements = document.getElementsByClassName('position');
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