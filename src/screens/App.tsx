
import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import AppNavigator from '../appNavigation/AppNavigation';



 const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;