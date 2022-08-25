import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MedidasVista() {
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
                    onPress={() => navigation.navigate("MedidasVista")}
                >
                    <View
                        style={{
                            backgroundColor: '#FFFF',
                            width: 55,
                            borderRadius: 8,
                            height: 60,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 30
                        }}
                    >
                        {/* <Entypo name="plus" size={35} color="black" /> */}
                    </View>
                </TouchableOpacity>
            </View>

            <View
                style={styles.contenedorDos}
            >
                <View
                    style={styles.pesoYaltura}
                >
                    <Text
                        style={styles.textoUno}
                    >
                        177.89 Kg
                    </Text>
                    <Text
                        style={styles.textoDos}
                    >
                        Peso
                    </Text>
                </View>

                <View
                    style={styles.pesoYaltura}
                >
                    <Text
                        style={styles.textoUno}
                    >
                        177.57 cm
                    </Text>
                    <Text
                        style={styles.textoDos}
                    >
                        Altura
                    </Text>
                </View>
            </View>

            <View
                style={styles.contenedorDos}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("Pecho")}
                >

                    <View
                        style={styles.contenedorImagenes}
                    >
                        <Image
                            style={styles.Imagenes}

                            source={require("../assets/cuerpo/Pecho.png")}
                        />
                        <Text
                            style={styles.ParteCuerpo}
                        >
                            Pecho
                        </Text>

                        <Text
                            style={styles.medidasCuerpo}
                        >
                            77.2 cm
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Bicep")}
                >

                    <View
                        style={styles.contenedorImagenes}
                    >
                        <Image
                            style={styles.Imagenes}

                            source={require("../assets/cuerpo/brazo.png")}
                        />
                        <Text
                            style={styles.ParteCuerpo}
                        >
                            Bicep
                        </Text>

                        <Text
                            style={styles.medidasCuerpo}
                        >
                            77.2 cm
                        </Text>
                    </View>
                </TouchableOpacity>


            </View>

            <View
                style={styles.contenedorDos}
            >

                <TouchableOpacity
                    onPress={() => navigation.navigate("Cintura")}
                >

                    <View
                        style={styles.contenedorImagenes}
                    >
                        <Image
                            style={styles.Imagenes}

                            source={require("../assets/cuerpo/Cintura.png")}
                        />
                        <Text
                            style={styles.ParteCuerpo}
                        >
                            Cintura
                        </Text>

                        <Text
                            style={styles.medidasCuerpo}
                        >
                            77.2 cm
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Cadera")}
                >

                    <View
                        style={styles.contenedorImagenes}
                    >
                        <Image
                            style={styles.Imagenes}

                            source={require("../assets/cuerpo/Cadera.png")}
                        />
                        <Text
                            style={styles.ParteCuerpo}
                        >
                            Cadera
                        </Text>

                        <Text
                            style={styles.medidasCuerpo}
                        >
                            77.2 cm
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
<View
    style= {{
        justifyContent: 'center',
        alignItems: 'center',
    }}
>
    <TouchableOpacity
        onPress={()=> navigation.navigate("MedidasIns")}
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1B1B',
    },
    textoArriba: {
        color: '#FFF843',
        fontSize: 12,
    },
    pesoYaltura: {
        borderRadius: 12,
        height: 65,
        width: 155,
        backgroundColor: '#212529',
        justifyContent: 'center',
    },
    textoUno: {
        color: '#FFF843',
        fontSize: 25,
        fontWeight: '600',
        marginLeft: 15
    },
    textoDos: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '100',
        marginLeft: 15
    },
    contenedorDos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 40,
        marginLeft: 40,
        marginTop: 45,
        alignItems: 'center'
    },
    contenedorImagenes: {
        flex: 1,
        borderRadius: 12,
        borderColor: '#FFF843',
        width: 155,
        height: 165,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10
    },
    Imagenes: {
        width: 100,
        height: 100
    },
    ParteCuerpo: {
        textAlign: 'center',
        color: '#FFFF',
        fontSize: 22,
        fontWeight: '300'
    },
    medidasCuerpo: {
        textAlign: 'center',
        color: '#FFF843',
        fontSize: 18,
        fontWeight: '100'
    }
})

export default MedidasVista;