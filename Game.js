import React from 'react'
import PropType from "prop-types"
import { View, StyleSheet, Text } from 'react-native'
import Markup from './Markup'

class Game extends React.Component {
    static propType = {
        randomNumberCount: PropType.number.isRequired,
        isDisabled: PropType.bool.isRequired,
        onPress: PropType.func.isRequired
    }
    state = {
        selectedNumber: []
    };
    randomNumber = Array.from({ length: this.props.randomNumberCount }).map(() => 1 + Math.floor(40 * Math.random()));
    target = this.randomNumber.slice(0, this.props.randomNumberCount - 2).reduce((acc, curr) => acc + curr, 0);

    isNumberSelected = (numberIndex) => {
        return this.state.selectedNumber.indexOf(numberIndex) >= 0;
    }

    selectNumber = (numberIndex) => {
        this.setState((prevState) => ({
            selectedNumber: [...prevState.selectedNumber, numberIndex]
        }))
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Add Numbers</Text>
                <Text style={styles.target}>{this.target}</Text>
                <Text style={styles.sum}>Sum Area</Text>
                <View style={styles.numberConatiner}>
                    {this.randomNumber.map((number, index) =>
                        <Markup key={index}
                            id={index}
                            number={number}
                            isDisabled={this.isNumberSelected(index)}
                            onPress={this.selectNumber} />
                    )}
                </View>
                <Text style={styles.time}>Seconds Left</Text>
                <Text style={styles.countdown}> 10 </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingVertical: 50,
        paddingHorizontal: 40
    },
    heading: {
        color: "white",
        textAlign: "center",
        fontSize: 40,
        marginBottom: 30,
    },
    target: {
        color: "white",
        fontSize: 40,
        textAlign: "center",
        backgroundColor: "grey",
        borderRadius: 50,
        fontWeight: "900",
        letterSpacing: 3,
        paddingVertical: 10
    },
    sum: {
        color: "green",
        fontSize: 20,
        textAlign: "center",
        backgroundColor: "#ddd",
        borderRadius: 50,
        fontWeight: "900",
        letterSpacing: 3,
        paddingVertical: 10,
        marginTop: 50
    },
    numberConatiner: {
        flexWrap: 'wrap',
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    time: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        marginTop: -50
    },
    countdown: {
        color: "red",
        marginVertical: 10,
        fontSize: 60,
        fontWeight: "bold",
        textAlign: "center",
    }



})
export default Game
