import React from "react";
import { StyleSheet, View } from "react-native";
import Home from './components/Home';
import Landing from './components/Landing';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
    return (
        // <View style={styles.Card}>
        //     <Home/>
        //     {/* <Landing/> */}
        // </View>

        <NavigationContainer>
            <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="GetStarted" component={Landing} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;

