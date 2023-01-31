import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 8,
    padding: 10,
    borderRadius: 20,
    width: 400,
    height:100,
    margin: 15
    

  },
  cardText: {
    fontSize: 18,
  },
});

export default Card;
