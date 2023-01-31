import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = ({ name, age, nationalID, dob, education, domain, contact, email, image }) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Age: {age}</Text>
        <Text style={styles.text}>National ID: {nationalID}</Text>
        <Text style={styles.text}>Date of Birth: {dob}</Text>
        <Text style={styles.text}>Education Level: {education}</Text>
        <Text style={styles.text}>Domain of Study: {domain}</Text>
        <Text style={styles.text}>Contact: {contact}</Text>
        <Text style={styles.text}>Email: {email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'colum',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 180,
    margin: 10,
  },
  infoContainer: {
    flex: 1,
    paddingBottom:150,
    paddingLeft: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '200'
  },
});

export default Profile;
