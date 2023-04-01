import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import React from "react";
import color from "../config/color";
import { useNavigation } from "@react-navigation/native";

const Header = ({ heading }) => {
  const nav = useNavigation();

  return (
    <TouchableNativeFeedback onPress={() => nav.openDrawer()}>
      <View style={styles.header}>
        <Text style={styles.contestantsText}> Miss Beauty Plus</Text>
        <Text style={styles.contestantsText2}>{heading}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contestantsText: {
    fontWeight: "900",
    fontSize: 40,
    color: color.darkWhite,
    position: "relative",
  },
  contestantsText2: {
    fontWeight: "900",
    fontSize: 15,
    color: color.bannerBackground,
    position: "absolute",
    letterSpacing: 6,
  },
});
