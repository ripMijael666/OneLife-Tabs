import React, { useEffect } from "react";
import { Context as AuthContext } from '../context/AuthContext';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  Alert
} from "react-native";

function LogIn() {

  const [email, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signIn } = React.useContext(AuthContext);

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#1C1B1B'
      }}
    >
      <ImageBackground
        style={styles.fondo}
        source={require('../assets/enmascarar_grupo_7.png')}
        resizeMode='cover'
      >
        <Image
          style={{
            width: 200,
            height: 94,
            marginTop: 30,
            marginVertical: 100
          }}
          source={require("../assets/grupo_7.png")}
        />
        <View
          style={styles.container}
        >
          <View
            style={styles.login}
          >
            <View
              style={{
                marginVertical: 40
              }}
            >
              <Text
                style={styles.texto}
              >
                Nombre de Usuario
              </Text>
              <TextInput
                value={email}
                onChangeText={setUsername}
                style={styles.input}
              />
            </View>

            <Text
              style={styles.texto}
            >
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
            />
          </View>
          <TouchableOpacity
            style={styles.boton}
            title="Sign in"
            onPress={() => signIn({ email, password })}
          >
            <Text
              style={styles.textoBoton}
            >
              INGRESAR
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default LogIn;

const styles = StyleSheet.create({
  login: {
    // justifyContent: 'left',
    // alignItems: 'left',
    // textAlign: 'left',
  },
  container: {
    textAlign: 'center',
    backgroundColor: '#1C1B1B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'left',
  },
  fondo: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    borderRadius: 8,
    width: 300,
    height: 60,
    borderWidth: 1,
    borderColor: '#FFF843',
    color: '#fff',
  },
  boton: {
    backgroundColor: "#FFF843",
    padding: 5,
    marginTop: '10%',
    width: 300,
    height: 60,
    alignSelf: 'center',
    borderRadius: 8,
  },
  textoBoton: {
    textAlign: 'center',
    fontSize: 30,
    color: '#000',
  }
});