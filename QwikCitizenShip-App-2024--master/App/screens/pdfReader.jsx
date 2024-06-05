import React,{useEffect} from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const PdfReader = ({ uri }) => {
    
  useEffect(()=>{

   console.log("hello33333")

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

export default PdfReader;

