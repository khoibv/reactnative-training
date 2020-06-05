import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PhotoNavigator from '../components/photoalbum/navigation';
import SettingNavigator from '../components/settings/navigation';
import LoginForm from '../components/LoginForm';
import InfoScreen from '../components/InfoScreen';
import CustomDrawerContent from './CustomDrawerContent';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginForm} />
      <Tab.Screen name="Photo" component={PhotoNavigator} />
      <Tab.Screen
        name="Setting"
        component={SettingNavigator}
        options={{tabLabel: 'Setting'}}
      />
    </Tab.Navigator>
  );
};

const Main = () => (
  <NavigationContainer>
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Information" component={InfoScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default Main;
