import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PhotoAlbum from './PhotoAlbum';
import PhotoDetails from './PhotoDetails';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Album"
      component={PhotoAlbum}
      options={{tabBarLabel: 'Album'}}
    />
    <Stack.Screen
      name="AlbumDetails"
      component={PhotoDetails}
      options={{title: 'Photo details'}}
    />
  </Stack.Navigator>
);

export default StackNavigator;
