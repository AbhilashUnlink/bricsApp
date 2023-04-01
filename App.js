import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import color from "./config/color";
import About from "./screens/About";
import Home from "./screens/Home";
import Login from "./screens/Login";
// import Profile from "./screens/Profile";
import Register from "./screens/Register";
// import Settings from "./screens/Settings";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          // drawerPosition: "right",
          headerStyle: { backgroundColor: color.white },
          drawerActiveTintColor: color.bannerBackground,
          drawerInactiveTintColor: color.pink,
        }}
        initialRouteName="Login"
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        {/* <Drawer.Screen name="Profile" component={Profile} /> */}

        {/* <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
