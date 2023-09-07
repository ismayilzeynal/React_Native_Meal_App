import React from "react";
import GetStarted from './screens/getStarted'
import Home from './screens/Home';
import Recipe from './screens/recipe';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="Recipe"
                    component={Recipe}
                    options={{
                        headerShown: true, 
                        title: 'Ingredients' 
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;