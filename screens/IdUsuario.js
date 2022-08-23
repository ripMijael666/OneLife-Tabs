import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import Barcode from 'react-native-barcode-expo';

const IdUsuario = () => {
    return (
        <View
            style= {{
                flex: 1,
                backgroundColor: '#1C1B1B',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text
                style={{
                    color: '#fff',
                    fontSize: 40,
                }}
            >
                Texto ID de Usuario.
            </Text>
            {/* <Barcode value="Hello World" format="CODE128" /> */}
        </View>
    )
}


export default IdUsuario;