import React from "react";
import { View,Text, StyleSheet, Alert, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import PagarPlan from "./PagarPlan"

// import { useFonts,
//   Dosis_200ExtraLight,
//   Dosis_300Light,
//   Dosis_400Regular,
//   Dosis_500Medium,
//   Dosis_600SemiBold,
//   Dosis_700Bold,
//   Dosis_800ExtraBold 
// } from '@expo-google-fonts/dosis'

import * as SplashScreen from "expo-splash-screen"
SplashScreen.preventAutoHideAsync();


function ComprarPlan() {

  // let [fontsLoaded] = useFonts({
  //   Dosis_200ExtraLight,
  //   Dosis_300Light,
  //   Dosis_400Regular,
  //   Dosis_500Medium,
  //   Dosis_600SemiBold,
  //   Dosis_700Bold,
  //   Dosis_800ExtraBold 
  // });

  return (
    <SafeAreaView 
    style={styles.container}
    >
      <ScrollView>
        <View>
          <Text 
            style={styles.titulo}
          >
            Sesiones
          </Text>

          <Text 
            style={styles.descripcion}
          >
            Plan Mensual 30 Sesiones
          </Text>

          <PagarPlan 
            plan='Plan Mensual' sesiones='118' precio='Bs 349'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ComprarPlan;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B', 
  },
  titulo: {
    paddingHorizontal: 35,
    paddingVertical: 30,
    fontSize: 55,
    color: '#fff',
    // fontFamily: 'Dosis_300Light'
  },
  descripcion: {
    color: '#FFF843',
    // fontFamily: 'Dosis_200ExtraLight',
    padding: '7%',
    fontSize: 18,
    textAlign: 'left',
    marginVertical: -30,
    marginLeft: '1%'
  },
});