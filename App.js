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
import IdUsuario from './screens/IdUsuario.js';
import ListaMedidas from './Medidas/ListaMedidas';
import FlatListScreen from './screens/FlatListScreen.js';
import RutinasScreen from './screens/RutinasScreen.js';
import PdfScreen from './screens/PdfScreen.js';
import Clases from './tabScreen/Clases.js';

// import Rutinas from './tabScreen/Rutinas.js';
// import ListRutinas from './components/ListRutinas.js';
// import SesionesProps from './Sesiones/SesionesProps.js';
// import SesionesScreen from './screens/SesionesScreen.js';
// import PlanMensual from './Sesiones/PlanMensual.js';
// import PlanesMensuales from './Sesiones/PlanesMensuales.js';
// import ComprarPlan from './Sesiones/ComprarPlan.js';

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
            case 'Home':
              iconName = focused
                ? 'ios-checkbox'
                : 'ios-checkbox-outline';
              break;
            case 'Rutinas':
              iconName = focused
              ? 'ios-add-circle'
              : 'ios-add-circle-outline';
              break;
            case 'Sesiones':
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              break;
            case 'Clases':
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
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Rutinas"
        component={FlatListScreen}
        options={{
          headerShown: false,
        }}
      />
        <Tab.Screen
        name="Clases"
        component={Clases}
        options={{
          headerShown: false,
        }}
        />
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

            <Stack.Navigator>
              {state.isLoading ? (
                  <Stack.Screen
                      options={{headerShown: false}}
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
                  name="ListaMedidas"
                  component={ListaMedidas}
                  options={{
                    headerStyle: {
                      backgroundColor: '#1C1B1B',
                    },
                    headerTitleStyle: {
                      color: '#fff',
                      fontSize: 30
                    },
                    headerTintColor: '#FFF843',
                    headerShown: '#1C1B1B'
                  }}      
                />
                <Stack.Screen
                  name="RutinasScreen"
                  component={RutinasScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#1C1B1B',
                    },
                    headerTitleStyle: {
                      color: '#fff',
                      fontSize: 30
                    },
                    headerTintColor: '#FFF843',
                    headerShown: '#1C1B1B'
                  }}
                />
                <Stack.Screen
                  name="Rutinas"
                  component={PdfScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#1C1B1B',
                    },
                    headerTitleStyle: {
                      color: '#fff',
                      fontSize: 30
                    },
                    headerTintColor: '#FFF843',
                    headerShown: '#1C1B1B'
                  }}
                />
                <Stack.Screen
                  name="IdUsuario"
                  component={IdUsuario}
                  options={{
                    headerStyle: {
                      backgroundColor: '#1C1B1B',
                    },
                    headerTitleStyle: {
                      color: '#fff',
                      fontSize: 30
                    },
                    headerTintColor: '#FFF843',
                    headerShown: '#1C1B1B'
                  }}
                />
                {/* <Stack.Screen
                  name="PlanMensual"
                  component={PlanMensual}
                  options={{
                    // tittle: 'Rutinas',
                    headerStyle: {
                      backgroundColor: '#1C1B1B',
                    },
                    headerTitleStyle: {
                      color: '#fff',
                      fontSize: 30
                    },
                    headerTintColor: '#FFF843',
                    headerShown: '#1C1B1B'
                  }}
                /> */}
                {/* <Stack.Screen
                  name="ComprarPlan"
                  component={ComprarPlan}
                  options={{
                    // tittle: 'Rutinas',
                    headerStyle: {
                      backgroundColor: '#1C1B1B',
                    },
                    headerTitleStyle: {
                      color: '#fff',
                      fontSize: 30
                    },
                    headerTintColor: '#FFF843',
                    headerShown: '#1C1B1B'
                  }}
                /> */}
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