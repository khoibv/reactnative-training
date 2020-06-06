import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

const InfoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Version: </Text>
      <Text style={{fontWeight: 'bold'}}>1.0.0</Text>

      <Text>Author: </Text>
      <Text style={{fontWeight: 'bold'}}>NEV</Text>
    </SafeAreaView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
