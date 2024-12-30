import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contactData = [
    {
      id: 1,
      name: 'Jonathan Babatunde',
      status: 'Frontend developer',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      id: 2,
      name: 'Anurag Tiwari',
      status: 'I love to code and teach',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      id: 3,
      name: 'Sanket Signh',
      status: 'Making your Gpay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      id: 4,
      name: 'Hassan Jimoh',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contactData?.map(({id, name, status, imageUrl}) => (
          <View key={id} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImg} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginTop: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userStatus: {
    fontSize: 12,
    fontWeight: '600',
  },
});
