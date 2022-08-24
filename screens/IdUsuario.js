import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import QRCode from "react-qr-code";


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
            {/* <QRCode value="hey" bgColor="#1C1B1B" fgColor="#FFF843" level="H" /> */}
        </View>
    )
}


export default IdUsuario;