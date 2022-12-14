import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as SecureStore from 'expo-secure-store';

import { Provider as AuthProvider } from './context/AuthContext.js';
import { Context as AuthContext } from './context/AuthContext';
import { AntDesign } from '@expo/vector-icons';


import LogIn from './screens/LogIn';
import CiudadScreen from './screens/CiudadScreen.js';
import Home from './tabScreen/Home.js';
import IdUsuario from './screens/IdUsuario.js';
import ListaMedidas from './Medidas/ListaMedidas';
import FlatListScreen from './screens/FlatListScreen.js';
import RutinasScreen from './screens/RutinasScreen.js';
import PdfScreen from './screens/PdfScreen.js';
import Clases from './tabScreen/Clases.js';
import Instructor from './screens/Instructor.js';
import SesionesList from './tabScreen/SesionesList.js';
import PlanMensual from './Sesiones/PlanMensual.js';
import ComprarPlan from './Sesiones/ComprarPlan.js';
import NuevoHome from './tabScreen/NuevoHome.js';
import Busqueda from './screens/Busqueda.js';
import MedidasIns from './screens/MedidasIns.js';
import MedidasVista from './screens/MedidasVista.js';
import Pecho from './screens/Pecho.js';
import Bicep from './screens/Bicep.js';
import Cintura from './screens/Cintura.js';
import Cadera from './screens/Cadera.js';


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
        options={{ headerShown: false }}
        name="CiudadesScreen"
        component={CiudadScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
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
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#FFF843',
        tabBarInactiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#000000',
        tabBarInactiveBackgroundColor: '#000000',
        tabBarIcon: ({ focused, color, size }) => {
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
            case 'Sesiones':
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              break;
            case 'Sesiones':
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              break;
          }

          // You can return any component that you like here!
          return (
            <AntDesign name="checkcircleo" size={24} color="#FFFD" />
            // <Icon name={iconName} type="ionicon" size={size} color={color} />
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
        name="Sesiones"
        component={SesionesList}
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
      <Tab.Screen
        name="NuevoHome"
        component={NuevoHome}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

function App() {

  const { state, restoreToken } = React.useContext(AuthContext);
  console.log(state);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
      }
      restoreToken({ userToken });
    };
    bootstrapAsync();
  }, []
  );

  return (
    <NavigationContainer>

      <Stack.Navigator>
        {state.isLoading ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splash"
            component={Splash}
          />
        ) : state.userToken === null ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Auth"
              component={AuthFlow}
            />
          </>
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeFlow"
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
        <Stack.Screen
          name="Instructor"
          component={Instructor}
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
          name="PlanMensual"
          component={PlanMensual}
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
          name="ComprarPlan"
          component={ComprarPlan}
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
          name="Busqueda"
          component={Busqueda}
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
          name="MedidasIns"
          component={MedidasIns}
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
          name="MedidasVista"
          component={MedidasVista}
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
          name="Pecho"
          component={Pecho}
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
          name="Bicep"
          component={Bicep}
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
          name="Cintura"
          component={Cintura}
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
          name="Cadera"
          component={Cadera}
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