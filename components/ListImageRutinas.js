import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Image 
} from "react-native";
import { useNavigation } from '@react-navigation/native'




const ListImage = (item) => {
    const navigation = useNavigation();
    const { image } = item
    //  const COLORS = {
    //     white: '#FFFFFF',
    //     red: '#E90716',
      
    //   }
    // console.log(item);
    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity
                style={{
                    alignItems:'center',
                    justifyContent:'center',
                    textAlign: 'center',
                }}
                onPress={() => navigation.navigate("Rutinas")}
            >
                <View
                    style={{
                        alignContent: 'center',
                        alignItems: 'center',
                        // fontFamily: 'Dosis_200ExtraLight'
                    }}
                >
                    <Image
                        style={styles.image}
                        source={require("../assets/pecho_ejemplo.png")}
                    >
                    
                    </Image>
                    <Text
                        style={{
                            color: '#fff',
                            textAlign: 'left',
                            // fontFamily: 'Dosis_200ExtraLight'
                            
                        }}
                    >
                        Apertura en máquina contractora
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1B1B',
        flex: 1,
        marginBottom: '2%',
        // padding: '10pt',    
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    image: {
        width: 150, 
        height: 220,
        borderRadius: 8,
    },
    titulo: {
        paddingHorizontal: 32,
        paddingVertical: 27,
        fontSize: 55,
        color: '#fff',
        // fontFamily: 'Dosis_400Regular'
      }
});

export default ListImage