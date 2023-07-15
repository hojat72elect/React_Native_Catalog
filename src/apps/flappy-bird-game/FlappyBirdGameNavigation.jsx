import React, {Component} from 'react'
import {View} from "react-native";
import {GameEngine} from "react-native-game-engine";
import Matter from 'matter-js';
import {Constants} from "./Constants";
import {Bird} from "./Bird";
import {Physics} from "./Physics";
import {Wall} from "./Wall";

function randomBetween(min, max) {
    return Math.floor(Math.random() * (min - max + 1) + min);
}

function generatePipes() {
    const topPipeHeight = randomBetween(100, (Constants.MAX_HEIGHT / 2) - 100);
    const bottomPipeHeight = Constants.MAX_HEIGHT - topPipeHeight - Constants.GAP_SIZE;
    let sizes = [topPipeHeight, bottomPipeHeight];

    if (Math.random() < 0.5) {
        sizes = sizes.reverse();
    }
    return sizes;
}

export class FlappyBirdGameNavigation extends Component {

    constructor(props) {
        super(props);
        this.gameEngine = null;
        this.entities = this.setupWorld();
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#ffffff'
            }}>
                <GameEngine
                    ref={(ref) => {
                        this.gameEngine = ref;
                    }}
                    style={{}}
                    systems={[Physics]}
                    entities={this.entities}
                />

            </View>
        )
    }

    /**
     *
     * sets up the matter JS which is our physics engine.
     */
    setupWorld() {
        // the physics engine
        const engine = Matter.Engine.create({enableSleeping: false});
        // A Matter.Composite instance that holds all the physical entities in our world.
        const world = engine.world;
        const bird = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 4, Constants.MAX_HEIGHT / 2, 50, 50);
        const floor = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 2, Constants.MAX_HEIGHT - 100, Constants.MAX_WIDTH, 50, {isStatic: true});
        const ceiling = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 2, 25, Constants.MAX_WIDTH, 50, {isStatic: true});


        const [pipe1Height, pipe2Height] = generatePipes();
        const pipe1 = Matter.Bodies.rectangle(Constants.MAX_WIDTH - (Constants.PIPE_WIDTH / 2), pipe1Height / 2, Constants.PIPE_WIDTH, pipe1Height, {isStatic: true});
        const pipe2 = Matter.Bodies.rectangle(Constants.MAX_WIDTH - (Constants.PIPE_WIDTH / 2), Constants.MAX_HEIGHT-(pipe2Height / 2), Constants.PIPE_WIDTH, pipe2Height, {isStatic: true});

        const [pipe3Height, pipe4Height] = generatePipes();
        const pipe3 = Matter.Bodies.rectangle(Constants.MAX_WIDTH*2 - (Constants.PIPE_WIDTH / 2), pipe1Height / 2, Constants.PIPE_WIDTH, pipe1Height, {isStatic: true});
        const pipe4 = Matter.Bodies.rectangle(Constants.MAX_WIDTH - (Constants.PIPE_WIDTH / 2), Constants.MAX_HEIGHT-(pipe2Height / 2), Constants.PIPE_WIDTH, pipe2Height, {isStatic: true});

        // Add the bird to our world
        Matter.Composite.add(world, [bird, floor, ceiling]);

        return {
            physics: {engine: engine, world: world},
            bird: {body: bird, size: [50, 50], color: 'red', renderer: Bird},
            floor: {body: floor, size: [Constants.MAX_WIDTH, 50], color: 'green', renderer: Wall},
            ceiling: {body: ceiling, size: [Constants.MAX_WIDTH, 50], color: 'green', renderer: Wall},
        }
    }
}


