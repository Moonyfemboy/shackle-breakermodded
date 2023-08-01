//0: open-area, 1: wall, 2: player-spawn 
const smallLayout1 = {
    height: 9,
    width: 9,
    layout: 
    [
        1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 2, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 1, 1, 1, 0, 0, 1,
        1, 0, 0, 1, 1, 1, 0, 0, 1,
        1, 0, 0, 1, 1, 1, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
}

const smallLayout2 = {
    height: 9,
    width: 9,
    layout: 
    [
        1, 1, 1, 1, 0, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 1, 0, 1, 0, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 0, 0, 2, 0, 0, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 0, 1, 0, 1, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
}

const smallLayout3 = {
    height: 9,
    width: 9,
    layout: 
    [
        1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 1, 1, 1, 0, 0, 1,
        1, 0, 0, 1, 1, 1, 0, 0, 1,
        1, 0, 0, 1, 1, 1, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
}

const mediumLayout1 = {
    height: 9,
    width: 18,
    layout: 
    [
        1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
        1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1
    ]
}

let layoutTemp;
switch(Math.floor(Math.random()*3)){ //will never be 2 (must be multiplied by 3)
    case 0: 
        layoutTemp = smallLayout1;
        break;
    case 1:
        layoutTemp = smallLayout2;
        break;
    case 2:
        layoutTemp = smallLayout3;
        break;
    default:
        break;
}

export const layout = layoutTemp;

