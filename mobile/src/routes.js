import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Vacinas from './pages/Vacinas';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name= "Vacinas" component={Vacinas} />
                <AppStack.Screen name= "Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

