import React from "react";
import { View, Text, StyleSheet } from "react-native";




function Instructor() {
    return(
        <View style={styles.container}>
            <View style={{ flex: 1, width: '100%', backgroundColor: '#FFF843',         justifyContent: 'center',
        alignItems: 'center' }} >
                <Text>
                    Hola
                </Text>
            </View>
            <View style={{ flex: 4, width: '100%', backgroundColor: '#1C1B1B',        
            // justifyContent: 'center',
        alignItems: 'center', 
    }} 
            >
                <Text
                    style= {{
                        marginTop: -20
                    }}
                >
                    hola
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }

})


export default Instructor 