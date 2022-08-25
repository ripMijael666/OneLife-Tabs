import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    TextInput
} from "react-native";

import { Entypo } from '@expo/vector-icons';
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';


const NuevoHome = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={styles.container}
        >
            <ScrollView>

                <View
                    style={styles.encabezado}
                >
                    <View
                        style={styles.start}
                    >
                        <TouchableOpacity
                        // onPress={() => signOut( )}
                        >
                            <Image
                                style={{
                                    width: 112,
                                    height: 53,
                                    marginVertical: 40,
                                    marginLeft: 40,
                                }}
                                source={require("../assets/img/marca.png")}
                            />
                        </TouchableOpacity>
                    </View>

                    <View
                        style={styles.end}
                    >
                        <Image
                            style={{
                                width: 90,
                                height: 90,
                                marginTop: 40,
                                marginRight: 30
                            }}
                            source={require("../assets/img/perfil.png")}
                        />

                    </View>
                </View>

                <View
                    style={styles.body}
                >
                    <Text
                        style={styles.nombreUsuario}
                    >
                        Juan Aguilar
                    </Text>

                    <Text
                        style={styles.estadoUsuario}
                    >
                        Estado: Activo
                    </Text>
                </View>


                <View
                    style={{
                        backgroundColor: '#262323',
                        marginTop: 45,
                        height: 150,
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={styles.rendimiento}
                    >
                        Buscar cliente
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical:12
                        }}
                    >
                        <TextInput 
                            keyboardType="number-pad"
                            style={styles.input}
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Busqueda")}
                        >
                            <View
                                style={{
                                    backgroundColor: '#FFF843',
                                    width: 55,
                                    borderRadius: 12,
                                    height: 60,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 30
                                }}
                            >
                                <Image
                                    style={{
                                        width: 30,
                                        height: 30,
                                    }}
                                    source={require("../assets/buscar.png")}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View
                    style={styles.medidor}
                >
                    <Text
                        style={styles.rendimiento}
                    >
                        Mediciones realizadas
                    </Text>
                </View>

                <View
                >
                    <BarChart
                        data={{
                            labels: [
                                "17/Ene",
                                "23/Feb",
                                "20/Mar",
                                "10/Abr",
                                "15/May",
                                "18/Jun"
                            ],
                            datasets: [{
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                ]
                            }]
                        }}
                        width={
                            Dimensions.get("window").width
                        }
                        height={210}
                        yAxisSuffix="kg"
                        yAxisInterval={1}
                        chartConfig={{
                            backgroundColor: "#262323",
                            backgroundGradientFrom: "#262323",
                            backgroundGradientTo: "#262323",
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 20,
                            },
                            propsForDots: {
                                r: "4",
                                strokeWidth: "1",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 5,
                            borderRadius: 12,
                            marginTop: 15,
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    input: {
        fontSize: 35,
        textAlign: 'left',
        borderRadius: 12,
        width: 250,
        height: 60,
        borderWidth: 2,
        borderColor: '#FFF843',
        color: '#1C1B1B',
        backgroundColor: '#D9D9D9',
        marginLeft: 30
    },
    clasesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerHora: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hora: {
        color: '#FFF',
        fontWeight: '100',
        fontSize: 15
    },
    TouchableOpacity: {
        flex: 1,
    },
    containerText: {
        flex: 1,
        height: 180,
        // width: 0,
        borderColor: '#FFF843',
        borderWidth: 1,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    texto2: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '100',
        paddingRight: '35%'
    },
    TextInput: {
        width: 8,
        height: 35,
        backgroundColor: '#FFF843',
        borderRadius: 12
    },
    texto1: {
        color: '#FFF843',
        fontSize: 25,
        fontWeight: '500',
        paddingRight: '20%'
    },
    container: {
        flex: 1,
        backgroundColor: '#1C1B1B',
    },
    encabezado: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 55
    },
    body: {
        flex: 1,
        // display: 'grid',
        // gridTemplateColumns: '100%'
    },
    titulo: {
        paddingHorizontal: 35,
        paddingVertical: -130,
        fontSize: 55,
        color: '#fff',
        // fontFamily: 'Dosis_400Regular'
    },
    Reserva: {
        paddingHorizontal: 35,
        paddingVertical: -130,
        fontSize: 48,
        color: '#fff',
        // fontFamily: 'Dosis_400Regular'
    },
    nombreUsuario: {
        color: '#FFF843',
        fontSize: 30,
        paddingHorizontal: 35,
        // fontFamily: 'Dosis_200ExtraLight'
    },
    estadoUsuario: {
        color: '#FFF843',
        fontSize: 18,
        paddingHorizontal: 35,
        // fontFamily: 'Dosis_200ExtraLight'  
    },

    numeroSesion: {
        color: '#FFF843',
        fontSize: 135,
        // fontFamily: 'Dosis_300Light',
        textAlign: "center",
    },
    sesiones: {
        color: '#fff',
        fontSize: 18,
        // fontFamily: 'Dosis_200ExtraLight',
        textAlign: "center",
    },
    fecha: {
        color: '#FFF843',
        fontSize: 19,
        // fontFamily: 'Dosis_200ExtraLight',
        textAlign: "center",
    },
    medidor: {
        // display: 'grid',
        marginTop: 30,
        // marginBottom: '9pt',
        // gridTemplateColumns: '70% 30%'
    },
    rendimiento: {
        color: '#fff',
        fontSize: 15,
        // fontFamily: 'Dosis_200ExtraLight',
        textAlign: "left",
        marginLeft: 30
    },
    ver: {
        color: '#FFF843',
        fontSize: 15,
        // fontFamily: 'Dosis_200ExtraLight',
        textAlign: "right",
        marginRight: 20,
        marginTop: -18
    },
    ver2: {
        color: '#FFF843',
        fontSize: 15,
        // fontFamily: 'Dosis_200ExtraLight',
        textAlign: "right",
        marginRight: 20,
        marginTop: 35
    },
    start: {
        textAlign: 'left'
    },
    end: {
        alignItems: 'flex-end'
    },
});


export default NuevoHome;
