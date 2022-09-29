import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "react-native-vector-icons";

// You can import from local files

// or any pure javascript modules available in npm
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Screens
import HomeScreen from '../HomeScreen';
import Technology from '../Categories/Technology';
import Sports from '../Categories/Sports';
import Entertainment from '../Categories/Entertainment';

import Demo from '../Categories/Demo';



const Tab = createMaterialTopTabNavigator();



export default function Tabbar() {
  return (
      <Tab.Navigator
      lazy={true}
      optimizationsEnabled={true}
      removeClippedSubviews={true}
      animationEnabled={false}
      tabBarOptions={{
      showIcon: true,  
      labelStyle: { 
      fontSize: 10,
      backgroundColor: 'transparent',
      margin:3,
      padding:0,
      width:100,
      },
      scrollEnabled:true,
   
      tabStyle: { 
        width:85,
      },
      indicatorStyle: {
        opacity: 0,
      },
      activeTintColor: '#000',
      activeBackgroundColor: '#000',
      style: {
        backgroundColor: 'transparent',
      },
  
      
      'animationEnabled' : false,
  
  
  }}
      >
        
        
        <Tab.Screen 
        name="General"
        title="General"
        component={HomeScreen} 
       
        />

        <Tab.Screen 
        name="Technology"
        title="Technology"
        component={Technology} 
        />
        <Tab.Screen 
        name="Sports"
        title="Sports"
        component={Sports} 
        />
        <Tab.Screen 
        name="Entertainment"
        title="Entertainment"
        component={Entertainment} 
        />
        <Tab.Screen 
        name="Science"
        title="Science"
        component={Demo} 
        />
        <Tab.Screen 
        name="Business"
        title="Business"
        component={Demo} 
        />
      </Tab.Navigator> 
  );
}

const styles = StyleSheet.create({

  
});
