import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const apiUrl = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';

export default class QuizScreen extends React.Component {

    state = {
        currentQuestion: 0,
        isLoaded: false,
        questions: [],
        options: [],
        correctAnswer: '',
        score: 0,
    }

    componentDidMount() {
        this.fetchQuestion();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    async fetchQuestion() {
        return fetch(apiUrl).then(result => {
            result.json().then(resultJson => {
                let options = resultJson.results[this.state.currentQuestion].incorrect_answers;
                const correctAnswer = resultJson.results[this.state.currentQuestion].correct_answer;
                options.push(correctAnswer);
                options = this.shuffleArray(options);
                this.setState({
                    isLoaded: true,
                    questions: resultJson.results,
                    options,
                    correctAnswer
                });
            });
        }).catch(error => console.log(error));
    }

    checkAnswer(selectedAnswer) {
        console.log(this.state.correctAnswer);
        if (this.state.correctAnswer === selectedAnswer) {
            let score = this.state.score;
            score += 1;
            this.setState({ score });
            console.log('Correct!');

        } else {
            console.log('Incorrect!');
        }

        let currentQuestion = this.state.currentQuestion;
        currentQuestion += 1;

        if (currentQuestion < this.state.questions.length) {
            let options = this.state.questions[currentQuestion].incorrect_answers;
            const correctAnswer = this.state.questions[currentQuestion].correct_answer;
            options.push(correctAnswer);
            options = this.shuffleArray(options);

            this.setState({ currentQuestion, options, correctAnswer });
        } else {
            this.props.navigation.navigate('ResultScreen', { score: this.state.score });
        }

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
                                this.checkAnswer(this.state.options[0]);
                            }}
                            style={styles.button}
                        >
                            <Text style={styles.answerText}>{this.state.options[0]}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.checkAnswer(this.state.options[1]);
                            }}
                            style={styles.button}
                        >
                            <Text style={styles.answerText}>{this.state.options[1]}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.checkAnswer(this.state.options[2]);
                            }}
                            style={styles.button}
                        >
                            <Text style={styles.answerText}>{this.state.options[2]}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.checkAnswer(this.state.options[3]);
                            }}
                            style={styles.button}
                        >
                            <Text style={styles.answerText}>{this.state.options[3]}</Text>
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
