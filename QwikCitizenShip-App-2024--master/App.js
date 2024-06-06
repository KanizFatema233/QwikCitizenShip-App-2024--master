import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import LoadingScreen from "./LoadingScreen";
import HomePage from "./App/screens/homepage";
import PracticePage from "./App/screens/practicepage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



import { createStackNavigator } from "@react-navigation/stack";

import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import SettingsPage from "./App/screens/settingspage";
import StudyPage from "./App/screens/studypage";
import DetailsPage from "./App/screens/testpage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import TestPage from "./App/screens/testpage";

import Firstslider from "./App/screens/firstslide";
import Secondslide from "./App/screens/secondslide";
import Thirdslide from "./App/screens/thirdslide";
import Location from "./App/screens/location";
import Lesson1 from "./App/screens/lesson1";
import Lesson2 from "./App/screens/lesson2";
import Pdfopener from "./App/screens/pdfopener";
import CarouselScreen from "./carouselscreen";
import LocationSelector from "./LocationSelector";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_100Thin,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

const logoImage = require("./assets/round.png");

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_100Thin,
    // Poppins_100ExtraLight ,
    // Poppins_100Light,
    Poppins_500Medium,
    // Poppins_600SemiBold,
    Poppins_700Bold,
    // Poppins_800ExtraBold,
    Poppins_900Black,
  });
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#701F21",
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 4,
        },
        headerTitleStyle: {
          fontSize: 14,
          letterSpacing: 0.9,
          fontFamily: "Poppins_500Medium",
        },
        headerStyle: {
          backgroundColor: "#FFF7F0",
          shadowColor: "#000",
          shadowOffset: { width: 1.5, height: 1.5 },
          shadowOpacity: 0.8,
          shadowRadius: 5,
          elevation: 6,
        },
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={22} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Practice"
        component={PracticePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="pie-chart" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Study"
        component={StudyPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="book-open" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Test"
        component={TestPage}
        options={({ navigation }) => ({
          tabBarButton: () => null,
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back-ios"
              size={20}
              color="#1E1E1E"
              style={{ paddingLeft: 16 }}
              onPress={() => navigation.navigate("Practice")}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );

  const StackNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: "#000000",
        headerTitle: "",
        headerTransparent: true,
        headerLeftContainerStyle: {
          paddingLeft: 0,
        },
      }}
    >
      <Stack.Screen name="Carousel" component={CarouselScreen} />

      <Stack.Screen name="TabNavigator" component={TabNavigator} />

      <Stack.Screen name="Firstslider" component={Firstslider} />
      <Stack.Screen name="Secondslide" component={Secondslide} />
      <Stack.Screen name="Thirdslide" component={Thirdslide} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="LocationSelector" component={LocationSelector} />

      <Stack.Screen name="Pdfopener" component={Pdfopener} />
      <Stack.Screen name="Lesson1" component={Lesson1} />
      <Stack.Screen name="Lesson2" component={Lesson2} />
    </Stack.Navigator>
  );

  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      
        <LoadingScreen onFinish={() => setIsLoading(false)} logo={logoImage} />

    );

    
  }


  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <TabNavigator /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
