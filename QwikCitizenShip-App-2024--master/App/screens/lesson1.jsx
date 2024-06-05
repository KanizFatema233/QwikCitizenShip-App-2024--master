import React from "react";
import { Image, StatusBar, StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Svg, { Path, Circle, SvgUri, G, Defs, ClipPath, Rect } from "react-native-svg";

const Lesson1 = ({ navigation, route }) => {
  return (
    <View style={styles.topContainer}>
      <View style={[styles.navbar, { flexDirection: 'row' }]}>

        <Pressable activeOpacity={4} style={{ width: '5%', height: 25, left: 15, top: 17, borderWidth: 0 }} >
          {/* <Image
            style={{ width: 17, height: 17, left: 0, top: 3 }}
            resizeMode='contain'
            source={require('../../assets/back.jpg')}
          /> */}
        </Pressable>

        <View style={{ width: '50%', justifyContent: 'flex-start', alignItems: 'flex-start', left: 10 }}>

          <Text style={{ left: 10, top: 17, color: '#000000', fontSize: 14, letterSpacing: .9, fontFamily: 'Poppins_400Regular' }} >  Study </Text>

        </View>



      </View>
      <ScrollView scrollEventThrottle={16} style={{ width: '100%', paddingHorizontal: 16, }}>

        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 15 }}>
          <Text style={styles.startFromText1}>
            Lesson 1
          </Text>
          <Text style={styles.startFromText}>
            Applying for Citizenship
          </Text>
        </View>

        <Image source={require("../../assets/Lesson1.png")} style={styles.image} />

        <View style={styles.mainContent}>


          <View style={styles.canadaCitizenshipContainer}>
            <View style={styles.canadaCitizenshipContent}>
              <Text style={styles.canadaCitizenshipTitle}>
                How to use this booklet to prepare for the citizenship test:
              </Text>
              <Text style={styles.bodytext}>

                This booklet will help you prepare for the citizenship test. You should:
                {'\n'}
                {'\u2022'} Study this guide.{'\n'}
                {'\u2022'} Ask a friend or family member to help you practice answering questions about Canada.{'\n'}
                {'\u2022'} Call a local school or school board, a college, a community center or a local organization that provides services to immigrants and ask for information on citizenship classes.{'\n'}
                {'\u2022'} Take English or French language classes, which the Government of Canada offers free of charge.
                {'\n'}
              </Text>
            </View>

            <View style={styles.canadaCitizenshipContent}>
              <Text style={styles.canadaCitizenshipTitle}>
                About the citizenship test :
              </Text>
              <Text style={styles.bodytext}>
                The citizenship test is usually a written test, but it could be an interview. You will be tested on two basic requirements for citizenship:
                {'\n'}
                {'\u2022'} Knowledge of Canada and of the rights and responsibilities of citizenship, and adequate knowledge of English or French. Adult applicants 55 years of age and over do not need to write the citizenship test. The Citizenship Regulations provide information on how your ability to meet the knowledge of Canada requirement is determined. Information about this requirement can be found on page 64 of the study guide.
                {'\n'}
                All the citizenship test questions are based on the subject areas noted in the Citizenship Regulations, and all required information is provided in this study guide.
              </Text>
            </View>

            <View style={styles.canadaCitizenshipContent}>
              <Text style={styles.canadaCitizenshipTitle}>
                {'\n'}AFTER THE TEST:
              </Text>
              <Text style={[styles.bodytext,{marginBottom:-50}]}>
                If you pass the test and meet all the other requirements, you will receive a Notice to Appear to Take the Oath of Citizenship. This document tells you the date, time and place of your citizenship ceremony.
                {'\n'}{'\n'}
                At the ceremony, you will:
                {'\n'}
                {'\u2022'} Take the Oath of Citizenship.{'\n'}
                {'\u2022'} Sign the oath form and receive your Canadian Citizenship Certificate.{'\n'}{'\n'}


                If you do not pass the test, you will receive a notification indicating the next steps.

              </Text>
            </View>


          </View>
        </View>
        <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center', marginBottom:50,marginTop:20 }}>

          <Pressable style={{ width: "45%", flexDirection: 'row', height: 52, borderRadius: 15, justifyContent: 'center', alignItems: 'center',  borderWidth: 1, borderColor: "#B6B6B4" }} onPress={()=> navigation.navigate("Lesson2",{})}>
            <Text style={{ color: "#3D3939", right: 5, fontSize: 16, letterSpacing: .9, fontFamily: 'Poppins_500Medium' }}>Next</Text>
            <Svg width="22" height="23" viewBox="0 0 24 25" style={{ left: 5, bottom: 1 }} fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M12 6.5L10.9275 7.54475L15.1125 11.75H6V13.25H15.1125L10.9275 17.4297L12 18.5L18 12.5L12 6.5Z" fill="#3D3939" />
              <Path d="M12 23C9.9233 23 7.89323 22.3842 6.16652 21.2304C4.4398 20.0767 3.09399 18.4368 2.29927 16.5182C1.50455 14.5996 1.29661 12.4884 1.70176 10.4516C2.1069 8.41476 3.10693 6.54383 4.57538 5.07538C6.04383 3.60693 7.91476 2.6069 9.95156 2.20176C11.9884 1.79661 14.0996 2.00455 16.0182 2.79927C17.9368 3.59399 19.5767 4.9398 20.7304 6.66652C21.8842 8.39323 22.5 10.4233 22.5 12.5C22.4968 15.2838 21.3896 17.9527 19.4211 19.9211C17.4527 21.8896 14.7838 22.9968 12 23ZM12 3.5C10.22 3.5 8.47992 4.02785 6.99987 5.01678C5.51983 6.00571 4.36628 7.41132 3.68509 9.05585C3.0039 10.7004 2.82567 12.51 3.17294 14.2558C3.5202 16.0016 4.37737 17.6053 5.63604 18.864C6.89472 20.1226 8.49836 20.9798 10.2442 21.3271C11.99 21.6743 13.7996 21.4961 15.4442 20.8149C17.0887 20.1337 18.4943 18.9802 19.4832 17.5001C20.4722 16.0201 21 14.28 21 12.5C20.9972 10.1139 20.0481 7.82634 18.3609 6.13911C16.6737 4.45189 14.3861 3.50278 12 3.5Z" fill="#3D3939" />
            </Svg>

          </Pressable>

        </View>

      </ScrollView>
    </View>
  );
};

export default Lesson1;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFAF5",
  },
  navbar: {

    backgroundColor: "#FFF7F0",
    width: '100%',
    height: 55,

    shadowColor: '#000',
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 6,

  },

  image: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 8,

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
    // backgroundColor: "#FFF5EE",
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
    color: '#350D0E',
    fontSize: 14,
    letterSpacing: .9,
    fontFamily: 'Poppins_500Medium',
    marginBottom: 15
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
  startFromText1: {
    color: '#504A4B',
    fontSize: 12,
    letterSpacing: .4,
    fontFamily: 'Poppins_400Regular'
  },
  startFromText2: {
    color: '#913B3E',
    fontSize: 10,
    letterSpacing: .4,
    fontFamily: 'Poppins_400Regular'

  },
  canadaCitizenshipTitle: {
    color: '#913B3E',
    textAlign: "justify",
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: .9,
    fontFamily: 'Poppins_500Medium'
  },
  bodytext: {
    marginTop: 15,
    color: '#350D0E',
    textAlign: "justify",
    fontSize: 13,
    lineHeight: 30,
    letterSpacing: 0.9,
    fontFamily: 'Poppins_400Regular'
  },

  canadaCitizenshipContainer: {

    marginTop: 16,
    marginBottom: 16,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: "#D9D9D9",
    borderRadius: 8,

  },

  canadaCitizenshipContent: {
    flexDirection: "column",
    marginTop: 15
  },
});
