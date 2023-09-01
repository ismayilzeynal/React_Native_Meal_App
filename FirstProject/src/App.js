import React from "react";
import { StyleSheet, View } from "react-native";
import Home from './components/Home';
import GetStarted from './screens/getStarted'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;