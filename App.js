import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as SecureStore from 'expo-secure-store';

import {Provider as AuthProvider} from './context/AuthContext.js';
import {Context as AuthContext} from './context/AuthContext';
import {Icon} from 'react-native-elements';


import LogIn from './screens/LogIn';
import CiudadScreen from './screens/CiudadScreen.js';
import Home from './tabScreen/Home.js';
import ListaMedidas from './Medidas/ListaMedidas'
// import SesionesScreen from './screens/SesionesScreen.js';


function Splash() {
  return (
    <View
      style={styles.splash}
    >
      <Image
        source={require('./assets/grupo_7.png')}
      />
    </View>
  );
}

function SignInScreen() {
  const [email, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signIn } = React.useContext(AuthContext);

  return (
    <View>
      < LogIn />
    </View>
  );
}

// function Home() {
//   const { signOut } = React.useContext(AuthContext);
//   return (
//     <View style={styles.Home}>
//       <Text>Home</Text>
//       <StatusBar style="auto" />
//       <Button
//         title="Sign Out"
//         onPress={() => signOut( )}
//       />

//     </View>
//   );
// }

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#1C1B1B',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },

});



const AuthStack = createStackNavigator();

function AuthFlow() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{headerShown: false}}
                        name="CiudadesScreen"
                        component={CiudadScreen}
                      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="LogIn"
        component={SignInScreen}
      />

    </AuthStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function HomeFlow() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#FFF843',
        tabBarInactiveTintColor:'#fff',
        tabBarActiveBackgroundColor: '#000000',
        tabBarInactiveBackgroundColor:'#000000',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
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
            <Icon name={iconName} type="ionicon" size={size} color={color} />
          );
        },
      })}

      >
      <Tab.Screen
        name="Tab1"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
        {/* <Tab.Screen
            name="Tab3"
            component={LogIn}
        /> */}
        {/* <Tab.Screen
            name="Tab3"
            component={SesionesScreen}
        /> */}
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

function App() {

    const {state, restoreToken} = React.useContext(AuthContext);
    console.log(state);

    React.useEffect(() => {
        const bootstrapAsync = async () => {
          let userToken;
          try {
            userToken = await SecureStore.getItemAsync('userToken');
          } catch (e) {
          }
          restoreToken({userToken});
        };
        bootstrapAsync();
      },[]
    );

    return (
        <NavigationContainer>

            <Stack.Navigator
              screenOptions={{
              headerShown: false,
              }} >
              {state.isLoading ? (
                  <Stack.Screen
                      name="Splash"
                      component={Splash}
                  />
              ) : state.userToken === null ? (
                <>
                <Stack.Screen
                  options={{headerShown: false}}
                  name="Auth"
                  component={AuthFlow}
                />
              </>
              ) : (

              <Stack.Screen
                options={{headerShown: false}}
                name="Home"
                component={HomeFlow}
              />


              )}

<Stack.Screen
                  options={{headerShown: false}}
                  name="ListaMedidas"
                  component={ListaMedidas}
                />
                
            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default () => {
    return (
      <AuthProvider>
        <App />
      </AuthProvider>
    );
};