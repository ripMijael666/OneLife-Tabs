import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

function MedidasIns() {
    const navigation = useNavigation();

    // const fecha = props.route.params.fechastring[0].date;
    // var spliteado = fecha.split("-");
    // const diaTexto = spliteado[0];
    // const diaNumero = spliteado[1];
    // const diaMes = spliteado[2];

    return (
        <View
            style={styles.container}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 30,
                    marginLeft: 30,
                    alignItems: 'center'
                }}
            >
                <Text
                    style={styles.textoArriba}
                >
                    ARTURO FARFAN GUILLEN
                </Text>

                <TouchableOpacity
                    onPress={()=> navigation.navigate("MedidasVista")}
                >
                    <View
                        style={{
                            backgroundColor: '#FFF843',
                            width: 55,
                            borderRadius: 8,
                            height: 60,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 30
                        }}
                    >
                        <Entypo name="plus" size={35} color="black" />
                    </View>
                </TouchableOpacity>
            </View>

            <View
                style={styles.contenedorDatos}
            >
                <View>
                    <Text
                        style={{
                            color: '#FFFFFF',
                            fontSize: 40,
                            fontWeight: '400',
                            marginTop: -10
                        }}
                    >
                        78
                    </Text>

                    <Text
                        style={styles.datosTexto}
                    >
                        Kg
                    </Text>
                </View>

                <View>
                    <Image
                        style={styles.imagenes}
                        source={require("../assets/cuerpo/Pecho.png")}
                    />

                    <Text
                        style={styles.datosTexto}
                    >
                        77.2cm
                    </Text>
                </View>

                <View>
                    <Image
                        style={styles.imagenes}
                        source={require("../assets/cuerpo/brazo.png")}
                    />

                    <Text
                        style={styles.datosTexto}
                    >
                        77.2cm
                    </Text>
                </View>

                <View>
                    <Image
                        style={styles.imagenes}
                        source={require("../assets/cuerpo/Cadera.png")}
                    />

                    <Text
                        style={styles.datosTexto}
                    >
                        77.2cm
                    </Text>
                </View>

                <View>
                    <Image
                        style={styles.imagenes}
                        source={require("../assets/cuerpo/Cintura.png")}
                    />

                    <Text
                        style={styles.datosTexto}
                    >
                        77.2cm
                    </Text>
                </View>

                {/* <View
                    style={styles.hoy}
                >
                    <Text
                        style={styles.datosTexto}
                    >           
                        {diaTexto}
                    </Text>
                    <Text
                        style={styles.diaNumero}
                    >
                        {diaNumero}
                    </Text>
                    <Text
                        style={styles.diaMes}
                    >
                        {diaMes}
                    </Text>
                </View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1B1B',
    },
    contenedorDatos: {
        height: 70,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 28,
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textoArriba: {
        color: '#FFF843',
        fontSize: 12,
    },
    imagenes: {
        width: 55,
        height: 55,
    },
    datosTexto: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '100',
        textAlign: 'center'
    },
    hoy: {
        height: 55,
        width: 55,
        backgroundColor: '#fff',
        color: '#FFF',
        borderWidth: 1,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: -73,
    },
    diaTexto: {
        flex: 2,
        fontSize: 25,
        color: "#FF0000",
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '500'
    },
    diaNumero: {
        flex: 1,
        color: "#000000",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 55,
        fontWeight: '700',
    },
    diaMes: {
        flex: 2,
        fontSize: 30,
        color: "#000000",
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '700'
    }
})

export default MedidasIns;