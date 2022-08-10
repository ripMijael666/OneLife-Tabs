import React from 'react';
import { View, Button, StyleSheet, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import * as SecureStore from 'expo-secure-store';

import {Provider as AuthProvider} from './context/AuthContext.js';
import {Context as AuthContext} from './context/AuthContext';

import LogIn from './screens/LogIn';
import CiudadScreen from './screens/CiudadScreen.js';
import Home from './tabScreen/Home.js';



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


const Stack = createNativeStackNavigator();

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
              ) : state.userToken == null ? (
                  <>
                      <Stack.Screen
                        name="CiudadScreen"
                        component={CiudadScreen}
                      />
                      <Stack.Screen
                          name="LogIn"
                          component={SignInScreen}
                      />
                      <Stack.Screen
                        name="Home"
                        component={Home}
                      />
                  </>
              ) : (
                  <Stack.Screen
                    name="Home"
                    component={Home}
                  />
              )}
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