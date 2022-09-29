import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';


// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const horizontalScroll = (props) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [loading, setLoading] = useState(false);
  const finalUrl = props.url;


  // const onPress = () => {
  // console.log("pressed");
  //  let response = fetch("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=63326037fce34edb8d6fe4c082f91a4c")
  // .then((response) => response.json())
  //    .then((json) => {
  //     console.log(json.articles);
  //   })
  //    .catch((error) => {
  //      console.error(error);
  //    });
  // }
  useEffect(() => {
         
    const fetchData = async () => {
      try {
        let response = await fetch(
          // `${proxyUrl}https://newsapi.org/v2/top-headlines?language=en&apiKey=63326037fce34edb8d6fe4c082f91a4c`
          `${finalUrl}`
        );

        let json = await response.json();

        let filteredItems = json.articles.filter((x) => x.urlToImage != null);

        setData(filteredItems);
        setLoading(true);
        setTitle(json.articles[0].title);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      {loading ? (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          horizontal
          legacyImplementation={true}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                Linking.openURL(item.url);
              }}>
              <ImageBackground
                source={{ uri: item.urlToImage }}
                style={styles.image}>
                <LinearGradient
                  colors={['transparent', '#000']}
                  style={styles.gradient}>
                  <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={styles.title}>
                    {item.title}
                  </Text>

                  <Text style={styles.date}>
                    {moment(item.publishedAt).fromNow()}
                  </Text>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      ) : (
        <ActivityIndicator size="large" color="#000" />
      )}
    </View>
  );
};

export default horizontalScroll;

const styles = StyleSheet.create({
  card: {
    height: 190,
    width: 140,
    borderRadius: 12,
    margin: 5,
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    borderRadius: 12,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    borderRadius: 12,
    overflow: 'hidden',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
  },
  date: {
    color: '#fff',
    fontSize: 12,
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
  },
});
