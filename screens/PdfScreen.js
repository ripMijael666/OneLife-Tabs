import React from "react";
import { View, Text, StyleSheet } from "react-native";

// import { WebView } from 'react-native-webview';



// import { useFonts,
//     Dosis_200ExtraLight,
//     Dosis_300Light,
//     Dosis_400Regular,
//     Dosis_500Medium,
//     Dosis_600SemiBold,
//     Dosis_700Bold,
//     Dosis_800ExtraBold 
//   } from '@expo-google-fonts/dosis'

const PdfScreen = () => {
    
//   let [fontsLoaded] = useFonts({
//     Dosis_200ExtraLight,
//     Dosis_300Light,
//     Dosis_400Regular,
//     Dosis_500Medium,
//     Dosis_600SemiBold,
//     Dosis_700Bold,
//     Dosis_800ExtraBold 
//   });
    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.subtitulo}
            >
                Pecho • Apertuara de máquina contractora
            </Text>

            <View>
                {/* <WebView source={{ uri:"https://google.com" }} /> */}
                <Text
                    style={{
                        color: '#fff'
                    }}
                >
                    pdf
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1B1B',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitulo: {
        color: '#FFF843',
        // fontFamily: 'Dosis_200ExtraLight',
        padding: '7%',
        fontSize: 18,
        textAlign: 'center',
    }
})

export default PdfScreen



// /**
//  * Copyright (c) 2017-present, Wonday (@wonday.org)
//  * All rights reserved.
//  *
//  * This source code is licensed under the MIT-style license found in the
//  * LICENSE file in the root directory of this source tree.
//  */

//  import React from 'react';
//  import { StyleSheet, Dimensions, View } from 'react-native';
//  import Pdf from 'react-native-pdf';
 
//  export default class PdfScreen extends React.Component {
//      render() {
//          const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
//          //const source = require('./test.pdf');  // ios only
//          //const source = {uri:'bundle-assets://test.pdf' };
//          //const source = {uri:'file:///sdcard/test.pdf'};
//          //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
//          //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
//          //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};
 
//          return (
//              <View style={styles.container}>
//                  <Pdf
//                      source={source}
//                      onLoadComplete={(numberOfPages,filePath) => {
//                          console.log(`Number of pages: ${numberOfPages}`);
//                      }}
//                      onPageChanged={(page,numberOfPages) => {
//                          console.log(`Current page: ${page}`);
//                      }}
//                      onError={(error) => {
//                          console.log(error);
//                      }}
//                      onPressLink={(uri) => {
//                          console.log(`Link pressed: ${uri}`);
//                      }}
//                      style={styles.pdf}/>
//              </View>
//          )
//      }
//  }
 
//  const styles = StyleSheet.create({
//      container: {
//          flex: 1,
//          justifyContent: 'flex-start',
//          alignItems: 'center',
//          marginTop: 25,
//      },
//      pdf: {
//          flex:1,
//          width:Dimensions.get('window').width,
//          height:Dimensions.get('window').height,
//      }
//  });