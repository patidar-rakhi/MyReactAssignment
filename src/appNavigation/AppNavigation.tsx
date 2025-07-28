import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import CounterApp from '../screens/Counter'; 
import ButtonVisibility from '../screens/ButtonVisibility';

import Timer from '../screens/SetTimer';
import TextInputComponent from '../screens/TextInput';
import ToDoList from '../screens/ToDoList';
import Cards from '../screens/Cards';
import Parent from '../screens/Memo';
import UserList from '../screens/UserList';
import CardItem from "../screens/CardAndToggle";
import DashboardApp from "../screens/Dashboard";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
         <Stack.Screen name="Dashboard" component={DashboardApp} />
        <Stack.Screen name="Counter" component={CounterApp} />
        <Stack.Screen name="ButtonVisibility" component={ButtonVisibility} />
        <Stack.Screen name="SetTimer" component={Timer} />
        <Stack.Screen name="TextInput" component={TextInputComponent} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="Memo" component={Parent} />
         <Stack.Screen name="CardAndToggle" component={CardItem} />
        <Stack.Screen name="UserList" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}