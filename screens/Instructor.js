import React from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";




function Instructor(props) {
    const fecha = props.route.params.fechastring[0].date;
    var spliteado = fecha.split("-");
    const diaTexto = spliteado[0];
    const diaNumero = spliteado[1];
    const diaMes = spliteado[2];

    return(
        <ScrollView
            style={{
                width: '100%', 
                height: '100%',
                backgroundColor: '#1C1B1B',        
            }}
        >
            <View style={styles.container}>
                <View 
                    style={{ 
                        flex: 1, 
                        width: '100%', 
                        height: '100%',
                        backgroundColor: '#FFF843',         
                        justifyContent: 'center',
                        alignItems: 'center' 
                    }} 
                >
                </View>

                <View 
                    style={{ 
                        flex: 5, 
                        width: '100%', 
                        height: '100%',
                        backgroundColor: '#1C1B1B',        
                        alignItems: 'center', 
                        // justifyContent: 'center'
                    }} 
                >
                    <View
                        style={styles.hoy}
                    >
                        <Text
                            style={{
                                flex:2,
                                fontSize: 25,
                                color: "#FF0000",
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: '500'
                            }}
                        >
                           {diaTexto} 
                        </Text>
                        <Text
                            style={{
                                flex:1,
                                color: "#000000",
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: 55,
                                fontWeight: '700',
                            }}
                        >
                           {diaNumero} 
                        </Text>
                        <Text
                            style={{
                                flex:2,
                                fontSize: 30,
                                color: "#000000",
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: '700'
                            }}
                        >
                           {diaMes} 
                        </Text>
                    </View>
                        
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={styles.clase}
                        >
                            ZUMBA
                        </Text>
                        <Text
                            style={styles.clase}
                        >
                            Fitness
                        </Text>
                    </View>

                    <View
                        style={styles.encabezado}
                    >
                        <Image
                            style={{ 
                              width: 80 , 
                              height: 80 ,   
                              marginVertical: 40,
                              borderRadius: 100,
                              marginLeft: 40, 
                            }}
                            source={require("../assets/hola.png")}
                        />

                        <View
                            style={{
                                marginTop: 62,
                                marginLeft: 10
                            }}
                        >
                            <Text
                                style={{
                                    color: '#FFF843',
                                    fontWeight: '100'
                                }}
                            >
                                INSTRUCTOR
                            </Text>

                            <Text
                                style={{
                                    color: '#FFFFFF',
                                    fontWeight: '100'
                                }}
                            >
                                Fernando Valenzuela
                            </Text>
                        </View>        
                    </View>

                    <View
                        style={styles.containerHora}
                    >
                        <Text
                            style={styles.hora}
                        >
                            07:00
                        </Text>
                        <TextInput
                            style={styles.TextInput}
                        />
                        <Text
                            style={styles.hora}
                        >
                            08:00
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity
                            style={styles.boton}
                            onPress={()=> navigation.navigate("Home")}
                        >
                            <Text
                                style={styles.textoBoton}
                            >
                                RESERVAR
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#1C1B1B',        

    },
    hoy: {
        height: 140,
        width: 130,
        backgroundColor: '#fff',
        color: '#FFF',
        borderWidth: 1,
        borderRadius: 18, 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: -73,
    },
    clase: {
        fontSize: 50,
        fontWeight: '700',
        color: '#fff'
    },
    encabezado: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginTop: -10
    },
    containerHora: {
        marginTop: -12,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hora: {
        color: '#FFF',
        fontWeight: '100',
        fontSize: 35
    },
    TextInput: {
        width: 20,
        height: 85,
        backgroundColor: '#FFF843',
        borderRadius: 10
    },
    textoBoton: {
        textAlign: 'center',
        fontSize: 30,
        color: '#000',
        fontWeight: '500'
    },
    boton: {
        backgroundColor: "#FFF843",
        padding: 5,
        marginTop: '10%',
        width: 300,
        height: 60,
        alignSelf: 'center',
        borderRadius: 8,
        marginVertical: 60
    },
})


export default Instructor;