// screens/BookmarkScreen.js
import React,{useEffect} from 'react';
import { View, StyleSheet,Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const Pdfopener = ({ navigation,route }) => {
  const { uri } = route.params;
  useEffect(()=>{

    console.log("hello33333")
    navigation.navigate("TabNavigator",{})
 
 },[]);
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri }}
        style={styles.webview}
        originWhitelist={['*']}
        useWebKit={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
      },
      webview: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
});

export default Pdfopener;
