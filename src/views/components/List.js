import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'IT',
    data: ['Irembo', 'Pesa choice', 'Umurava'],
  },
  {
    title: 'HEALTHY',
    data: ['CHUK', 'Legacy', 'Baho'],
  },
  {
    title: 'AGRICULTURE',
    data: ['Simba', 'Planet', 'Lando'],
  },
  {
    title: 'RELIGIOUS',
    data: ['Anglican', 'SDA'],
  },
  {
    title: 'EDUCATION',
    data: ['ALU', 'AUCA'],
  },
];

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c22f',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;