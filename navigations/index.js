import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PhotoAlbum from '../components/PhotoAlbum';
import LoginForm from '../components/LoginForm';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginForm} />
      <Tab.Screen name="Photo" component={PhotoAlbum} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
