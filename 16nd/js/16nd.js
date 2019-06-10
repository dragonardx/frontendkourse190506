var STATE_1 = 1;
var STATE_2 = 2;
var STATE_3 = 3;
var classesByState = [];
classesByState[STATE_1] = null;
classesByState[STATE_2] = 'round';
classesByState[STATE_3] = 'round-2';
var currentState = STATE_1;

function color(event, _this) {
    event.preventDefault();
    switch (currentState) {
        case STATE_1:
            currentState = STATE_2;
            _this.classList.add(classesByState[currentState]);
            break;
        case STATE_2:
            _this.classList.remove(classesByState[currentState]);
            currentState = STATE_3;
            _this.classList.add(classesByState[currentState]);
            break;
        case STATE_3:
            _this.classList.remove(classesByState[currentState]);
            currentState = STATE_1;
            break;
    }
    return false;
}