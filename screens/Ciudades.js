import React from "react";
import { StatusBar } from 'expo-status-bar'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Image 
} from "react-native";
import { useNavigation } from '@react-navigation/native'

// import { useFonts,
//     Dosis_200ExtraLight,
//     Dosis_300Light,
//     Dosis_400Regular,
//     Dosis_500Medium,
//     Dosis_600SemiBold,
//     Dosis_700Bold,
//     Dosis_800ExtraBold 
//   } from '@expo-google-fonts/dosis'

// import StackScreen from './StackScreen'

// const COLORS = {
//     white: '#FFFFFF',
//     black: '#000',
//     red: '#E90716',
  
//   }

function CiudadScreen() {
    // let [fontsLoaded] = useFonts({
    //     Dosis_200ExtraLight,
    //     Dosis_300Light,
    //     Dosis_400Regular,
    //     Dosis_500Medium,
    //     Dosis_600SemiBold,
    //     Dosis_700Bold,
    //     Dosis_800ExtraBold 
    // });

   const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <StatusBar style="100%" />
                <Image
                    style={{ 
                      width: 200 , 
                      height: 94 ,   
                      marginVertical: 80
                    }}
                        source={require("../assets/grupo_7.png")}
                ></Image>
            
            <Text
                style={{
                    fontSize: 28,
                    textAlign: "center",
                    justifyContent: 'center',
                    // fontFamily: 'Dosis_200ExtraLight',
                    color: '#fff',
                }}
            >
                Seleccione Ciudad
            </Text>
            <View style={styles.ciudad}>           
                <TouchableOpacity
                    onPress={() => 
                        {navigation.navigate("LogIn", {
                          ciudad: 'La Paz',
                        });
                      }}
                    style={styles.botonesCiudad}
                >
                    <Image 
                        style={styles.imagenes}
                        source={require("../assets/grupo_111.png")}
                    ></Image>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => 
                        {navigation.navigate("LogIn", {
                          ciudad: 'Cochabamba',
                        });
                      }}
                    style={styles.botonesCiudad}
                >
                    <Image 
                        style={styles.imagenes}
                        source={require("../assets/grupo_112.png")}
                    ></Image>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    ciudad: {
        flex: 1,
        backgroundColor: '#1C1B1B',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
  
    container: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#1C1B1B',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botonesCiudad: {
        flex: 1,
        marginTop: 180 ,
        width: '100%',
        height: '100%',
    },
    imagenes: {
        width: 200, 
        height: 180,
        resizeMode: 'contain'
    }
});
export default CiudadScreen;