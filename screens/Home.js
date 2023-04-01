import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import Posts from "../components/posts/Posts";
import color from "../config/color";
import aspectRatio from "../config/aspect-ratios";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import Header from "../components/Header";
const windowWidth = Dimensions.get("window").width;

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const nav = useNavigation();
  console.log(clicked, searchPhrase);
  return (
    <View style={styles.container}>
  
        <Header heading={"CONTESTENTS"} />

      {/* Search */}
      <SearchBar
        clicked={clicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked}
      />

      {/* Posts  */}

      <Posts />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
    width: windowWidth,
    height: aspectRatio.fullheight,
    marginTop: 30,
  },
});

// help content
{
  /* <Button title="Close" onPress={() => nav.closeDrawer()} /> */
}
{
  /* <Button title="Toggle" onPress={() => nav.toggleDrawer()} /> */
}
{
  /* <Button title="Go to settings" onPress={() => nav.navigate("Settings")} /> */
}
// import { useDrawerStatus } from "@react-navigation/drawer";

//   const drawerStatus = useDrawerStatus();
// console.log(drawerStatus);

// <View style={styles.buttons}>
//   <Button title="Login" onPress={() => nav.openDrawer()} />

//   <Button title="Register" onPress={() => nav.openDrawer()} />
// </View>;

//         buttons: {
//   display: "flex",
//   flexDirection: "row",
//   width: windowWidth,
//   justifyContent: "space-around",
// },
