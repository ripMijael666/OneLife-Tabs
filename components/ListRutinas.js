import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from "react-native";
import { useNavigation } from '@react-navigation/native'

import { useFonts,
    Dosis_200ExtraLight,
    Dosis_300Light,
    Dosis_400Regular,
    Dosis_500Medium,
    Dosis_600SemiBold,
    Dosis_700Bold,
    Dosis_800ExtraBold 
  } from '@expo-google-fonts/dosis'

const ListRutinas = (item) => {
    const navigation = useNavigation();

    const { nombre } = item
    // console.log(item);
    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate("RutinasScreen")}
                style={{
                    alignItems:'center',
                    justifyContent:'center',
                    textAlign: 'center',
                }}

            >
                <Text
                    style={styles.textList}
                > { item.item.nombre } </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1B1B',
        flex: 1,
        marginBottom: 10,
        padding: 3,    
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textList: {
        // paddingVertical: '21pt',
        backgroundColor: '#262323',
        paddingTop:'16%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 21,
        // borderRadius: 8,
        width: 130,
        height: 69,
        color: '#FFF843',
        fontFamily: 'Dosis_200ExtraLight',
    }
});

export default ListRutinas