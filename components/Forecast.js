import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function Forecast(props) {
    return (
        <View >
            <Text style={styles.big}>{props.main}</Text>
            <Text style={styles.medium}>{props.description}</Text>
            <View style={{marginTop: 20}}>
                <Text>
                    <Text style={styles.big}>{props.temp}</Text>
                    <Text style={styles.medium}>°C</Text>
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    center: {        
        justifyContent: 'space-around',
        padding: 150,
        alignItems: 'center',
    },
    big: {
        marginTop: 25,
        fontSize: 30,
        color: 'white',
        alignItems: 'center'
    },
    medium: {
        marginTop: 20,
        fontSize: 15,
        color: 'white',
    },
});