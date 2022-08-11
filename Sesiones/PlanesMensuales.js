import React from "react";
import { View,Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';


const PlanesMensuales = ({planItem}) =>  {
   const navigation = useNavigation();
  
   const mostrarPlan = () => {
    navigation.navigate("ComprarPlan");
  }

  const {plan, sesiones, precio} = planItem

  return (
    <SafeAreaView 
      style={styles.container}
    >
      <ScrollView>
        <View 
          style={styles.informacion}
        >
          <TouchableOpacity
            onPress={mostrarPlan}  
          >
              <Text 
                style={styles.text1}
              >
                {plan}
              </Text>

              <Text 
                style={styles.text2}
              >
                {sesiones}
              </Text>

              <Text 
                style={styles.text3}
              >
                {precio}
              </Text>
          </TouchableOpacity> 
        </View>
      </ScrollView>
    </SafeAreaView>
  ) 
};

export default PlanesMensuales;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  informacion: {
    width: 250,
    height: 185,
    borderWidth: 1,
    borderColor: '#FFF843',
    borderRadius: 35,
    marginTop: '15%',
  },
  text1: {
    color: '#FFF843',
    fontSize: 20,
    // fontFamily: 'Dosis_200ExtraLight',
    marginLeft: 15,
    marginTop: 25,
  },
  text2: {
    color: '#FFF843',
    fontSize: 18,
    // fontFamily: 'Dosis_200ExtraLight',
    marginLeft: 15
  },
  text3: {
    color: '#FFF843',
    fontSize: 60 ,
    // fontFamily: 'Dosis_300Light',
    marginLeft: 15
  },
});