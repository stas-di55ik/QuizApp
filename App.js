import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        <Stack.Screen name="QuizScreen" component={QuizScreen} />

        <Stack.Screen name="ResultScreen" component={ResultScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}