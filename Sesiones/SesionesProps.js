import React from "react";
import { View,Text, StyleSheet, SafeAreaView } from "react-native";


const SesionesProps = ({item}) => {

  const {fecha, plan, precio, sesion} = item

  return (
    <SafeAreaView 
      style = {styles.container}
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
    </SafeAreaView>
  )  
}



const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
  },
  start: {
    alignItems: 'flex-start'
  },
  end: {
    alignItems: 'flex-end'
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

  },
  text1: {
    color: '#fff',
    marginRight: 50,
    // marginBottom: '4pt',
    fontSize: 22,
    // fontFamily: 'Dosis_200ExtraLight',
  },
  sesion: {
    flex: 1,
    color: '#000000',
    width: 65,
    height: 75,
    fontSize: 40,
    // fontFamily: 'Dosis_300Light',
    backgroundColor: '#FFF843',
    borderRadius: 10,
    marginLeft: 278,
    textAlign: 'center',   
   }
});


export default SesionesProps;