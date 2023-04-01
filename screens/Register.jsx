import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import Footer from "../components/Footer";
import aspectRatio from "../config/aspect-ratios";
import color from "../config/color";

export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showToast = () => {
    ToastAndroid.show("Registration Successfull !!!!!", ToastAndroid.SHORT);
  };
  const register = () => {
    showToast();
    console.log(name, phone, email, password);
    navigation.jumpTo("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image
          style={styles.logoImage}
          source={require("../assets/logo.jpg")}
        />

        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            placeholderTextColor={color.pink}
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Phone"
            placeholderTextColor={color.pink}
            onChangeText={(phone) => setPhone(phone)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor={color.pink}
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={color.pink}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={() => register()}>
          <Text style={styles.loginText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
    height: aspectRatio.fullheight,
  },
  form: {
    height: aspectRatio.ninetyH,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    height: aspectRatio.loginLogoHeight,
    width: aspectRatio.loginLogoWidth,
  },

  inputView: {
    backgroundColor: color.lightPink,
    borderRadius: 30,
    width: aspectRatio.loginInputFieldWidth,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  textInput: {
    height: 50,
    flex: 1,
    color: color.white,
  },
  forgot_div: {
    width: aspectRatio.loginInputFieldWidth,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgot_button: {
    marginBottom: 25,
    marginRight: 10,
    color: color.pink,
  },

  loginBtn: {
    width: aspectRatio.loginInputFieldWidth,
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: color.pink,
  },
  loginText: {
    color: color.white,
    fontWeight: "bold",
  },
});
