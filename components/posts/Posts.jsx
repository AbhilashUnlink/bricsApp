import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import USERS from "../../data/users";
import EngagementButtonComponent from "../EngagementButtonComponent";
import color from "../../config/color";
import aspectRatio from "../../config/aspect-ratios";

const Trending = () => {
  return (
    <View style={styles.container}>

      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {USERS.map((user, index) => (
          <View key={index} style={styles.userStory}>
            <View style={styles.userWrapper}>
              <Image
                style={styles.story}
                source={require("../../assets/374australia.jpg")}
              />
              <View style={styles.engagementButtons}>
                <EngagementButtonComponent post={user} key={index} />
              </View>
              <Text style={styles.userName}>Lora de Caprio</Text>
              <Text style={styles.userCountry}>London</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    width: aspectRatio.windowWidth,
    height: aspectRatio.fullheight,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: color.darkWhite,
  },
  userStory: {
    // border: 5,
    padding: 10,
    // borderColor: "red",
    width: aspectRatio.fullwidth,
  },
  userWrapper: {
    width: aspectRatio.fullwidth,
    marginBottom: 30,
    position: "relative",
    alignItems: "center",
  },
  engagementButtons: {
    width: aspectRatio.fullwidth,
    marginBottom: 30,
    position: "absolute",
    top: 20,
    // Abhishek se help lo
    right: -110,
  },
  userName: {
    fontWeight: "900",
    fontSize: 20,
    color: color.bannerBackground,
  },
  userCountry: {},

  story: {
    width: aspectRatio.eighty,
    height: aspectRatio.fullwidth,
    resizeMode: "contain",
    border: 20,
    borderColor: "red",
    borderRadius: 8,

    margin: 3,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  storytext: {
    color: color.white,
    textAlign: "left",
  },

  like: {
    position: "absolute",
    top: 30,
    right: 20,
    zIndex: 1,
  },
});

export default Trending;
