import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Forecast(props) {
    return (
        <View >
            <Text style={styles.big}>{props.main}</Text>
            <Text style={styles.big}>{props.description}</Text>
            <View>
                <Text>{props.temp}</Text>
                <Text>°C</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.crete({
    big:{
        marginTop: 20,
        fontSize: 30,
        color: 'white',
    },
    center:{
        justifyContent: 'space-ardund',
        allignItems: 'center'
    },
    medium: {
        marginTop: 20,
        fontSize: 15,
    },
});