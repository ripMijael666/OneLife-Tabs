import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';


import Home from "./tabScreen/Home";
import Rutinas from "./tabScreen/Rutinas";
import SesionesScreen from "./tabScreen/SesionesList";

const Tab = createBottomTabNavigator();


function Tabs() {
    return (
    <Tab.Navigator
        screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch 
            (route.name) {
                case 'Tab1':
                  iconName = focused 
                    ? 'ios-checkbox' 
                    : 'ios-checkbox-outline';
                  break;
                case 'Tab2':
                  iconName = focused 
                  ? 'ios-add-circle' 
                  : 'ios-add-circle-outline';
                  break;
                case 'Tab3':
                  iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                  break;
            }
          // You can return any component that you like here!
            return (
                <Icon 
                    name={iconName} 
                    type="ionicon" 
                    size={size} 
                    color={color} 
                />
            );
        },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
    >
        <Tab.Screen 
            name="Home" 
            component={Home} 
        />
        <Tab.Screen 
            name="Rutinas" 
            component={Rutinas} 
        />
        <Tab.Screen 
            name="SesionesScreen" 
            component={SesionesScreen} 
        />
    </Tab.Navigator>
);}


export default Tabs;