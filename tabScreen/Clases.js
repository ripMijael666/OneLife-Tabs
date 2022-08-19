import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import { useFonts,
//     Dosis_200ExtraLight,
//     Dosis_300Light,
//     Dosis_400Regular,
//     Dosis_500Medium,
//     Dosis_600SemiBold,
//     Dosis_700Bold,
//     Dosis_800ExtraBold 
//   } from '@expo-google-fonts/dosis'

const Clases = () => {
    const navigation = useNavigation();
    const [arregloDias, setArregloDias] = useState([])
    const formatDate = (date) => {
        let d = new Date(date);
        let month = d.getMonth();
        let day = d.getDate();
        let dayTexto = d.getDay();
        if (day.length < 2) {
          day = '0' + day;
        }
        let semana = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];
        let diaSemana = semana[dayTexto];


        let mes = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
        let mesAnyo = mes[month];

        return [diaSemana, day, mesAnyo].join("-");
    }
    React.useEffect(() => {


        const hoy = new Date();        
        
        var arregloDiasA = [];
        const currentDay = hoy.getDate();

        for (let i = 0; i < 7; i++) {
            arregloDiasA.push( { "id" : i, "date" :  formatDate(hoy.setDate( currentDay+ i))  } );            
        }

        setArregloDias(arregloDiasA);
      },[]
    );

    return (
        <View
            style={styles.container}
        >
            <ScrollView>
                <View
                    style={styles.encabezado}
                >
                    <Text
                        style={styles.titulo}
                    > 
                        Clases
                    </Text>

                    <Text
                        style={styles.ciudad}
                    >
                        Ciudad: CBBA    
                    </Text>
                </View>
                  

                <FlatList
                    horizontal
                    data={arregloDias}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {

                        var spliteado = item.date.split("-");
                        var fechaActual = new Date();
                        var fechastring = formatDate(fechaActual);

                        return (
                            item.date == fechastring ?
                            (<View 
                                style={styles.hoy}
                            >

                                <Text
                                    style={{
                                        flex:2,

                                        fontSize: 15,
                                        color: "#FF0000",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontWeight: '500'
                                    }}
                                >
                                    {spliteado[0]}
                                </Text>

                                <Text
                                    style={{
                                        flex:1,

                                        color: "#000000",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: 45,
                                        fontWeight: '700',
                                    }}
                                >
                                    {spliteado[1]}
                                </Text>

                                <Text
                                    style={{
                                        flex:2,

                                        fontSize: 20,
                                        color: "#000000",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontWeight: '700'
                                    }}
                                >
                                    {spliteado[2]}
                                </Text>
                            </View>) : (<><View 
                                style={styles.calendario}
                            >

                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: "#FFF",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontWeight: '100'
                                    }}
                                >
                                    {spliteado[0]}
                                </Text>

                                <Text
                                    style={{
                                        color: "#FFF",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: 38,
                                        fontWeight: '400'
                                    }}
                                >
                                    {spliteado[1]}
                                </Text>

                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: "#FFF",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontWeight: '300'
                                    }}
                                >
                                    {spliteado[2]}
                                </Text>
                            </View></>)
                        )

                    }
                    }
                />

                <View
                    style={styles.clasesContainer}
                >
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

                    <TouchableOpacity
                        style={styles.TouchableOpacity}
                        onPress={() => navigation.navigate("Instructor")}
                    >
                        <View
                            style={styles.containerText}
                        >
                                <Text
                                    style={styles.texto1}
                                >
                                    ZUMBA Fitness
                                </Text>
                                <Text
                                    style={styles.texto2}
                                >
                                    Fernando Valenzuela
                                </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={styles.clasesContainer}
                >
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

                    <TouchableOpacity
                        style={styles.TouchableOpacity}
                        onPress={() => navigation.navigate("Instructor")}
                    >
                        <View
                            style={styles.containerText}
                        >
                                <Text
                                    style={styles.texto1}
                                >
                                    ZUMBA Fitness
                                </Text>
                                <Text
                                    style={styles.texto2}
                                >
                                    Fernando Valenzuela
                                </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={styles.clasesContainer}
                >
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

                    <TouchableOpacity
                        style={styles.TouchableOpacity}
                        onPress={() => navigation.navigate("Instructor")}
                    >
                        <View
                            style={styles.containerText}
                        >
                                <Text
                                    style={styles.texto1}
                                >
                                    ZUMBA Fitness
                                </Text>
                                <Text
                                    style={styles.texto2}
                                >
                                    Fernando Valenzuela
                                </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={styles.clasesContainer}
                >
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

                    <TouchableOpacity
                        style={styles.TouchableOpacity}
                        onPress={() => navigation.navigate("Instructor")}
                    >
                        <View
                            style={styles.containerText}
                        >
                                <Text
                                    style={styles.texto1}
                                >
                                    ZUMBA Fitness
                                </Text>
                                <Text
                                    style={styles.texto2}
                                >
                                    Fernando Valenzuela
                                </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={styles.clasesContainer}
                >
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

                    <TouchableOpacity
                        style={styles.TouchableOpacity}
                        onPress={() => navigation.navigate("Instructor")}
                    >
                        <View
                            style={styles.containerText}
                        >
                                <Text
                                    style={styles.texto1}
                                >
                                    ZUMBA Fitness
                                </Text>
                                <Text
                                    style={styles.texto2}
                                >
                                    Fernando Valenzuela
                                </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    TouchableOpacity: {
        flex: 1,
    },
    TextInput: {
        width: 8,
        height: 35,
        backgroundColor: '#FFF843',
        borderRadius: 12
    },
    clasesContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    texto2: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '100',
        paddingRight: '35%'
    }, 
    texto1: {
        color: '#FFF843',
        fontSize: 25,
        fontWeight: '500',
        paddingRight: '20%'
    },  
    containerText: {
        flex: 1,
        height: 80,
        // width: 0,
        borderColor: '#FFF843',
        borderWidth: 1,
        borderRadius: 12, 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
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
    container: {
        flex: 1,
        backgroundColor: '#1C1B1B',
    },
    titulo: {
        paddingHorizontal: 32,
        paddingVertical: 27,
        fontSize: 50,
        color: '#fff',
        // fontFamily: 'Dosis_400Regular'
    },
    encabezado: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginTop: 5,
    },
    ciudad: {
        color: '#FFF843',
        fontSize: 18,
        // fontFamily: 'Dosis_200ExtraLight',
        textAlign: "right",
        marginRight: 20,
        marginTop: 60
    },
    calendario: {
        flex: 1,
        height: 90,
        width: 80,
        borderColor: '#FFF843',
        color: '#FFF',
        borderWidth: 1,
        borderRadius: 18, 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 25
    },
    hoy: {
        flex: 1,
        height: 110,
        width: 110,
        backgroundColor: '#fff',
        color: '#FFF',
        borderWidth: 1,
        borderRadius: 18, 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 13,
    },
});

export default Clases