import React from "react";
import { 
  View,
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView 
} from "react-native";


const Medidas = ({item}) => {
  const {fecha, supervisor, peso, brazo, pecho, cintura} = item
  return (
    <SafeAreaView 
      style = {styles.container}
    >
      <ScrollView>
        <Text
          style = {styles.fecha}
        >
          {fecha} ● Supervisado por: {supervisor}
        </Text>
    
        <View 
          style = {styles.informacion}
        >
          <View 
            style = {styles.start}
          >
            <Text 
              style = {styles.peso}
            >
              {peso}
            </Text>
          </View>
    
          <View 
            style = {styles.end}
          >
            <Text 
              style = {styles.brazo}
            >
              Brazo: {brazo}
            </Text>
    
            <Text 
              style = {styles.pecho}
            >
              Pecho: {pecho}
            </Text>
    
            <Text 
              style = {styles.cintura}
            >
              Cintura: {cintura}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
  },
  informacion: {
    display: 'grid',
    gridTemplateColumns: '45% 55%' 
  },
  start: {
    textAlign: 'star',
  },
  end: {
    alignItems: 'start',
  },
  fecha: {
    marginLeft: 30,
    color: '#FFF843',
    marginTop: '57',
    fontSize: 18,
    fontFamily: 'Dosis_200ExtraLight'
  },
  supervisor: {
    marginLeft: 30,
    color: '#FFF843',
    fontSize: 18,
    fontFamily: 'Dosis_200ExtraLight'
  },
  peso: {
    marginLeft: 30,
    marginTop: 9,
    color: '#FFF843',
    fontSize: '300%',
    fontFamily: 'Dosis_200ExtraLight'
  },
  brazo: {
    marginTop: 12,
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Dosis_200ExtraLight'
  },
  pecho: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Dosis_200ExtraLight'
  },
  cintura: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Dosis_200ExtraLight'
  },
});

export default Medidas;