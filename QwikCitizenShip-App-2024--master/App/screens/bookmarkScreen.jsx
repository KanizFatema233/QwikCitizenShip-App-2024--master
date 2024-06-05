import React from 'react';
import { View, StyleSheet } from 'react-native';
import PdfReader from './pdfReader';

const BookmarkScreen = ({ route }) => {
  const { uri } = route.params;

  return (
    <View style={styles.container}>
      <PdfReader uri={uri} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookmarkScreen;
