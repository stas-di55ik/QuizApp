import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class ResultScreen extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.buttonText}>{this.props.route.params.score} / 10</Text>

                {/* <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('HomeScreen', { score: this.state.score });
                    }}
                >
                    <Text style={styles.buttonText}>Again</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#301b75',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 50,
    }
});
