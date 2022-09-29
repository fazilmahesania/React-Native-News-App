import * as React from 'react';
import { StyleSheet } from 'react-native';

// You can import from local files



// or any pure javascript modules available in npm
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';



// Screens

import Demo from './Categories/Demo';
import StackNavigation from './Navigation/StackNavigation';


const Drawer = createDrawerNavigator();



export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        tabBarOptions={{
    labelStyle: { fontSize: 12 },
    tabStyle: {  },
    style: { backgroundColor: 'powderblue' },
      'scrollEnabled': true,
      'lazy': true,
  
  }}
      >
        <Drawer.Screen name="Home" 
        
        component={StackNavigation} />

        <Drawer.Screen name="About" 
        
        component={Demo} />

        <Drawer.Screen name="Categories" 
        
        component={Demo} />

        <Drawer.Screen name="Settings" 
        
        component={Demo} />
        
        <Drawer.Screen name="Contact" 
        
        component={Demo} />
        
        
       
      </Drawer.Navigator> 
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  
});
