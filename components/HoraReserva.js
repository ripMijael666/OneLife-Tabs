import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import Home from "../tabScreen/Home";

const HoraReserva = () => {

    const HoraInicio = [
        {
            hora: '07:00',
            id: '001'
        },
        {
            hora: '07:00',
            id: '002'
        }
      ]
    //   const HoraFinal = [
    //     {
    //         hora: '08:00',
    //         id: '001'
    //     },
    //     {
    //         hora: '08:00',
    //         id: '002'
    //     }
    //   ]

    return (
        <View
            style={styles.container}
        >
            <FlatList 
                numColumns={
                    2
                }
                data = { HoraInicio }
                keyExtractor = { (item) => item.id}
                renderItem = { ({ item, index }) => <Home item = { item } /> }
                ItemSeparatorComponent = { () => <View 
                    style = {{ 
                        marginVertical: 15, 
                    }} />}

            />

            {/* <FlatList 
                numColumns={
                    2
                }
                data = { HoraFinal }
                keyExtractor = { (item) => item.id}
                renderItem = { ({ item, index }) => <Home item = { item } /> }
                ItemSeparatorComponent = { () => <View 
                    style = {{ 
                        marginVertical: 15, 
                    }} />}

            /> */}
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
});

export default HoraReserva;