// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import color from "../config/color";
import aspectRatio from "../config/aspect-ratios";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar__clicked}>
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color={color.bannerBackground}
          style={{ paddingLeft: 50, paddingRight: 20 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholderTextColor={color.bannerBackground}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked ? (
          <Entypo
            name="cross"
            size={20}
            color={color.bannerBackground}
            style={{ paddingRight: 50 }}
            onPress={() => {
              setSearchPhrase("");
              setClicked(false);
            }}
          />
        ) : (
          <Entypo
            // name="dots-three-horizontal"
            name="chevron-right"
            size={20}
            color={color.bannerBackground}
            style={{ paddingRight: 50 }}
            onPress={() => {
              // We can add some dropdown for selecting a specific country
              // or we can add a go button
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: aspectRatio.ninety,
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: aspectRatio.ninety,
    backgroundColor: color.darkWhite,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    paddingLeft: 30,
    width: aspectRatio.ninety,
    color: color.bannerBackground,
  },
});
