import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";

import { WebView } from 'react-native-webview';

import { useNavigation } from "@react-navigation/native";

import { useFonts,
    Dosis_200ExtraLight,
    Dosis_300Light,
    Dosis_400Regular,
    Dosis_500Medium,
    Dosis_600SemiBold,
    Dosis_700Bold,
    Dosis_800ExtraBold 
  } from '@expo-google-fonts/dosis'

const Pdf = () => {
    
  let [fontsLoaded] = useFonts({
    Dosis_200ExtraLight,
    Dosis_300Light,
    Dosis_400Regular,
    Dosis_500Medium,
    Dosis_600SemiBold,
    Dosis_700Bold,
    Dosis_800ExtraBold 
  });
    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.titulo}
            >
                Rutinas
            </Text>
            <Text
                style={styles.subtitulo}
            >
                Pecho • Apertuara de máquina contractora
            </Text>

            <View>
                <WebView source={{ uri:"https://google.com" }} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1B1B',
        width: '100%',
        height: '100%',
    },
    titulo: {
        paddingHorizontal: 32,
        paddingVertical: 27,
        fontSize: 55,
        color: '#fff',
        fontFamily: 'Dosis_400Regular'
    },
    subtitulo: {
        color: '#FFF843',
        fontFamily: 'Dosis_200ExtraLight',
        padding: '7%',
        fontSize: 18,
        textAlign: 'left',
        marginVertical: -50,
        marginLeft: '1%'

    }
})

export default Pdf