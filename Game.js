import React from 'react'
import PropType from "prop-types"
import { View, StyleSheet, Text } from 'react-native'

function Game(props) {

    const propType = {
        randomNumberCount: PropType.number.isRequired
    }
    state = {
        selectedNumber: []
    }
    randomNumber = Array.from({ length: props.randomNumberCount })
        .map(() => 1 + Math.floor(40 * Math.random()));
    target = randomNumber.slice(0, props.randomNumberCount - 2).reduce((acc, curr) => acc + curr, 0);


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Make a Number</Text>
            <Text style={styles.target}>{target}</Text>
            {randomNumber.map((number, index) => {
                <Text key={index} style={styles.number}>{number}</Text>

            })}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 30
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

    number: {
        color: "white",
        fontSize: 40,
        width: 100,
        height: 100,
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "grey",
        borderRadius: 20,
        marginTop: 50,
        fontWeight: "900",

    }
})
export default Game
