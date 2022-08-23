import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PdfScreen from '../screens/PdfScreen'
// import { useFonts,
//     Dosis_200ExtraLight,
//     Dosis_300Light,
//     Dosis_400Regular,
//     Dosis_500Medium,
//     Dosis_600SemiBold,
//     Dosis_700Bold,
//     Dosis_800ExtraBold 
//   } from '@expo-google-fonts/dosis'

const Rutinas = () => {

    const rutinasImage = [
        {
            image: 'Apertura en máquina contadora',
            id: '001'
        },
        {
            image: 'Apertura en máquina contadora',
            id: '002'
        },
        {
            image: 'Apertura en máquina contadora',
            id: '003'
        },
        {
            image: 'Apertura en máquina contadora',
            id: '004'
        },
    ]

    return (
        <View
            style={styles.container}
        >
            <FlatList 
                numColumns={
                    2
                }
                data = { rutinasImage }
                keyExtractor = { (item) => item.id}
                renderItem = { ({ item }) => <PdfScreen item = { item } /> }
             />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C1B1B',
      width: '100%',
      height: '100%',
    //   marginTop: StatusBar.currentHeight,
    },
    titulo: {
        paddingHorizontal: 32,
        paddingVertical: 27,
        fontSize: 55,
        color: '#fff',
        // fontFamily: 'Dosis_400Regular'
    }
});

export default Rutinas