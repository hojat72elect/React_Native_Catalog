import React, {Component} from 'react'
import {View} from "react-native";
import {GameEngine} from "react-native-game-engine";
import Matter from 'matter-js';
import {Constants} from "./Constants";
import {Bird} from "./Bird";
import {Physics} from "./Physics";
import {Wall} from "./Wall";

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
        const floor = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 2, Constants.MAX_HEIGHT - 25, Constants.MAX_WIDTH, 50, {isStatic: true});
        const ceiling = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 2, 25, Constants.MAX_WIDTH, 50, {isStatic: true});


        console.log("type of bird is :", typeof bird);
        // Add the bird to our world
        Matter.Composite.add(world, [bird, floor]);

        return {
            physics: {engine: engine, world: world},
            bird: {body: bird, size: [50, 50], color: 'red', renderer: Bird},
            floor: {body: floor, size: [Constants.MAX_WIDTH, 50], color: 'green', renderer: Wall},
            ceiling: {body: ceiling, size: [Constants.MAX_WIDTH, 50], color: 'green', renderer: Wall},
        }
    }
}


