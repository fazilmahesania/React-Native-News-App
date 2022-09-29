import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';'
let colors = ['#000', '#000', '#000', '#000'];



const newsCards = (props) => {
const [data,setData] = useState([]);
const [title,setTitle] = useState([]);

  const onPress = () => {
  console.log("pressed");
   let response = fetch("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=63326037fce34edb8d6fe4c082f91a4c")
  .then((response) => response.json())
     .then((json) => {
      console.log(json.articles);
    })
     .catch((error) => {
       console.error(error);
     });
  }
useEffect(() => {
  const onPress = async () => {
    try {
      let response = await fetch(
        // `${proxyUrl}https://newsapi.org/v2/top-headlines?language=en&apiKey=63326037fce34edb8d6fe4c082f91a4c`
         `https://newsapi.org/v2/sources?language=en&apiKey=63326037fce34edb8d6fe4c082f91a4c`
      );
      let json = await response.json()
      setData(json.sources);
console.log(json.sources);
       setTitle(json.sources[0].title);
      
    } catch (error) {
      console.error(error);
    }
  }
  onPress();
  
},[]);




  return (
  
    <View>
      <FlatList
      data={data}
      keyExtractor={({ id }, index) => id}
      horizontal
      legacyImplementation={true}
      onEndReachedThreshold={0.5}
      renderItem={({item, index}) =>(
      // <Card style={{ backgroundColor: colors[index % colors.length],
      //     height:40, 
      //     width:150, 
      //     borderRadius:25, 
      //     marginTop:15,
      //     marginBottom:15,
      //     marginRight:10,
      //     padding:10,
      //  }}>
      
        <Text numberOfLines={1} 
        style={{ backgroundColor: colors[index % colors.length],
          height:40, 
          borderRadius:15, 
          margin:5,
          padding:10,
          color:'#fff'
       }}>{item.name}</Text>
       // </Card>

      )}
      />
    </View>
  );
};

export default newsCards;

const styles = StyleSheet.create({

  title:{
      color:'#fff',
      fontWeight: 'bold',
      fontSize: 16,
      textShadowColor: 'black', 
      textShadowOffset: { width: -1, height: 0 },
      textShadowRadius: 10, 
  }
});
