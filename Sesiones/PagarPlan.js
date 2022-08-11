import React from "react";
import { 
  View,
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Image 
} from "react-native";

import { useNavigation } from '@react-navigation/native'

function PagarPLan (props) {
  const navigation = useNavigation();
  const [factura, onChangeFactura] = React.useState("");
  const [nit, onChangeNit] = React.useState("");

  return (
    <SafeAreaView 
      style={styles.container}
    >
      <ScrollView>
        <View 
          style={styles.informacion}
        >
          <Text 
            style={styles.text1}
          >
            {props.precio} 
          </Text>

          <Text 
            style={styles.text3}
          >
            TOTAL
          </Text>

          <Text 
          style={styles.text2}
          >
            {props.sesiones}
          </Text>

          <Text 
            style={styles.text3}
          >
            SESIONES DESPUES DE LA COMPRA
          </Text>
        </View>

        <View>
          <Text 
            style={styles.text4}
          >
            Nombre de la Factura
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangeFactura}
            value={factura}
            keyboardType="numeric"
          />

            <Text 
              style={styles.text5}
            >
              CI/NIT
            </Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangeNit}
            value={nit}
            keyboardType="numeric"
          />

        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("StackScreen")}
          >
            <Text 
              style={styles.tarjeta}
            >
              Pagar con tarjeta de credito/Debito
            </Text>
            <Image
              style={{
                width: 94,
                height: 94,
                marginTop: 40,
                marginRight: 40,
              }}
              source={require("../assets/img/master.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  ) 
};

export default PagarPLan;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',  
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 85,
    // fontFamily: 'Dosis_300Light',
    marginTop: 30,
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 75,
    // fontFamily: 'Dosis_300Light'      
  },
  text3: {
    color: '#FFF843',
    fontSize: 18,
    // fontFamily: 'Dosis_200ExtraLight'    
  },
  text4: {
    color: '#FFFFFF',
    fontSize: 18,
    // fontFamily: 'Dosis_200ExtraLight',
    textAlign: 'left',
    marginTop: 55,
  },
  text5: {
    color: '#FFFFFF',
    fontSize: 18,
    // fontFamily: 'Dosis_200ExtraLight',
    textAlign: 'left',
    marginTop: 25,
    // marginLeft: 90,
  },
  input: {
    fontSize: 20,
    borderRadius: 8,
    width: 320,
    height: 40,
    borderWidth: 1,
    borderColor: '#FFF843',
    color: '#fff',
  },
  tarjeta: {
    backgroundColor: '#383838',
    width: 330,
    height: 65,
    marginTop: 45,
    color: '#FFF843',
    borderRadius: 15,
    fontSize: 15,
    // fontFamily: 'Dosis_300Light',
    textAlign: 'left',
    paddingHorizontal: 18,
    paddingTop: 17
  }
});

