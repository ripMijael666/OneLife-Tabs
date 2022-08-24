import React from "react";
import { 
  View,
  StyleSheet, 
  SafeAreaView, 
} from "react-native";
import { FlatList } from 'react-native'
import Medidas from './Medidas'
// import { useNavigation } from "@react-navigation/native";

const ListaMedidas = () => {
  // const navigation = useNavigation();
    const listausuarios = [
      {
        id: '1',
        fecha: '10/12/2021',
        supervisor: 'Denis Arce',
        peso: '70kg',
        brazo: '79 cm.',
        pecho: '101 cm.',
        cintura: '10 cm.'
      },

      {
        id: '2',
        fecha: '10/12/2021',
        supervisor: 'Denis Arce',
        peso: '80kg',
        brazo: '89 cm.',
        pecho: '101 cm.',
        cintura: '10 cm.'
      },

      {
        id: '3',
        fecha: '10/12/2021',
        supervisor: 'Denis Arce',
        peso: '75kg',
        brazo: '75 cm.',
        pecho: '101 cm.',
        cintura: '10 cm.'
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


      <FlatList
        data = {listausuarios}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => <Medidas item = {item}/>}
        ItemSeparatorComponent = { () => <View 
          style = {{ 
              marginVertical: 10, 
          }} />}
      />
    </SafeAreaView>  
  )  
};

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
  }
});

export default ListaMedidas;