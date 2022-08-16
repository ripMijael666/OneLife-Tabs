import React from "react";

import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity, 
    SafeAreaView, 
    ScrollView,
} from "react-native";
import {Context as AuthContext} from '../context/AuthContext';
import {BarChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// import { useFonts,
//   Dosis_200ExtraLight,
//   Dosis_300Light,
//   Dosis_400Regular,
//   Dosis_500Medium,
//   Dosis_600SemiBold,
//   Dosis_700Bold,
//   Dosis_800ExtraBold
// } from '@expo-google-fonts/dosis'

// import * as SplashScreen from "expo-splash-screen"
// SplashScreen.preventAutoHideAsync();


const Home = (item) => {

  const { signOut } = React.useContext(AuthContext);
  const navigation = useNavigation();
  const { HoraInicio } = item
  const listausuarios = () => {
    navigation.navigate("ListaMedidas");
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <ScrollView>

        <View 
          style = {styles.encabezado}
        >
          <View 
            style = {styles.start}
          >
            <TouchableOpacity
                onPress={() => signOut( )}
            >
            <Image
              style={{ 
                width: 112 , 
                height: 53 ,   
                marginVertical: 40,
                // marginTop: '60pt',
                marginLeft: 40, 
              }}
                source={require("../assets/img/marca.png")}
            />
            </TouchableOpacity>
          </View>
              
          <View 
            style = {styles.end}
          >
            <Image
              style={{ 
                width: 90,
                height: 90,
                marginTop: 40,
                marginRight: 30
              }}
                source={require("../assets/img/perfil.png")}
            />
  
          </View> 
        </View>

        <View 
        style = {styles.body}
        >
        <View
          style= {styles.encabezado}
        >
          <Text 
            style={styles.titulo}
          >
            Bienvenido
          </Text>

          <TouchableOpacity
          style= {{
            marginRight:40,
          }}
            onPress={() => navigation.navigate("IdUsuario")}
          >
            <MaterialCommunityIcons name="qrcode-scan" size={35} color="#FFF843" />
          </TouchableOpacity>
        </View>
          <Text 
            style={styles.nombreUsuario}
          >
            Juan Aguilar
          </Text>

          <Text 
            style={styles.estadoUsuario}
          >
            Estado: Activo
          </Text>

          <Text 
            style={styles.numeroSesion}
          >
            27
          </Text>

          <Text 
            style={styles.sesiones}
          >
            Sesiones Restantes
          </Text>

          <Text 
            style={styles.fecha}
          >
            Hasta 22/12/2020
          </Text>
        </View>

        <View 
          style ={styles.medidor}
        >
          <Text 
            style={styles.rendimiento}
          >
            Rendimiento de medidas
          </Text>

          <TouchableOpacity
            onPress={listausuarios}>
            <Text 
              style={styles.ver}
            >
              Ver todo
            </Text>
          </TouchableOpacity>
        </View>

        <View
        >
            <BarChart
              data={{
                  labels: [
                    "17/Ene", 
                    "23/Feb", 
                    "20/Mar", 
                    "10/Abr", 
                    "15/May", 
                    "18/Jun"
                  ],
                  datasets: [{
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ]
                  }]
                }}
                width={
                  Dimensions.get("window").width
                }
                height={197}
                yAxisSuffix="kg"
                yAxisInterval={1}
                chartConfig={{
                  backgroundColor: "#262323",
                  backgroundGradientFrom: "#262323",
                  backgroundGradientTo: "#262323",
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 20,
                  },
                  propsForDots: {
                    r: "4",
                    strokeWidth: "1",
                    stroke: "#ffa726"
                  }
                }}
                bezier
                  style={{
                    marginVertical: 5,
                    borderRadius: 18,
                    marginTop: 15,
                  }}
            />
          <View>

          
            <View
                style={styles.encabezado}
            >
                <Text
                    style={styles.titulo}
                > 
                    Reservas
                </Text>

                <Text
                    style={styles.ver}
                >
                    VER TODO
                </Text>
            </View>

            <View
              style={{
                color: '#d6a7'
              }}
            >
              <Text
                    style={styles.textList}
              > 
                { item.item.HoraInicio } 
              </Text>
            </View>
          </View>
        </View> 
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
  },
  encabezado: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 55
    // display: 'grid',
    // gridTemplateColumns: '50% 50%' ,
  },
  body: {
    flex: 1,
    // display: 'grid',
    // gridTemplateColumns: '100%'
  },
  titulo: {
    paddingHorizontal: 35,
    paddingVertical: -130,
    fontSize: 55,
    color: '#fff',
    // fontFamily: 'Dosis_400Regular'
  },
  nombreUsuario: {
    color: '#FFF843',
    fontSize: 30,
    paddingHorizontal: 35,
    // fontFamily: 'Dosis_200ExtraLight'
  },
  estadoUsuario:{
    color: '#FFF843',
    fontSize: 18,
    paddingHorizontal: 35,
    // fontFamily: 'Dosis_200ExtraLight'  
  },

  numeroSesion:{
    color: '#FFF843',
    fontSize: 135,
    // fontFamily: 'Dosis_300Light',
    textAlign: "center",
  },
  sesiones: {
    color: '#fff',
    fontSize: 18,
    // fontFamily: 'Dosis_200ExtraLight',
    textAlign: "center",
  },
  fecha: {
    color: '#FFF843',
    fontSize: 19,
    // fontFamily: 'Dosis_200ExtraLight',
    textAlign: "center",
  },
  medidor: {
    // display: 'grid',
    marginTop: 30,
    // marginBottom: '9pt',
    // gridTemplateColumns: '70% 30%'
  },
  rendimiento: {
    color: '#fff',
    fontSize: 15,
    // fontFamily: 'Dosis_200ExtraLight',
    textAlign: "left",
    marginLeft: 20
  },
  ver: {
    color: '#FFF843',
    fontSize: 15,
    // fontFamily: 'Dosis_200ExtraLight',
    textAlign: "right",
    marginRight: 20,
    marginTop: 45 
  },
  start: {
    textAlign: 'left'
  },
  end: {
    alignItems: 'flex-end'
  },
});


export default Home;