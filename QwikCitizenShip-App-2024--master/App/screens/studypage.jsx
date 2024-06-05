import React,{useState} from "react";
import { Image, StatusBar, StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import {Button, ActivityIndicator } from 'react-native';
import * as FileSystem from 'expo-file-system';
import PdfReader from "./pdfReader";


const StudyPage = ({navigation,route}) => {
  
  return (
    <View style={styles.topContainer}>
      <StatusBar
        animated={true}
        backgroundColor="#303030"
      />
      {/* <View style={[styles.navbar, { flexDirection: 'row' }]}>

                <Pressable activeOpacity={4} style={{ width: '5%', height: 25, left: 15, top: 17, borderWidth: 0 }} >
                    <Image
                        style={{ width: 17, height: 17, left: 0, top: 3 }}
                        resizeMode='contain'
                        source={require('../../assets/back.jpg')}
                    />
                </Pressable>

                <View style={{ width: '50%', justifyContent: 'flex-start', alignItems: 'flex-start', left: 10 }}>

                    <Text style={{ left: 10, top: 17, color: '#000000', fontSize: 14, letterSpacing: .9, fontFamily: 'Poppins_400Regular' }} >  Study </Text>

                </View>



            </View> */}

      <View style={styles.mainContent}>
        <ScrollView scrollEventThrottle={16} style={{ width: '100%', height: '80%', paddingHorizontal: 16, }}>
          <Pressable style={styles.startFromContainer}  onPress={()=> navigation.navigate("Lesson1",{})}>
            <View style={{ paddingRight: 30 }}>
              <Text style={styles.startFromText1}>
                Lesson 1
              </Text>
              <Text style={styles.startFromText}>
                Applying for Citizenship
              </Text>
              <Text style={styles.startFromText2}>
                Get Start
              </Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="#574343"
              style={styles.startFromIcon}
            />
          </Pressable>

          <Pressable style={styles.startFromContainer} onPress={()=> navigation.navigate("Lesson2",{})}>
            <View style={{ paddingRight: 30 }}>
              <Text style={styles.startFromText1}>
                Lesson 2
              </Text>
              <Text style={styles.startFromText}>
                Rights and Responsibilities of Citizenship
              </Text>
              <Text style={styles.startFromText2}>
                Get Start
              </Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="#574343"
              style={styles.startFromIcon}
            />
          </Pressable>

          <Pressable style={styles.startFromContainer}>
            <View style={{ paddingRight: 30 }}>
              <Text style={styles.startFromText1}>
                Lesson 3
              </Text>
              <Text style={styles.startFromText}>
                Who We Are
              </Text>
              <Text style={styles.startFromText2}>
                Get Start
              </Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="#574343"
              style={styles.startFromIcon}
            />
          </Pressable>

          <Pressable style={styles.startFromContainer}>
            <View style={{ paddingRight: 30 }}>
              <Text style={styles.startFromText1}>
                Lesson 4
              </Text>
              <Text style={styles.startFromText}>
                Canada’s History
              </Text>
              <Text style={styles.startFromText2}>
                Get Start
              </Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="#574343"
              style={styles.startFromIcon}
            />
          </Pressable>

          <Pressable style={styles.startFromContainer}>
            <View style={{ paddingRight: 30 }}>
              <Text style={styles.startFromText1}>
                Lesson 5
              </Text>
              <Text style={styles.startFromText}>
                Modern Canada
              </Text>
              <Text style={styles.startFromText2}>
                Get Start
              </Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="#574343"
              style={styles.startFromIcon}
            />
          </Pressable>

          <Pressable style={styles.startFromContainer}>
            <View style={{ paddingRight: 30 }}>
              <Text style={styles.startFromText1}>
                Lesson 6
              </Text>
              <Text style={styles.startFromText}>
                How Canadians Govern Themselves
              </Text>
              <Text style={styles.startFromText2}>
                Get Start
              </Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="#574343"
              style={styles.startFromIcon}
            />
          </Pressable>

          <Pressable style={styles.startFromContainer}>
            <View style={{ paddingRight: 30 }}>
              <Text style={styles.startFromText1}>
                Lesson 7
              </Text>
              <Text style={styles.startFromText}>
                Federal Elections
              </Text>
              <Text style={styles.startFromText2}>
                Get Start
              </Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="#574343"
              style={styles.startFromIcon}
            />
          </Pressable>

          <Pressable style={styles.startFromContainer}>
            <View style={{ paddingRight: 30 }}>
              <Text style={styles.startFromText1}>
                Lesson 8
              </Text>
              <Text style={styles.startFromText}>
                The Justice System
              </Text>
              <Text style={styles.startFromText2}>
                Get Start
              </Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="#574343"
              style={styles.startFromIcon}
            />
          </Pressable>

          <Pressable style={styles.startFromContainer}>
            <View style={{ paddingRight: 30 }}>
              <Text style={styles.startFromText1}>
                Lesson 9
              </Text>
              <Text style={styles.startFromText}>
                Canadian Symbols
              </Text>
              <Text style={styles.startFromText2}>
                Get Start
              </Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="#574343"
              style={styles.startFromIcon}
            />
          </Pressable>

          <Pressable style={styles.startFromContainer}>
            <View style={{ paddingRight: 30 }}>
              <Text style={styles.startFromText1}>
                Lesson 10
              </Text>
              <Text style={styles.startFromText}>
                Canada’s Economy
              </Text>
              <Text style={styles.startFromText2}>
                Get Start
              </Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="#574343"
              style={styles.startFromIcon}
            />
          </Pressable>

          <Pressable style={[styles.startFromContainer, { marginBottom: 20 }]}>
            <View style={{ paddingRight: 30 }}>
              <Text style={styles.startFromText1}>
                Lesson 11
              </Text>
              <Text style={styles.startFromText}>
                Canada’s Regions
              </Text>
              <Text style={styles.startFromText2}>
                Get Start
              </Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="#574343"
              style={styles.startFromIcon}
            />
          </Pressable>


        </ScrollView>

        <View style={{ width: "100%",height:"20", justifyContent: 'center', alignItems: 'center',marginBottom:10,marginTop:10}}>

          <Pressable style={{ width: "40%", height: 50, borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: "#A55F2A", borderWidth: 0.5, borderColor: "#FFB780" }} onPress={() => navigation.navigate('Pdfopener', { uri: 'https://www.canada.ca/content/dam/ircc/migration/ircc/english/pdf/pub/discover.pdf' })}>
       
            <Text style={{ color: "#ffffff", right: 5, fontSize: 14, letterSpacing: .9, fontFamily: 'Poppins_500Medium' }}>Get Full PDF</Text>
           
          </Pressable>

        </View>

      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  navbar: {

    backgroundColor: "#ffffff",
    width: '100%',
    height: 55,

    shadowColor: '#000',
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 6,

  },

  mainContent: {
    flex: 1,
    // paddingTop: 20,
    // paddingHorizontal: 16,
    backgroundColor: "#FFFAF5",
  },


  startFromContainer: {
    flex: 0.15,
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
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  downloadInfo: {
    marginTop: 20,
    fontStyle: 'italic',
  },

  startFromText: {
    color: '#350D0E',
    fontSize: 12,
    letterSpacing: .9,
    fontFamily: 'Poppins_500Medium'
  },

  startFromText1: {
    color: '#504A4B',
    fontSize: 10,
    letterSpacing: .4,
    fontFamily: 'Poppins_400Regular'
  },
  startFromText2: {
    color: '#913B3E',
    fontSize: 10,
    letterSpacing: .4,
    fontFamily: 'Poppins_400Regular'

  },
  startFromIcon: {
    // width: 20,
    // height: 20,
  },




});


export default StudyPage;
