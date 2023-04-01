import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import color from "../config/color";
import aspectRatio from "../config/aspect-ratios";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Header from "../components/Header";
import Footer from "../components/Footer";
const windowWidth = Dimensions.get("window").width;

export default function Home() {
  const nav = useNavigation();

  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ position: "relative" }}>
          <Header heading={"ABOUT US"} />
          <View
            style={{
              position: "absolute",
              top: 58,
              right: 12,
              zIndex: 1,
              paddingRight: 4,
              paddingLeft: 4,
              borderRadius: 5,
            }}
          >
            <TouchableOpacity onPress={() => nav.openDrawer()}>
              <FontAwesome name={"bars"} size={28} color={color.darkWhite} />
            </TouchableOpacity>
          </View>

          <Image
            style={styles.banner}
            source={require("../assets/fashion-young-african-woman-with-make-up-sexy-gold-dress-model-claret-background-studio.jpg")}
          />
        </View>

        {/* Content  */}
        <View style={styles.content}>
          {/* 1st paragraph of contenet */}
          <View style={styles.paragraph}>
            <Text style={styles.heading}> Lorem Epsum</Text>
            <Text>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet
            </Text>
          </View>
          {/* 2nd paragraph of contenet */}
          <View style={styles.paragraph}>
            <Text style={styles.heading}> Lorem Epsum</Text>
            <Text>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet
            </Text>
          </View>
          {/* 2nd paragraph of contenet */}
          <View style={styles.paragraph}>
            <Text style={styles.heading}> Lorem Epsum</Text>
            <Text>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet
            </Text>
          </View>
          {/* 2nd paragraph of contenet */}
          <View style={styles.paragraph}>
            <Text style={styles.heading}> Lorem Epsum</Text>
            <Text>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet
            </Text>
          </View>
          {/* 2nd paragraph of contenet */}
          <View style={styles.paragraph}>
            <Text style={styles.heading}> Lorem Epsum</Text>
            <Text>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet
            </Text>
          </View>
          {/* 2nd paragraph of contenet */}
          <View style={styles.paragraph}>
            <Text style={styles.heading}> Lorem Epsum</Text>
            <Text>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet
            </Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
    width: windowWidth,
    marginTop: 50,
  },
  banner: {
    width: aspectRatio.fullwidth,
    height: aspectRatio.thirtyThreeH,
  },

  content: {
    marginTop: 20,
    marginBottom: 20,
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
  },
  heading: {
    marginBottom: 5,
    fontWeight: "bold",
  },
});
