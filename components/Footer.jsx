import { View, Text, StyleSheet } from "react-native";
import React from "react";
import color from "../config/color";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={{ color: color.pink }}>Powered By</Text>
      <Text style={{ color: color.bannerBackground }}>Unlink Technologies</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    backgroundColor: color.white,
  },
});
