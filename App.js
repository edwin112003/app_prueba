import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
import UsersList from './screens/UsersList';
import CreateUsersScreen from './screens/CreateUsersScreen';
import userDetailScreen from './screens/userDetailScreen';
function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name= "CreateUsersScreen" component ={CreateUsersScreen}/>
      <Stack.Screen name= "UserList" component ={UsersList}/>
      
      <Stack.Screen name= "userDetailScreen" component ={userDetailScreen}/>
    </Stack.Navigator>

  )
}
export default function App()  {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
