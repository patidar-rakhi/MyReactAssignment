/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text, Switch } from 'react-native';
import  GreetingCard  from './GreetingCard';


function CardItem() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(previousState => !previousState);

  const backgroundColor = isDarkMode ? '#000' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={[styles.text, {color: textColor}]}>
        Dark Mode {isDarkMode ? 'On' : 'Off'}
        </Text>

    <Switch
        trackColor={{ false: '#000', true: '#fff' }}
        thumbColor={isDarkMode ? '#000' : '#fff'}
        onValueChange={toggleTheme}
        value={isDarkMode}
      />

      <GreetingCard name="Ravi " message="Welcome to cards App!" />
      <GreetingCard name="Rakhi " message="Welcome to cards App!" />
      <GreetingCard name="Joya" message="Welcome to cards App!" />
      

    </View>
  );
}

export default CardItem;


const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

