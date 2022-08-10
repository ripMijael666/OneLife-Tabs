import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import Rutinas from './tabScreen/Rutinas';
import Home from './tabScreen/Home';
import Sesiones from './components/Sesiones';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#FFF843',
                tabBarInactiveTintColor:'#fff',
                tabBarActiveBackgroundColor: '#000000',
                tabBarInactiveBackgroundColor:'#000000',
            }}
        >

            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign 
                            name="Home" 
                            size={20}
                            color="#fff" 
                        />
                    ),
                        headerShown: false
                }}
            />
            <Tab.Screen 
                name="Rutinas" 
                component={Rutinas}
                options={{
                    tabBarLabel: 'Rutinas',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign 
                            name="Rutinas" 
                            size={20}
                            color="#fff" 
                        />
                    ),
                        headerShown: false
                }}
            />
            <Tab.Screen 
                name="Sesiones" 
                component={Sesiones}
                options={{
                    tabBarLabel: 'Sesiones',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign 
                            name="Sesiones" 
                            size={20}
                            color="#fff" 
                        />
                    ),
                        headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default MyTabs;