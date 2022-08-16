import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import Barcode from 'react-native-barcode-expo';

const IdUsuario = () => {
    return (
        <View>
            <Text
                style={{
                    color: '#fff',
                    fontSize: 40
                }}
            >
                Texto ID de Usuario.
            </Text>
            {/* <Barcode value="Hello World" format="CODE128" /> */}
        </View>
    )
}


export default IdUsuario;