import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

// import ImagenRutinas from '../components/ImagenRutinas'

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
                renderItem = { ({ item }) => <View item = { item } /> }
                ItemSeparatorComponent = { () => <View 
                    style = {{ 
                        marginVertical: 15, 
                    }} />}
                ListHeaderComponent = { () => 
                    <Text
                        style = {styles.titulo}>
                            Rutinas
                    </Text>
                }
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