import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Searchbar  } from 'react-native-paper';


import { DrawerActions } from '@react-navigation/native';

function CustomHeader({ navigation, previous }) {
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  
  return (
    <View style={styles.headerbg}>
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="NEWS PRO" />
      <Appbar.Action icon="menu" color="white"   
      onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer())
        }}
        />

     
        </Appbar.Header>
             <Searchbar 
             style={styles.search}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>

        
  );
}

export default CustomHeader;


const styles = StyleSheet.create({
  headerbg: {
    backgroundColor: '#000',
  },
  search: {
    margin:20,
    borderRadius:25,
    marginTop:5,

  }
});