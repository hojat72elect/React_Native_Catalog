import {Constants} from "./Constants";

export const GameLoop = (entities, {touches, dispatch, events}) => {
    let head = entities.head;

    if (events.length) {
        for (let i = 0; i < events.length; i++) {
            if (events[i].type === "move-up" && head.ySpeed !== 1) {
                head.ySpeed = -1;
                head.xSpeed = 0;
            } else if (events[i].type === "move-down" && head.ySpeed !== -1) {
                head.ySpeed = 1;
                head.xSpeed = 0;
            } else if (events[i].type === "move-left" && head.xSpeed !== 1) {
                head.xSpeed = -1;
                head.ySpeed = 0;
            } else if (events[i].type === "move-right" && head.xSpeed !== -1) {
                head.xSpeed = 1;
                head.ySpeed = 0;
            }
        }
    }

    head.nextMove -= 1;
    if (head.nextMove === 0) {
        head.nextMove = head.updateFrequency;

        if (
            head.position[0] + head.xSpeed < 0 ||
            head.position[0] + head.xSpeed >= Constants.GRID_SIZE ||
            head.position[1] + head.ySpeed < 0 ||
            head.position[1] + head.ySpeed >= Constants.GRID_SIZE
        ) {
            // game over
            dispatch({type: "game-over"})

        } else {
            head.position[0] += head.xSpeed;
            head.position[1] += head.ySpeed;
        }
    }

    return entities;
}
