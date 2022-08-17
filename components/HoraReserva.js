import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import Home from "../tabScreen/Home";

const HoraReserva = () => {

    const HoraInicio = [
        {
            hora: '07:00',
            id: '001'
        },
        {
            hora: '08:00',
            id: '002'
        }
      ]


    // return (
    //     <View
    //         style={styles.container}
    //     >
    //         <FlatList 
    //             numColumns={
    //                 2
    //             }
    //             data = { HoraInicio }
    //             keyExtractor = { (item) => item.id}
    //             renderItem = { ({ item }) => <Text style={{fontSize: 17, color: "white"}} >{item.hora}</Text> }
    //             ItemSeparatorComponent = { () => <View 
    //                 style = {{ 
    //                     marginVertical: 15, 
    //                 }} />}

    //         />
    //     </View>
    // )
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