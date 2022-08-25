import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from "react-native";
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

    const flatlistRef = useRef()

    const scrollToIndex = () => {
        console.log('scroll to index called !')
        let index = 3
        flatlistRef.current.scrollToIndex({ animated: true, index: index })
    }
    const listaHora = [
        {
            id: '0',
            horaInicio: '07:00',
            horaFinal: '08:00'
        },

        {
            id: '1',
            horaInicio: '07:00',
            horaFinal: '08:00'
        },

        {
            id: '2',
            horaInicio: '07:00',
            horaFinal: '08:00'
        },

        {
            id: '3',
            horaInicio: '07:00',
            horaFinal: '08:00'
        },

        {
            id: '4',
            horaInicio: '07:00',
            horaFinal: '08:00'
        },

        {
            id: '5',
            horaInicio: '07:00',
            horaFinal: '08:00'
        },

        {
            id: '6',
            horaInicio: '07:00',
            horaFinal: '08:00'
        },
    ]

    const [listaClases, setListaClases] = useState( [
        {
            id: '0',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '1',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '2',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '3',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '4',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '5',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '6',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },
    ]);


    const listaClases2 = [
        {
            id: '0',
            nombre: '222 Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '1',
            nombre: '222 Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '2',
            nombre: '2222 Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '3',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '4',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '5',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '6',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },
    ];

    const listaClases3 = [
        {
            id: '0',
            nombre: '12131 Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '1',
            nombre: '12312313 Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '2',
            nombre: '1312313 Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '3',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '4',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '5',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },

        {
            id: '6',
            nombre: 'ZUMBA Fitness',
            instructor: 'Fernando Valenzuela'
        },
    ];


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

    const classesByDay = async (fechaString) => {

        if(fechaString == "MIE-24-AGO"){
            setListaClases(listaClases2);
        }

        if(fechaString == "JUE-25-AGO"){
            setListaClases(listaClases3);
        }

        try {
        
            const response = await fetch(
              'https://reqres.in/api/users?page=' + fechaString,
              {
                // method: 'POST',
                // body: data
                method: 'GET'
              }
            );
            const json = await response.json();
            // console.log(json);

            var listaDevuelta = [];
            json.data.forEach(element => {
                listaDevuelta.push({ "id" : element.id, "nombre" : element.first_name, "instructor" : element.email});
            });

            setListaClases(listaDevuelta);
        
          } catch (error) {
            console.error(error);
          }
      
    }


    return (
        <View
            style={styles.container}
        >
            <View>
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
                    ref={flatlistRef}
                    data={arregloDias}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {

                        var spliteado = item.date.split("-");
                        var fechaActual = new Date();
                        var fechastring = formatDate(fechaActual);

                        return (
                            item.date == fechastring ?(
                            <TouchableOpacity onPress={() => { 
                                classesByDay(parseInt(item.id) +1);
                                flatlistRef.current.scrollToIndex({ animated: true, index: parseInt(item.id) })
                            }}><View
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
                            </View></TouchableOpacity> ) : (<>
                                <TouchableOpacity 
                                onPress={() => { 
                                    classesByDay(parseInt(item.id));
                                    flatlistRef.current.scrollToIndex({ animated: true, index: parseInt(item.id) })
                                }}><View
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
                                        fontWeight: '400',
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
                            </View></TouchableOpacity> </>)
                        )

                    }
                    }
                />

                <View
                    style= {{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <FlatList
                        data={listaHora}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <View
                                style={styles.containerHora}
                            >

                                <Text
                                    style={styles.hora}
                                >
                                    {item.horaInicio}
                                </Text>

                                <View
                                    style={styles.TextInput}
                                />

                                <Text
                                    style={styles.hora}
                                >
                                    {item.horaFinal}
                                </Text>
                            </View>
                        }
                    />

                    <FlatList
                        data={listaClases}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={styles.TouchableOpacity}
                                onPress={() => navigation.navigate("Instructor", {fechastring: arregloDias})}
                            >
                                <View
                                    style={styles.containerText}
                                >
                                    <Text
                                        style={styles.texto1}
                                    >
                                        {item.nombre}
                                    </Text>

                                    <Text
                                        style={styles.texto2}
                                    >
                                        {item.instructor}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </View>
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
        textAlign: 'left',
        padding: 5
    },
    texto1: {
        color: '#FFF843',
        fontSize: 25,
        fontWeight: '500',
        paddingRight: '20%',
        padding: 5
    },
    containerText: {
        flex: 1,
        height: 80,
        borderColor: '#FFF843',
        borderWidth: 1,
        borderRadius: 12,
        marginLeft: 5,
        marginRight: 18,
        marginTop: 28
    },
    containerHora: {
        marginTop: 28,
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
        width: 90,
        borderColor: '#FFF843',
        color: '#FFF',
        borderWidth: 1,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20
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