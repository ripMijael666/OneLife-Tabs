import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, FlatList } from "react-native";
// import WeekCalendar from "../components/week-calendar";

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
    // const [date, setDate] = useState(new Date());

    // const HoraInicio = [
    //     {
    //         hora: '07:00',
    //         id: '001'
    //     },
    //     {
    //         hora: '08:00',
    //         id: '002'
    //     }
    // ]
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
            <ScrollView 
                horizontal
                style={{
                    // height: 80,
                    // marginTop: 5
                }}
            >
                <View style={styles.calendario}>
                    <Text style={styles.fechadia}>LUN</Text>

                    <Text style={styles.fecha}
                    >
                        15
                    </Text>
                    <Text style={styles.mes}>
                        AGO
                    </Text>
                </View>
                <View style={styles.calendario}>
                    <Text style={styles.fechadia}>MAR</Text>

                    <Text
                        style={styles.fecha}
                    >
                        16
                    </Text>
                    <Text style={styles.mes}>
                        AGO
                    </Text>
                </View>
                <View style={styles.calendario}>
                    <Text style={styles.fechadia}>MIE</Text>

                    <Text
                        style={styles.fecha}
                    >
                        17
                    </Text>
                    <Text style={styles.mes}>
                        AGO
                    </Text>
                </View>
                <View style={styles.calendario}>
                    <Text style={styles.fechadia}>JUE</Text>

                    <Text
                        style={styles.fecha}
                    >
                        18
                    </Text>
                    <Text style={styles.mes}>
                        AGO
                    </Text>
                </View>
                <View style={styles.calendario}>
                    <Text style={styles.fechadia}>VIE</Text>

                    <Text
                        style={styles.fecha}
                    >
                        19
                    </Text>
                    <Text style={styles.mes}>
                        AGO
                    </Text>
                </View>
                <View style={styles.calendario}>
                    <Text style={styles.fechadia}>SAB</Text>

                    <Text
                        style={styles.fecha}
                    >
                        20
                    </Text>
                    <Text style={styles.mes}>
                        AGO
                    </Text>
                </View>
            </ScrollView>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1B1B',
        width: '100%',
        height: '100%',
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
        marginTop: 15
    },
    calendario: {
        flex: 1,
        height: 100,
        width: 100,
        borderColor: '#FFF843',
        borderWidth: 1,
        borderRadius: 14, 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    fechadia: {
        fontSize: 14,
        fontWeight: '150',
        color: '#FFF'
    },
    fecha: {
        fontSize: 38,
        fontWeight: '400',
        color: '#FFF',
    },
    mes:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: '300',
        marginVertical: -5
    }
});

export default Clases