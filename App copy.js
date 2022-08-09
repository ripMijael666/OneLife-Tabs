// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native'
// import { useNavigation } from "@react-navigation/native";
// import { StatusBar } from 'expo-status-bar';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import {
//   View,
//   TextInput,
//   Button,
//   StyleSheet,
//   Image,
//   Text,
//   ImageBackground,
//   SafeAreaView,
//   TouchableOpacity
// } from 'react-native';

// import * as SecureStore from 'expo-secure-store';
// import LogIn from './screens/LogIn';
// import CiudadScreen from './screens/Ciudades';
// import HomeScreen from './screens/Home';

// const Stack = createNativeStackNavigator();
// const AuthContext = React.createContext();

// function Splash() {
//   return (
//     <View
//       style={styles.splash}
//     >
//       <Image
//         source={require('./assets/grupo_7.png')}
//       />
//     </View>
//   );
// }

// function SignInScreen() {
//   const [email, setUsername] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const { signIn } = React.useContext(AuthContext);

//   return (
//     <View>
//       < LogIn />
//     </View>
//   );
// }

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

// const styles = StyleSheet.create({
//   login: {
//     // justifyContent: 'left',
//     // alignItems: 'left',
//     // textAlign: 'left',
//   },
//   container: {
//     textAlign: 'center',
//     backgroundColor: '#1C1B1B',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   texto: {
//     fontSize: 20,
//     color: '#fff',
//     textAlign: 'left',
//     // fontFamily: 'Dosis_300Light',
//   },
//   fondo: {
//     justifyContent: 'center',
//     width:'100%',
//     height:'100%',
//     alignItems: 'center',
//   },
//   SignIn: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignContent: 'center'
//   },
//   Home: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignContent: 'center'
//   },
//   splash: {
//     flex: 1,
//     backgroundColor: '#1C1B1B',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignContent: 'center'
//   },
//   input: {
//     fontSize: 16,
//     borderRadius: 8,
//     width: 300,
//     height: 60,
//     borderWidth: 1,
//     borderColor: '#FFF843',
//     color: '#fff',
//   },
//   boton: {
//     backgroundColor: "#FFF843",
//     padding: 5,
//     marginTop: '10%',
//     width: 300,
//     height: 60,
//     alignSelf: 'center',
//     borderRadius: 8,
//   },
//   textoBoton: {
//     textAlign: 'center',
//     fontSize: 30,
//     color: '#000',
//     // fontFamily: 'Dosis_300Light',
//   }
// });

// export default function App({ }) {
//   // const navigation = useNavigation();
//   const [state, dispatch] = React.useReducer(
//     (prevState, action) => {
//       switch (action.type) {
//         case 'RESTORE_TOKEN':
//           return {
//             ...prevState,
//             userToken: action.token,
//             isLoading: false,
//           };
//         case 'SIGN_IN':
//           return {
//             ...prevState,
//             isSignout: false,
//             userToken: action.token,
//           };
//         case 'SIGN_OUT':
//           return {
//             ...prevState,
//             isSignout: true,
//             userToken: null,
//           };
//       }
//     },
//     {
//       isLoading: true,
//       isSignout: false,
//       userToken: null,
//     }
//   );

// React.useEffect(() => {
//   const bootstrapAsync = async () => {
//     let userToken;
//     try {
//       userToken = await SecureStore.getItemAsync('userToken');
//     } catch (e) {
//     }
//     dispatch({ type: 'RESTORE_TOKEN', token: userToken });
//   };
//   bootstrapAsync();
// },[]
// );

//   const authContext = React.useMemo(
//     () => ({
//       signIn: async ({email, password}) => {
//         console.log(email);
//         console.log(password);
//         await SecureStore.setItemAsync('email', email);
//         await SecureStore.setItemAsync('password', password);
//         await SecureStore.setItemAsync('userToken', 'dummy-auth-token');
//         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//       },
//       signOut: async () => {
//         await SecureStore.deleteItemAsync('userToken');
//         dispatch({ type: 'SIGN_OUT' })},
//       signUp: async () => {
//         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//       },
//     }),
//     []
//   );

// return (
//   <NavigationContainer>
//     <AuthContext.Provider value={authContext}>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         {state.isLoading ? (
//           <Stack.Screen
//             name="Splash"
//             component={Splash}
//           />
//         ) : state.userToken == null ? (
//           <>
//           <Stack.Screen
//             name="Ciudades"
//             component={CiudadScreen}
//           />
//           <Stack.Screen
//             name="LogIn"
//             component={SignInScreen}
//           />
//           <Stack.Screen
//             name="Home"
//             component={HomeScreen}
//           />
          
//           </>
          
//         ) : (
//           <Stack.Screen
//             name="Home"
//             component={Home}
//           />
//         )}
//       </Stack.Navigator>
//     </AuthContext.Provider>
//   </NavigationContainer>
// );
// }