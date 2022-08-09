import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';


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
        </Tab.Navigator>
    )
}