import React from "react";
import { View, Text, StyleSheet } from "react-native";

// import { WebView } from 'react-native-webview';



// import { useFonts,
//     Dosis_200ExtraLight,
//     Dosis_300Light,
//     Dosis_400Regular,
//     Dosis_500Medium,
//     Dosis_600SemiBold,
//     Dosis_700Bold,
//     Dosis_800ExtraBold 
//   } from '@expo-google-fonts/dosis'

const PdfScreen = () => {
    
//   let [fontsLoaded] = useFonts({
//     Dosis_200ExtraLight,
//     Dosis_300Light,
//     Dosis_400Regular,
//     Dosis_500Medium,
//     Dosis_600SemiBold,
//     Dosis_700Bold,
//     Dosis_800ExtraBold 
//   });
    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.subtitulo}
            >
                Pecho • Apertuara de máquina contractora
            </Text>

            <View>
                {/* <WebView source={{ uri:"https://google.com" }} /> */}
                <Text
                    style={{
                        color: '#fff'
                    }}
                >
                    pdf
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1B1B',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitulo: {
        color: '#FFF843',
        // fontFamily: 'Dosis_200ExtraLight',
        padding: '7%',
        fontSize: 18,
        textAlign: 'center',
    }
})

export default PdfScreen