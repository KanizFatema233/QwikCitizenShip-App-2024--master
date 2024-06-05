import React, { useEffect, useState, useContext } from 'react';
import { Dimensions, StyleSheet, Text, View, ImageBackground, Modal, SafeAreaView, Platform, StatusBar, FlatList, Image, Button, TextInput, Pressable, ScrollView } from 'react-native';

import Svg, { Path, Circle, SvgUri, G, Defs, ClipPath, Rect } from "react-native-svg";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";


function Location({ navigation, route, props }) {
    const provinces = [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Nova Scotia",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Northwest Territories",
        "Nunavut",
        "Yukon"
    ];

    let screenWidth = Dimensions.get('window').width;
    let screenHight = Dimensions.get('window').height;

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState("");

    const handleSelectProvince = (province) => {
        setSelectedProvince(province);
        setModalVisible(false);
    };

    return (
        <SafeAreaView style={{ width: '100%', height: '100%' }}>


            <View style={[styles.MainContainer]}>


                <View style={{ alignItems: 'center', width: '100%', height: screenHight, justifyContent: 'flex-start', top: 40 }}>



                    <View style={{ alignItems: 'center', width: '100%', height: (screenHight / 2) - 60, justifyContent: 'flex-start' }}>
                        <Image source={require("../../assets/location.png")} style={{ width: '100%', height: '100%' }} />

                    </View>


                    <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', height: (screenHight / 2) + 70, borderWidth: 1, borderColor: "#B6B6B4", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>

                        <View style={{ top: 0, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Text style={{ fontSize: 22, color: '#36352F', letterSpacing: .9, fontFamily: 'Poppins_700Bold' }}>Select Your Location</Text>

                            </View>
                            <View style={{ marginTop: 0, justifyContent: 'center', alignItems: 'center', height: 42 }}>
                                <Text style={{ fontSize: 10, color: '#000000', letterSpacing: .9, fontFamily: 'Poppins_400Regular' }}>Choose your province or territory from the list below</Text>
                            </View>
                        </View>


                        <View style={{ width: '100%', height: 150, justifyContent: 'center', alignItems: 'center' }}>

                            <View style={{ width: "80%", justifyContent: 'center', alignItems: 'center' }}>

                                <Pressable style={{ width: "100%", flexDirection: 'row', height: 55, borderRadius: 15, justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#FAF5F1", borderWidth: 1, borderColor: "#B6B6B4" }} onPress={() => setModalVisible(true)} >
                                    <Text style={{ color: "#504A4B", paddingLeft: 20, fontSize: 12, letterSpacing: .9, fontFamily: 'Poppins_500Medium' }}>{selectedProvince != "" ? selectedProvince : "Province"}</Text>
                                    <Svg style={{ right: 20 }} width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M7 10L12 15L17 10H7Z" fill="#808080" />
                                    </Svg>

                                </Pressable>

                            </View>
                            <View style={{ width: "80%", justifyContent: 'center', alignItems: 'center', top: 40 }}>

                                <Pressable style={{ width: "100%", height: 60, borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: "#A55F2A", borderWidth: 0.5, borderColor: "#FFB780" }}>
                                    <Text style={{ color: "#ffffff", right: 5, fontSize: 15, letterSpacing: .9, fontFamily: 'Poppins_700Bold' }}>Confirm Location</Text>

                                </Pressable>

                            </View>
                        </View>

                    </View>
                    {selectedProvince && <Text style={styles.selectedText}>Selected: {selectedProvince}</Text>}

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >

                        <View style={styles.modalContainer}>

                            <View style={styles.modalView}>
                                {/* <ScrollView scrollEventThrottle={16} style={{ width: '100%', paddingHorizontal: 16, }}> */}
                                <View style={{ flexDirection: 'row' , width: "100%", justifyContent: 'space-between', alignItems: 'center',}}>
                                    <Text style={[styles.modalTitle]}>Select Province or Territory</Text>
                                    <FontAwesome5
                                        style={{bottom:15,left:10}}
                                        name="times-circle"
                                        size={30}
                                        color="#F38484"
                                        onPress={() => setModalVisible(false)}
                                    />
                                </View>
                                <FlatList
                                    data={provinces}
                                    style={{width:"100%"}}
                                    keyExtractor={(item) => item}
                                    renderItem={({ item }) => (
                                        <Pressable
                                            style={styles.item}
                                            onPress={() => handleSelectProvince(item)}
                                        >
                                            <Text style={styles.itemText}>{item}</Text>
                                        </Pressable>
                                    )}
                                />

                                {/* </ScrollView> */}
                                {/* <Pressable
                                    style={styles.closeButton}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.closeButtonText}>Close</Text>
                                </Pressable> */}
                            </View>

                        </View>

                    </Modal>

                </View>

            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: "#FFF5EE",
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navbar: {


        backgroundColor: "#ffffff",
        width: '100%',
        height: 0,

        shadowColor: '#000',
        shadowOffset: { width: 1.5, height: 1.5 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 6,

    },
    selectedText: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {

        paddingTop: 40,
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: "85%",
        height: "105%",
        backgroundColor: '#FFFAF5',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 15,
        letterSpacing: .6,
        fontFamily: 'Poppins_500Medium',
        marginBottom: 10,
        color: "#A55F2A"
    },
    item: {
        padding: 10,
        marginVertical: 5,
        // borderBottomWidth: 1,
        borderWidth:0.5,
        borderColor: '#ccc',
        // borderBottomColor: '#ccc',
        width: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 0.5,
    },
    itemText: {
        fontSize: 12,
        letterSpacing: .6,
        fontFamily: 'Poppins_500Medium',
        color: "#36352F"
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#2196F3',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
    logo: {
        width: 220,
        height: 220,
        resizeMode: "contain",
        marginBottom: 30,
    },
    ImgContainer: {

        width: "100%",
        height: 209,
        // top:182

    },

    language: {
        flex: 1,

        backgroundColor: "#3C709E",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 5,
        width: 75,
        height: 30


    },
    tuchabluebutton: {
        width: "35%",
        height: 34,
        borderRadius: 2,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: 'center',
    }

})

export default Location;



