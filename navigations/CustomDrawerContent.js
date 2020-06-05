import React from 'react';
import {StyleSheet, Linking, Alert} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import DrawerHeader from './DrawerHeader';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerHeader />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => Alert.alert('You logged out')}
      />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://www.nissho-vn.com/en/')}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({});
