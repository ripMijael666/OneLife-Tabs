import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import ListRutinas from '../components/ListRutinas'

// import { useFonts,
//     Dosis_200ExtraLight,
//     Dosis_300Light,
//     Dosis_400Regular,
//     Dosis_500Medium,
//     Dosis_600SemiBold,
//     Dosis_700Bold,
//     Dosis_800ExtraBold 
//   } from '@expo-google-fonts/dosis'

function FlatListScreen() {
    const navigation = useNavigation();
    // let [fontsLoaded] = useFonts({
    //     Dosis_200ExtraLight,
    //     Dosis_300Light,
    //     Dosis_400Regular,
    //     Dosis_500Medium,
    //     Dosis_600SemiBold,
    //     Dosis_700Bold,
    //     Dosis_800ExtraBold 
    // });

    const rutinas = [
        {
            nombre: 'Pecho',
            id: '001'
        },
        {
            nombre: 'Pecho',
            id: '002'
        },
        {
            nombre: 'Pecho',
            id: '003'
        },
        {
            nombre: 'Pecho',
            id: '004'
        },
        {
            nombre: 'Biceps',
            id: '005'
        },
        {
            nombre: 'Biceps',
            id: '006'
        },
        {
            nombre: 'Biceps',
            id: '007'
        },
        {
            nombre: 'Biceps',
            id: '008'
        }
    ]

    return (
        <View
            style={styles.container}
        >
                <FlatList 
                    numColumns={
                        2
                    }
                    data = { rutinas }
                    keyExtractor = { (item) => item.id}
                    renderItem = { ({ item }) => <ListRutinas item = { item } /> }
                    ItemSeparatorComponent = { () => <View 
                        style = {{ 
                            marginVertical: 10, 
                        }} />}
                    ListHeaderComponent = { () => <Text
                        style = {styles.titulo}>
                        Rutinas
                    </Text>}
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
  },
  titulo: {
    paddingHorizontal: 32,
    paddingVertical: 27,
    fontSize: 55,
    color: '#fff',
    // fontFamily: 'Dosis_400Regular'
  }
});

export default FlatListScreen;