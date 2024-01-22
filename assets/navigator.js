import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './screen/HomeScreen';
import MovieScreen from './screen/MovieScreen';
import FlagScreen from "./screen/FlagScreen"

const Tab = createBottomTabNavigator();

export function BottomTab() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Movie" component={MovieScreen} />
            <Tab.Screen name="Flag" component={FlagScreen} />

        </Tab.Navigator>
    );
}


export default BottomTab;