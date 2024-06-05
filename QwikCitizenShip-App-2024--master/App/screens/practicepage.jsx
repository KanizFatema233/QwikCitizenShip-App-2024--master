import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const PracticePage = () => {
  const [activeButton, setActiveButton] = useState("notYetStarted");

  const onPressHandler = (text) => {
    setActiveButton(text);
  };
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topButtonContainer}>
        <Text
          style={[
            styles.topButtonText,
            activeButton === "notYetStarted" ? styles.border : "",
          ]}
          onPress={() => onPressHandler("notYetStarted")}
        >
          Not Yet Started
        </Text>
        <Text
          style={[
            styles.topButtonText,
            activeButton === "retryRequired" ? styles.border : "",
          ]}
          onPress={() => onPressHandler("retryRequired")}
        >
          Retry Required
        </Text>
        <Text
          style={[
            styles.topButtonText,
            activeButton === "completed" ? styles.border : "",
          ]}
          onPress={() => onPressHandler("completed")}
        >
          Completed
        </Text>
      </View>

      {activeButton === "notYetStarted" ? (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Test")}>
            <View style={styles.practiceContainerOne}>
              <View style={styles.practiceMainContent}>
                <Image
                  source={require("../../assets/practiceImg01.png")}
                  style={styles.practiceImg}
                />
                <View style={styles.practiceContent}>
                  <Text style={styles.practiceTitle}>Mock Test 1</Text>
                  <Text style={styles.practiceText}>Result : Not Attempt</Text>
                  <Text style={styles.practiceTextTwo}>Not Attempted</Text>
                </View>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={24}
                color="#1E1E1E"
                style={styles.practiceIconImg}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Test")}>
            <View style={styles.practiceContainerOne}>
              <View style={styles.practiceMainContent}>
                <Image
                  source={require("../../assets/practiceImg01.png")}
                  style={styles.practiceImg}
                />
                <View style={styles.practiceContent}>
                  <Text style={styles.practiceTitle}>Mock Test 2</Text>
                  <Text style={styles.practiceText}>Result : Not Attempt</Text>
                  <Text style={styles.practiceTextTwo}>Not Attempted</Text>
                </View>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={24}
                color="#1E1E1E"
                style={styles.practiceIconImg}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Test")}>
            <View style={styles.practiceContainerOne}>
              <View style={styles.practiceMainContent}>
                <Image
                  source={require("../../assets/practiceImg01.png")}
                  style={styles.practiceImg}
                />
                <View style={styles.practiceContent}>
                  <Text style={styles.practiceTitle}>Mock Test 3</Text>
                  <Text style={styles.practiceText}>Result : Not Attempt</Text>
                  <Text style={styles.practiceTextTwo}>Not Attempted</Text>
                </View>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={24}
                color="#1E1E1E"
                style={styles.practiceIconImg}
              />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        ""
      )}
      {activeButton === "retryRequired" ? (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Test")}>
            <View style={styles.practiceContainerTwo}>
              <View style={styles.practiceMainContent}>
                <Image
                  source={require("../../assets/practiceImg01.png")}
                  style={styles.practiceImg}
                />
                <View style={styles.practiceContent}>
                  <Text style={styles.practiceTitle}>Mock Test 1</Text>
                  <Text style={styles.practiceText}>Result : Fail</Text>
                  <Text style={styles.practiceTextTwo}>Completed</Text>
                </View>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={24}
                color="#1E1E1E"
                style={styles.practiceIconImg}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Test")}>
            <View style={styles.practiceContainerTwo}>
              <View style={styles.practiceMainContent}>
                <Image
                  source={require("../../assets/practiceImg01.png")}
                  style={styles.practiceImg}
                />
                <View style={styles.practiceContent}>
                  <Text style={styles.practiceTitle}>Mock Test 2</Text>
                  <Text style={styles.practiceText}>Result : Fail</Text>
                  <Text style={styles.practiceTextTwo}>Completed</Text>
                </View>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={24}
                color="#1E1E1E"
                style={styles.practiceIconImg}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Test")}>
            <View style={styles.practiceContainerTwo}>
              <View style={styles.practiceMainContent}>
                <Image
                  source={require("../../assets/practiceImg01.png")}
                  style={styles.practiceImg}
                />
                <View style={styles.practiceContent}>
                  <Text style={styles.practiceTitle}>Mock Test 3</Text>
                  <Text style={styles.practiceText}>Result : Fail</Text>
                  <Text style={styles.practiceTextTwo}>Completed</Text>
                </View>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={24}
                color="#1E1E1E"
                style={styles.practiceIconImg}
              />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        ""
      )}
      {activeButton === "completed" ? (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Test")}>
            <View style={styles.practiceContainerThree}>
              <View style={styles.practiceMainContent}>
                <Image
                  source={require("../../assets/practiceImg01.png")}
                  style={styles.practiceImg}
                />
                <View style={styles.practiceContent}>
                  <Text style={styles.practiceTitle}>Mock Test 1</Text>
                  <Text style={styles.practiceText}>Result : Pass</Text>
                  <Text style={styles.practiceTextTwo}>Completed</Text>
                </View>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={24}
                color="#1E1E1E"
                style={styles.practiceIconImg}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Test")}>
            <View style={styles.practiceContainerThree}>
              <View style={styles.practiceMainContent}>
                <Image
                  source={require("../../assets/practiceImg01.png")}
                  style={styles.practiceImg}
                />
                <View style={styles.practiceContent}>
                  <Text style={styles.practiceTitle}>Mock Test 2</Text>
                  <Text style={styles.practiceText}>Result : Pass</Text>
                  <Text style={styles.practiceTextTwo}>Completed</Text>
                </View>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={24}
                color="#1E1E1E"
                style={styles.practiceIconImg}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Test")}>
            <View style={styles.practiceContainerThree}>
              <View style={styles.practiceMainContent}>
                <Image
                  source={require("../../assets/practiceImg01.png")}
                  style={styles.practiceImg}
                />
                <View style={styles.practiceContent}>
                  <Text style={styles.practiceTitle}>Mock Test 3</Text>
                  <Text style={styles.practiceText}>Result : Pass</Text>
                  <Text style={styles.practiceTextTwo}>Completed</Text>
                </View>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={24}
                color="#1E1E1E"
                style={styles.practiceIconImg}
              />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        ""
      )}

      <StatusBar style="auto" />
    </View>
  );
};

export default PracticePage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
  },

  topButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginHorizontal: 16,
  },

  topButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    padding: 8,
  },

  practiceTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },

  border: {
    borderBottomWidth: 2,
    borderColor: "black",
  },

  practiceContainerOne: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
    marginTop: 30,
  },

  practiceContainerTwo: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#FB3640",
    borderRadius: 8,
    marginTop: 30,
  },

  practiceContainerThree: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#33ED15",
    borderRadius: 8,
    marginTop: 30,
  },

  practiceMainContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  practiceContent: {},

  practiceText: {
    marginTop: 4,
  },
  practiceTextTwo: {
    color: "#FB3640",
    fontWeight: "bold",
    marginTop: 4,
  },

  practiceImg: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    paddingHorizontal: 50,
    borderRadius: 8,
  },

  practiceIconImg: {},
});
