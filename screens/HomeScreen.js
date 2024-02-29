import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('QuizScreen');
                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Start Quiz</Text>
                </TouchableOpacity>
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
    button: {
        backgroundColor: '#db6f16',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 30,
    }
});
