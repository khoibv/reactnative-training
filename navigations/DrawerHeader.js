import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerHeader = () => {
  return (
    <View style={styles.container}>
      <Icon name="account-circle" style={styles.icon} />
      <Text style={styles.text}>Welcome admin</Text>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#123456',
    paddingVertical: 16,
  },
  icon: {
    color: '#F5A942',
    fontSize: 64,
  },
  text: {
    color: 'white',
  },
});
