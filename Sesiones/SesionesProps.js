import React from "react";
import { View,Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";


const SesionesProps = ({item}) => {

  const {fecha, plan, precio, sesion} = item

  return (
    <SafeAreaView 
      style = {styles.container}
    >
      <View 
        style={styles.informacion}
      >
        <View 
          style={styles.start}
        >
          <Text 
            style={styles.fecha}
          >
            {fecha}
          </Text>

          <Text 
            style={styles.plan}
          >
            {plan}
          </Text>

          <Text 
            style={styles.precio}
          >
            {precio}
          </Text>
        </View>

        <View 
          style={styles.end}
        >   
          <Text 
            style={styles.text1}
          >
            Sesion
          </Text>

          <Text 
            style={styles.sesion}
          >
            {sesion}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )  
}



const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
  },
  informacion: {
      display: 'grid',
      gridTemplateColumns: '60% 40%' 
  },
  start: {
    textAlign: 'star',
  },
  end: {
    textAlign: 'end',
  },
  fecha: {
    marginLeft: 35,
    color: '#FFF843',
    fontSize: 20,
    // fontFamily: 'Dosis_200ExtraLight'
  },
  plan: {
    marginLeft: 35,
    marginTop: 1,
    color: '#FFF843',
    fontSize: 25,
    // fontFamily: 'Dosis_200ExtraLight'
  },
  precio: {
    marginLeft: 35,
    color: '#fff',
    fontSize: 20,
    // fontFamily: 'Dosis_300Light',
    marginBottom: 28
  },
  text1: {
    color: '#fff',
    marginRight: '30%',
    // marginBottom: '4pt',
    fontSize: 22,
    // fontFamily: 'Dosis_200ExtraLight',
  },
  sesion: {
    color: '#000000',
    width: '38%',
    height: '44%',
    fontSize: 40,
    // fontFamily: 'Dosis_300Light',
    backgroundColor: '#FFF843',
    borderRadius: 10,
    marginLeft: '35%',
    textAlign: 'center',   
   }
});


export default SesionesProps;