import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Version: </Text>
      <Text style={{fontWeight: 'bold'}}>1.0.0</Text>

      <Text>Author: </Text>
      <Text style={{fontWeight: 'bold'}}>NEV</Text>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
