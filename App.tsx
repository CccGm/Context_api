/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import Roots from './src/Navigation/Roots';
import {AppProvider} from './src/Context/AppContext';

function App(): JSX.Element {
  return (
    <AppProvider>
      <Roots />
    </AppProvider>
  );
}

export default App;
