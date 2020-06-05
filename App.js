/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainNavigator from './navigations';
import {AppProvider} from './AppContext';

const App: () => React$Node = () => {
  return (
    <AppProvider>
      <MainNavigator />
    </AppProvider>
  );
};

export default App;
