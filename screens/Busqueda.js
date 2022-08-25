import React from "react";
import { View, TextInput, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


function Busqueda() {
    const navigation = useNavigation();
    return (
        <View
            style={styles.container}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 30,
                    marginLeft: 30
                }}
            >
                <Text
                    style={styles.textoArriba}
                >
                    CI:13994995
                </Text>

                <Text
                    style={styles.textoArriba}
                >
                    Ciudad:LP
                </Text>
            </View>


            <TouchableOpacity
                onPress={() => navigation.navigate("MedidasIns")}
            >
                <View
                    style={styles.contenedorDatos}
                >
                    <View
                        style={{
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={styles.texto1}
                        >
                            ARTURO FARFAN GUILLEN
                        </Text>

                        <Text
                            style={styles.texto2}
                        >
                            1855805 ● TARIJA
                        </Text>
                    </View>

                    <View
                        style={styles.containerFoto}
                    >
                        <Image
                            style={styles.foto}
                            source={require("../assets/img_busque.png")}
                        />
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MedidasIns")}
            >
                <View
                    style={styles.contenedorDatos}
                >
                    <View
                        style={{
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={styles.texto1}
                        >
                            ARTURO FARFAN GUILLEN
                        </Text>

                        <Text
                            style={styles.texto2}
                        >
                            1855805 ● TARIJA
                        </Text>
                    </View>

                    <View
                        style={styles.containerFoto}
                    >
                        <Image
                            style={styles.foto}
                            source={require("../assets/img_busque.png")}
                        />
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MedidasIns")}
            >
                <View
                    style={styles.contenedorDatos}
                >
                    <View
                        style={{
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={styles.texto1}
                        >
                            ARTURO FARFAN GUILLEN
                        </Text>

                        <Text
                            style={styles.texto2}
                        >
                            1855805 ● TARIJA
                        </Text>
                    </View>

                    <View
                        style={styles.containerFoto}
                    >
                        <Image
                            style={styles.foto}
                            source={require("../assets/img_busque.png")}
                        />
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MedidasIns")}
            >
                <View
                    style={styles.contenedorDatos}
                >
                    <View
                        style={{
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={styles.texto1}
                        >
                            ARTURO FARFAN GUILLEN
                        </Text>

                        <Text
                            style={styles.texto2}
                        >
                            1855805 ● TARIJA
                        </Text>
                    </View>

                    <View
                        style={styles.containerFoto}
                    >
                        <Image
                            style={styles.foto}
                            source={require("../assets/img_busque.png")}
                        />
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MedidasIns")}
            >
                <View
                    style={styles.contenedorDatos}
                >
                    <View
                        style={{
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={styles.texto1}
                        >
                            ARTURO FARFAN GUILLEN
                        </Text>

                        <Text
                            style={styles.texto2}
                        >
                            1855805 ● TARIJA
                        </Text>
                    </View>

                    <View
                        style={styles.containerFoto}
                    >
                        <Image
                            style={styles.foto}
                            source={require("../assets/img_busque.png")}
                        />
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1B1B'
    },
    textoArriba: {
        color: '#FFF843',
        fontSize: 12,
    },
    contenedorDatos: {
        height: 70,
        borderColor: '#FFF843',
        borderWidth: 1,
        borderRadius: 12,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 28,
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    texto1: {
        color: '#FFF843',
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 12,
    },
    texto2: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '100',
        marginLeft: 12,
    },
    containerFoto: {

    },
    foto: {
        height: 70,
        width: 50,
        borderRadius: 12
    },
})

export default Busqueda;