import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";


// import { useFonts,
//     Dosis_200ExtraLight,
//     Dosis_300Light,
//     Dosis_400Regular,
//     Dosis_500Medium,
//     Dosis_600SemiBold,
//     Dosis_700Bold,
//     Dosis_800ExtraBold 
//   } from '@expo-google-fonts/dosis'

const Clases = () => {
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.encabezado}
            >
                <Text
                    style={styles.titulo}
                > 
                    Clases
                </Text>

                <Text
                    style={styles.ciudad}
                >
                    Ciudad: CBBA
                </Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1B1B',
        width: '100%',
        height: '100%',
    },
    titulo: {
        paddingHorizontal: 32,
        paddingVertical: 27,
        fontSize: 50,
        color: '#fff',
        // fontFamily: 'Dosis_400Regular'
    },
    encabezado: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginTop: 5,
    },
    ciudad: {
        color: '#FFF843',
        fontSize: 18,
        // fontFamily: 'Dosis_200ExtraLight',
        textAlign: "right",
        marginRight: 20,
        marginTop: 55
    }
});

export default Clases