import * as React from 'react';
import { StyleSheet, Button, ActivityIndicator, FlatList, View, Text, Platform, ImageBackground, ScrollView  } from 'react-native';
import { useState, useEffect } from 'react';
import { Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

// Components
import HorizontalScroll from '../components/HorizontalScroll';
import NewsCards from '../components/NewsCards';
import VerticalScroll from '../components/VerticalScroll';

const mainUrl = 'https://newsapi.org/v2/top-headlines?language=en&category=entertainment&apiKey=63326037fce34edb8d6fe4c082f91a4c';
const verticalUrl = 'https://newsapi.org/v2/everything?q=entertainment&sortBy=popularity&apiKey=63326037fce34edb8d6fe4c082f91a4c';


const homeScreen = () => {



  return (
    <ScrollView style={styles.container}>  
<HorizontalScroll url={mainUrl} />
<VerticalScroll url={verticalUrl} />
    </ScrollView>
  );
};


export default homeScreen;

const styles = StyleSheet.create({
container:{
  padding:10,
}
});
