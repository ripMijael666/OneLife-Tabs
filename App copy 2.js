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
// import HomeScreen from './tabScreen/Home';


// import {Provider as AuthProvider} from './context/AuthContext';
// import {Context as AuthContext} from './context/AuthContext';


// const Stack = createNativeStackNavigator();
// //const AuthContext = React.createContext();



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

// });

// export default function App({ }) {

//   const state = React.useContext(AuthContext);
//   console.log(state);

// return (
// <AuthProvider>
//   <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//           <>
//           <Stack.Screen 
//             name="Splash"
//             component={Splash}
//           />
//           <Stack.Screen
//             name="Ciudades"
//             component={CiudadScreen}
//           />
//           <Stack.Screen
//             name="LogIn"
//             component={SignInScreen}
//           />
          
//           </>
//       </Stack.Navigator>
//   </NavigationContainer>
// </AuthProvider>
// );
// }