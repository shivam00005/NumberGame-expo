import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import PropType from "prop-types";

class Markup extends React.Component {
    static propType = {
        number: PropType.number.isRequired,
        isDisabled: PropType.bool.isRequired,
        onPress: PropType.func.isRequired
    }
    handlerPress = () => {
        if (this.props.isDisabled) {
            return;
        } else {
            this.props.onPress(this.props.id)
        }
    }
    render() {
        return (
            <TouchableOpacity onPress={this.handlerPress} >
                <Text style={[styles.number, this.props.isDisabled && styles.disabled]}>
                    <Text style={styles.span}>{this.props.number}</Text>
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    number: {
        fontSize: 40,
        width: 80,
        height: 80,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        textAlign: 'center',
        backgroundColor: "grey",
        borderRadius: 20,
        marginTop: 40,
        fontWeight: "900",

    },
    span: {
        lineHeight: 80
    },
    disabled: {
        backgroundColor: "green",
        color: "white",
        opacity: 0.7
    }


})

export default Markup
