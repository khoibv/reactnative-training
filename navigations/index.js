import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PhotoNavigator from '../components/album/navigation';
import SettingNavigator from '../components/settings/navigation';
import LoginForm from '../components/LoginForm';
import InfoScreen from '../components/InfoScreen';
import CustomDrawerContent from './CustomDrawerContent';
import LayoutDemo from '../components/LayoutDemo';
import AppContext, {useAppContext} from '../AppContext';
import SearchScreen from '../components/SearchScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const iconMap = {
  Photo: 'image-multiple',
  Search: 'magnify',
  Setting: 'settings',
};

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <Icon name={iconMap[route.name]} size={size} color={color} />
        ),
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Photo" component={PhotoNavigator} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Setting"
        component={SettingNavigator}
        options={{tabLabel: 'Setting'}}
      />
    </Tab.Navigator>
  );
};

const Main = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen
      name="LayoutDemo"
      component={LayoutDemo}
      options={{drawerLabel: 'Layout demo'}}
    />
    <Drawer.Screen
      name="Information"
      component={InfoScreen}
      options={{drawerLabel: 'App info'}}
    />
  </Drawer.Navigator>
);

const App = () => {
  const context = useAppContext();
  console.log(context);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {context.signedIn ? (
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen name="Login" component={LoginForm} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
