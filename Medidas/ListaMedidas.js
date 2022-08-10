import React from "react";
import { 
  View,
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView 
} from "react-native";
import { FlatList } from 'react-native'
import Medidas from './Medidas'


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

      {/* <View 
        style={styles.title}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Ionicons 
            style={styles.icono}
            name="chevron-back" 
            size={36} 
            color="#FFF843"
          />
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
        renderItem = {({item, index}) => <Medidas item = {item}/>}
        ItemSeparatorComponent = { () => <View 
          style = {{ 
              marginVertical: 10, 
          }} />}
        ListHeaderComponent = { () => 
          <Text
            style = {styles.titulo}
          >
            Medidas
          </Text>
        }
      />
    </SafeAreaView>  
  )  
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
  },
  title:{
    display: 'grid',
    gridTemplateColumns: '100%' 
  },
  titulo: {
    paddingHorizontal: 32,
    paddingVertical: 27,
    fontSize: 55,
    color: '#fff',
    fontFamily: 'Dosis_400Regular'
  }
});

export default ListaMedidas;