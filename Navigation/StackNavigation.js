
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import from local files


// or any pure javascript modules available in npm
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import Tabbar from './TabNavigation';
import CustomHeader from './CustomHeader'

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
        <PaperProvider theme={theme}>
 
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{
          header: CustomHeader,
        }}      
      >
       

        <Stack.Screen name="Drawer" 
        
        component={Tabbar} />
    

       
      </Stack.Navigator>
        </PaperProvider>
 
  );
}


const styles = StyleSheet.create({

  
});
