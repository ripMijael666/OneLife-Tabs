import React from "react";
import { 
  View,
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  FlatList, 
  ScrollView 
} from "react-native";
import SesionesProps from "../Sesiones/SesionesProps";

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

const SesionesList = ({navigation}) => {

  // let [fontsLoaded] = useFonts({
  //   Dosis_200ExtraLight,
  //   Dosis_300Light,
  //   Dosis_400Regular,
  //   Dosis_500Medium,
  //   Dosis_600SemiBold,
  //   Dosis_700Bold,
  //   Dosis_800ExtraBold 
  // });

  const listaSesiones = [
    {
      id: '1',
      fecha: '24/10/2021',
      plan: 'Plan 3 Meses',
      precio: 'Bs. 349',
      sesion: '10',
    },

    {
      id: '2',
      fecha: '24/10/2021',
      plan: 'Plan 3 Meses',
      precio: 'Bs. 349',
      sesion: '10',
    },

    {
      id: '3',
      fecha: '24/10/2021',
      plan: 'Plan 3 Meses',
      precio: 'Bs. 349',
      sesion: '10',
    },


]
  return ( 
    <SafeAreaView style={{
      flex:1,
      backgroundColor: '#1C1B1B',
      width: '100%',
      height: '100%'
    }}>

      <ScrollView>
        <View>
          <Text 
            style={styles.titulo}
          >
            Sesiones  
          </Text>
        </View>

      <TouchableOpacity
        onPress={()=> navigation.navigate("PlanMensual")}>
          <View>
            <Text 
              style={styles.comprar}
            >
              Comprar sesiones
            </Text>  
          </View>
      

      <FlatList
        data = {listaSesiones}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => <SesionesProps item = {item}/>}
      />
      </TouchableOpacity> 
      </ScrollView>
    </SafeAreaView> 
    
  )
    
}

export default SesionesList;

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

  comprar: {
    color: '#FFF843',
    textAlign: 'right',
    marginRight: 28,
    marginTop: -15,
    // marginBottom: 15,
    fontSize: 20,
    fontWeight: '100',
    // fontFamily: 'Dosis_300Light',
    // borderTopColor: '#1C1B1B',
  },

});