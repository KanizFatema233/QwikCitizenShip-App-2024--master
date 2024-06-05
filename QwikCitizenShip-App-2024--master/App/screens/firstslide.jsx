import React, { useEffect, useState,useContext } from 'react';
import {Dimensions , StyleSheet, Text, View,ImageBackground ,SafeAreaView,Platform ,StatusBar,Image,Button,TextInput,Pressable, ScrollView} from 'react-native';

import Svg, { Path,Circle ,SvgUri,G,Defs,ClipPath,Rect} from "react-native-svg";



function Firstslider({navigation,route,props}) {
   

        let screenWidth= Dimensions.get('window').width;
        let screenHight= Dimensions.get('window').height;
        
   
    return (
        <SafeAreaView style={{width:'100%',height:'100%'}}>

               
            <View style={[styles.MainContainer]}>
  
                    
                    <View style={{alignItems:'center',width:'100%',height:screenHight,justifyContent:'flex-start',top:40}}>



                    <View style={{alignItems:'center',width:'100%',height:(screenHight/2) + 50,justifyContent:'flex-start'}}>
                     <Image source={require("../../assets/leaf.png")} style={[styles.logo,{top:50}]} />
                        <View style={{top:0,justifyContent:'center',alignItems:'center'}}>
                            <View style={{marginTop:60,justifyContent:'center',alignItems:'center',width:'100%'}}>
                                <Text style={{fontSize:25,color:'#FB3640',letterSpacing:.9,fontFamily: 'Poppins_700Bold'}}>Welcome to The</Text>
                                <Text style={{fontWeight:'400',fontSize:18,color:'#FB3640',letterSpacing:.9,fontFamily: 'Poppins_400Regular'}}>Canadian Citizenship Test</Text>
                                
                            </View>
                            <View style={{marginTop:16,justifyContent:'center',alignItems:'center',height:42}}>
                                <Text style={{fontWeight:'400',fontSize:12,color:'#3B3C36',letterSpacing:.9,fontFamily: 'Poppins_400Regular'}}>Study the latest material, practice with quizzes,</Text>
                                <Text style={{fontWeight:'400',fontSize:12,color:'#3B3C36',top:2,letterSpacing:.9,fontFamily: 'Poppins_400Regular'}}>test knowledge with tests!</Text>
                            </View>
                        </View>
                       

                    </View>


                    <View style={{width:'100%',justifyContent:'flex-start',alignItems:'center',height:(screenHight/2)-120}}>

                        <View style={{width:'100%',height:150,justifyContent:'center',alignItems:'center'}}>
                            
                            <View style={{width:"50%",justifyContent:'center',alignItems:'center',bottom:40}}>
                                
                                <Svg width="73" height="15" viewBox="0 0 73 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle cx="36.5" cy="7.5" r="7.5" fill="#CDCDCD"/>
                                    <Circle cx="65.5" cy="7.5" r="7.5" fill="#CDCDCD"/>
                                    <Circle cx="7.5" cy="7.5" r="7.5" fill="#2C3539"/>
                                </Svg>

                                
                            </View>
                            <View style={{width:"50%",justifyContent:'center',alignItems:'center'}}>

                                <Pressable style={{width:"100%",flexDirection:'row',height:60,borderRadius:15,justifyContent:'center',alignItems:'center',backgroundColor:"#FFF5EE",borderWidth:1,borderColor:"#B6B6B4"}}>
                                    <Text style={{color:"#504A4B",right:5,fontSize:18,letterSpacing:.9,fontFamily: 'Poppins_500Medium'}}>Next</Text>
                                    <Svg width="24" height="25" viewBox="0 0 24 25" style={{left:5,bottom:1}} fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M12 6.5L10.9275 7.54475L15.1125 11.75H6V13.25H15.1125L10.9275 17.4297L12 18.5L18 12.5L12 6.5Z" fill="#504A4B"/>
                                        <Path d="M12 23C9.9233 23 7.89323 22.3842 6.16652 21.2304C4.4398 20.0767 3.09399 18.4368 2.29927 16.5182C1.50455 14.5996 1.29661 12.4884 1.70176 10.4516C2.1069 8.41476 3.10693 6.54383 4.57538 5.07538C6.04383 3.60693 7.91476 2.6069 9.95156 2.20176C11.9884 1.79661 14.0996 2.00455 16.0182 2.79927C17.9368 3.59399 19.5767 4.9398 20.7304 6.66652C21.8842 8.39323 22.5 10.4233 22.5 12.5C22.4968 15.2838 21.3896 17.9527 19.4211 19.9211C17.4527 21.8896 14.7838 22.9968 12 23ZM12 3.5C10.22 3.5 8.47992 4.02785 6.99987 5.01678C5.51983 6.00571 4.36628 7.41132 3.68509 9.05585C3.0039 10.7004 2.82567 12.51 3.17294 14.2558C3.5202 16.0016 4.37737 17.6053 5.63604 18.864C6.89472 20.1226 8.49836 20.9798 10.2442 21.3271C11.99 21.6743 13.7996 21.4961 15.4442 20.8149C17.0887 20.1337 18.4943 18.9802 19.4832 17.5001C20.4722 16.0201 21 14.28 21 12.5C20.9972 10.1139 20.0481 7.82634 18.3609 6.13911C16.6737 4.45189 14.3861 3.50278 12 3.5Z" fill="#504A4B"/>
                                    </Svg>

                                </Pressable>

                            </View>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',height:42,marginTop:70}}>
                                <Text style={{fontWeight:'400',fontSize:10,color:'#413839',letterSpacing:.9,fontFamily: 'Poppins_400Regular'}}>By continuing, you agree to our</Text>
                                <Text style={{fontWeight:'400',fontSize:10,color:'#413839',top:2,letterSpacing:.9,fontFamily: 'Poppins_400Regular'}}>Privacy Policy and Terms of Service</Text>
                        </View>
                    </View>

                    </View>
                
                </View>  
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor: "#FFF5EE",       
        alignItems:'center',
    },
    navbar:{
  

        backgroundColor: "#ffffff",
        width:'100%',
        height:0,

        shadowColor: '#000',
        shadowOffset: { width: 1.5, height: 1.5 },
        shadowOpacity:  0.8,
        shadowRadius: 5,
        elevation: 6,

    },
    logo: {
        width: 180,
        height: 180,
        resizeMode: "contain",
        marginBottom: 30,
      },
    ImgContainer:{

        width:"100%",
        height:209,
        // top:182
       
    },

    language:{
        flex:1,
        
        backgroundColor:"#3C709E",
        justifyContent: "center",
        alignItems:'center',  
        borderRadius: 5,
        width:75,
        height:30


    },
    tuchabluebutton:{
        width:"35%",
        height:34,
        borderRadius:2,
         backgroundColor:"#000000",
         justifyContent: "center",
       alignItems:'center',
    }

})

export default Firstslider;



