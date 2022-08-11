import React from "react";
import { View,Text, StyleSheet, SafeAreaView, FlatList, ScrollView} from "react-native";
import PlanesMensuales from "./PlanesMensuales";


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

function PlanMensual() {

  // let [fontsLoaded] = useFonts({
  //   Dosis_200ExtraLight,
  //   Dosis_300Light,
  //   Dosis_400Regular,
  //   Dosis_500Medium,
  //   Dosis_600SemiBold,
  //   Dosis_700Bold,
  //   Dosis_800ExtraBold 
  // });

  const listaPlanes = [
    {
    id: '1',
    plan: 'Plan Mensual',
    sesiones: '30 Sesiones',
    precio: 'Bs 349',
    },

    {
      id: '2',
      plan: 'Plan Mensual',
      sesiones: '30 Sesiones',
      precio: 'Bs 1040',
    },

    {
      id: '3',
      plan: 'Plan Mensual',
      sesiones: '30 Sesiones',
      precio: 'Bs 2080',
    }
]


  return (

    <SafeAreaView 
      style={{
        backgroundColor: '#1C1B1B',
        width: '100%',
        height: '100%'
      }}
    >
      <ScrollView>
        <Text 
          style={styles.titulo}
        >
            Sesiones
        </Text>

        <Text 
          style={styles.descripcion}
        >
          Comprar Sesiones
        </Text>

        <FlatList
          data = {listaPlanes}
          keyExtractor = {(item) => item.id}
          renderItem = 
            {({item}) => 
              <PlanesMensuales 
                planItem = {item}
              />
            }
        />
      </ScrollView>
    </SafeAreaView>  
  )
  
}


export default PlanMensual;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B', 
  },

  titulo: {
    paddingHorizontal: 32,
    paddingVertical: 27,
    fontSize: 55,
    color: '#fff',
    // fontFamily: 'Dosis_400Regular'
  },
  descripcion: {
    color: '#FFF843',
    fontSize: 18,
    // paddingVertical: '-35%',
    marginLeft: '10%',
    // fontFamily: 'Dosis_200ExtraLight'
  },
});