import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const apiUrl = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';

export default class QuizScreen extends React.Component {

    state = {
        currentQuestion: 0,
        isLoaded: false,
        questions: [],
        options: []
    }

    componentDidMount() {
        this.fetchQuestion();
    }

    async fetchQuestion() {
        return fetch(apiUrl).then(result => {
            result.json().then(resultJson => {
                // console.log(resultJson);

                const options = resultJson.result[this.state.currentQuestion].incorrect_answers;
                const correctAnswer = resultJson.result[this.state.currentQuestion].correct_answer;
                options.push(correctAnswer);

                console.log(options);

                this.setState({
                    isLoaded: true,
                    questions: resultJson.results,
                    options
                });
            });
        }).catch(error => console.log(error));
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <ScrollView style={styles.container}>
                    <View style={styles.questionContainer}>

                        <Text style={styles.question}>
                            Q. {
                                this.state.questions[this.state.currentQuestion].question
                            }
                        </Text>

                    </View>


                    <View style={styles.answerContainer}>

                        <TouchableOpacity
                            onPress={() => {

                            }}
                            style={styles.button}
                        >
                            <Text style={styles.answerText}>Answer 1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {

                            }}
                            style={styles.button}
                        >
                            <Text style={styles.answerText}>Answer 2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {

                            }}
                            style={styles.button}
                        >
                            <Text style={styles.answerText}>Answer 3</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {

                            }}
                            style={styles.button}
                        >
                            <Text style={styles.answerText}>Answer 4</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>
            );
        } else {
            console.log('Data is not loaded!');
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#301b75',
    },
    questionContainer: {
        marginHorizontal: 30,
        marginVertical: 20,
    },
    question: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
    },
    answerContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#602bc2',
        padding: 20,
        marginVertical: 5,
        borderRadius: 15
    },
    answerText: {
        fontSize: 18,
        color: '#fff',
    },
});
