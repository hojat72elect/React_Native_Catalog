import {Component} from "react";
import {Alert, StyleSheet, TouchableOpacity, View} from "react-native";
import {Constants} from "./Constants";
import {GameEngine} from "react-native-game-engine";
import {Head} from "./Head";
import {GameLoop} from "./GameLoop";
import {Food} from "./Food";

export class SnakeGame extends Component {
    constructor(props) {
        super(props);
        this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
        this.engine = null;
        this.state = {
            running: true
        };
    }

    onEvent = (e) => {
        if (e.type === "game-over") {
            Alert.alert("Game Over");
            this.setState({
                running: false
            })
        }
    }

    randomBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render() {
        return (
            <View style={styles.container}>
                <GameEngine
                    ref={(ref) => {
                        this.engine = ref
                    }}
                    style={{
                        width: this.boardSize,
                        height: this.boardSize,
                        flex: null,
                        backgroundColor: '#ffffff'
                    }}
                    entities={{
                        head: {
                            position: [0, 0],
                            xSpeed: 1,
                            ySpeed: 0,
                            size: Constants.CELL_SIZE,
                            updateFrequency: 10,
                            nextMove: 10,
                            renderer: <Head/>
                        },
                        food: {
                            position: [this.randomBetween(0, Constants.GRID_SIZE - 1), this.randomBetween(0, Constants.GRID_SIZE - 1)],
                            size: Constants.CELL_SIZE,
                            renderer: <Food/>
                        }
                    }}
                    systems={[GameLoop]}
                    onEvent={this.onEvent}
                    running={this.state.running}
                />
                <View style={{
                    width: 300,
                    height: 300,
                    flexDirection: 'column'
                }}>
                    <View style={styles.controlRow}>
                        <TouchableOpacity onPress={() => {
                            this.engine.dispatch({type: "move-up"});
                        }}>
                            <View style={styles.control}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlRow}>
                        <TouchableOpacity onPress={() => {
                            this.engine.dispatch({type: "move-left"});
                        }}>
                            <View style={styles.control}/>
                        </TouchableOpacity>
                        <View style={{
                            width: 100,
                            height: 100,
                            backgroundColor: null
                        }}/>
                        <TouchableOpacity onPress={() => {
                            this.engine.dispatch({type: "move-right"});
                        }}>
                            <View style={styles.control}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlRow}>
                        <TouchableOpacity onPress={() => {
                            this.engine.dispatch({type: "move-down"});
                        }}>
                            <View style={styles.control}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    controlRow: {
        width: 300,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    control: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    },
})
