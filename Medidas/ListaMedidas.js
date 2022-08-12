import React from "react";
import { 
  View,
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView
} from "react-native";
import { FlatList } from 'react-native'
import Medidas from './Medidas'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Home from "../tabScreen/Home";

const ListaMedidas = () => {
  const navigation = useNavigation();
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



      {/* <ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
          >
            <AntDesign name="left" size={50} color="#FFF843" />
          </TouchableOpacity>
          <Text 
            style={styles.titulo}
          >
            Medidas
          </Text>
        </View> */}
      




      <FlatList
        data = {listausuarios}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => <Medidas item = {item}/>}
        ItemSeparatorComponent = { () => <View 
          style = {{ 
              marginVertical: 10, 
          }} />}
      />
      {/* </ScrollView> */}
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