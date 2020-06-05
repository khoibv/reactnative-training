/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LayoutDemo = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: 'blue', fontSize: 32}}>Hi ReactNative</Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#E93E43'}} />
      <View style={{flex: 2, backgroundColor: '#F5A942'}} />
      <View style={{flex: 3, backgroundColor: '#4EBC7A'}} />
    </View>
  );
};

export default LayoutDemo;
