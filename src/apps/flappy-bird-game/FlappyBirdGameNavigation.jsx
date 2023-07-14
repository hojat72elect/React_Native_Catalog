import React, {Component} from 'react'
import {View} from "react-native";
import {GameEngine} from "react-native-game-engine";
import Matter from 'matter-js';
import {Constants} from "./Constants";


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
        const engine = Matter.Engine.create({enableSleeping: false});
        const world = engine.world;
        const bird = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 4, Constants.MAX_HEIGHT / 2, 50, 50);
    }
}


