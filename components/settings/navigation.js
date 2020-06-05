import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SettingScreen from './SettingScreen';

const Stack = createStackNavigator();

const SettingNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={SettingScreen} />
  </Stack.Navigator>
);

export default SettingNavigator;
