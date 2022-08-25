import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Cintura() {
    const navigation = useNavigation();

    return (
        <View
            style={styles.container}
        >
            <Image
                style={styles.imagen}
                source={require("../assets/cuerpo/Cintura.png")}
            />

            <TextInput
                style={{
                    backgroundColor: '#212529',
                    width: 280,
                    height: 80,
                    color: '#FFFFFF',
                    fontSize: 50,
                    fontWeight: '600',
                    textAlign: 'center',

                }}
            />

            <TouchableOpacity
                onPress={() => navigation.navigate("MedidasVista")}
            >
                <View
                    style={{
                        marginTop: 35,
                        backgroundColor: '#FFF843',
                        borderRadius: 12,
                        width: 195,
                        height: 55,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 35
                    }}
                >
                    <Text
                        style={{
                            color: '#000000',
                            fontSize: 30,
                            fontWeight: '400'
                        }}
                    >
                        GUARDAR
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1B1B',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FFFF'
    },
    imagen: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Cintura;