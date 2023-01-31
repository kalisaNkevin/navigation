import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <Image style={styles.icon} source={require('../../../assets/search.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    width: 400,
    marginLeft: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
  },
});

export default SearchBar;
