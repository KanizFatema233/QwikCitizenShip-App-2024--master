import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const HomePage = () => {
  return (
    <View style={styles.topContainer}>
      <Image source={require("../../assets/homeBg.png")} style={styles.image} />

      <View style={styles.mainContent}>
        <View style={styles.dailyScheduleContainer}>
          <Text style={styles.dailyScheduleTitle}>Create Daily Schedule</Text>
          <View style={styles.dailyScheduleContent}>
            <FontAwesome5
              style={styles.dailyScheduleIcon}
              name="calendar-alt"
              size={20}
              color="#FB3640"
            />
            <Text style={styles.dailyScheduleText}>Schedule your practice</Text>
          </View>
          <View style={styles.dailyScheduleContent}>
            <AntDesign
              name="clockcircleo"
              size={18}
              color="#FB3640"
              style={styles.dailyScheduleIcon}
            />

            <Text style={styles.dailyScheduleText}>Schedule your practice</Text>
          </View>
        </View>

        <View style={styles.premiumFeaturesContainer}>
          <View style={styles.premiumFeaturesContent}>
            <Text style={styles.premiumFeaturesTitle}>
              Unlock Premium Features
            </Text>

            <Text style={styles.premiumFeaturesText}>
              Remove and get more features
            </Text>
          </View>
          <Entypo
            name="plus"
            size={26}
            color="#1E1E1E"
            style={styles.premiumFeaturesIcon}
          />
        </View>

        <View style={styles.startFromContainer}>
          <Text style={styles.startFromText}>
            Starts from there where you end last time
          </Text>
          <MaterialIcons
            name="arrow-forward-ios"
            size={22}
            color="black"
            style={styles.startFromIcon}
          />
        </View>

        <View style={styles.testExemptionsContainer}>
          <View style={styles.testExemptionsContent}>
            <Text style={styles.testExemptionsTitle}>Test Exemptions</Text>

            <Text style={styles.testExemptionsText}>
              You don’t need to take the test if you are under the age of 18 or
              55 and over.
            </Text>
          </View>
        </View>

        <View style={styles.studyBookContainer}>
          <View style={styles.studyBookContent}>
            <Text style={styles.studyBookTitle}>Read the study book</Text>
          </View>
        </View>

        <View style={styles.canadaCitizenshipContainer}>
          <View style={styles.canadaCitizenshipContent}>
            <Text style={styles.canadaCitizenshipTitle}>
              Learn more about Canada Citizenship
            </Text>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },

  image: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    margin: 20,
  },

  mainContent: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
  },

  dailyScheduleTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },

  dailyScheduleContainer: {
    flex: 1,
    //
    justifyContent: "center",
    //
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
  },

  dailyScheduleContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  dailyScheduleText: {
    color: "#FB3640",
  },

  dailyScheduleIcon: {
    marginRight: 8,
  },

  premiumFeaturesTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },

  premiumFeaturesContainer: {
    flex: 0.7,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
  },

  premiumFeaturesContent: {
    flexDirection: "column",
  },

  premiumFeaturesText: {
    color: "#FB3640",
    marginTop: 8,
  },

  premiumFeaturesIcon: {
    // width: 25,
    // height: 25,
  },

  startFromContainer: {
    flex: 0.5,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
  },

  startFromText: {
    color: "#FB3640",
  },

  startFromIcon: {
    // width: 20,
    // height: 20,
  },

  testExemptionsTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },

  testExemptionsContainer: {
    flex: 0.7,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },

  testExemptionsContent: {
    flexDirection: "column",
  },

  testExemptionsText: {
    marginTop: 8,
  },

  testExemptionsImg: {
    width: 25,
    height: 25,
  },

  studyBookTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },

  studyBookContainer: {
    flex: 0.5,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
  },

  studyBookContent: {
    flexDirection: "column",
  },

  canadaCitizenshipTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },

  canadaCitizenshipContainer: {
    flex: 0.5,
    marginTop: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
  },

  canadaCitizenshipContent: {
    flexDirection: "column",
  },
});
