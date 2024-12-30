import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.cardElevator]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
          <Text>More</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
          <Text>and</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
          <Text>More</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCard;
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin: 8,
    // borderWidth: 1,
  },
  cardElevator: {
    backgroundColor: '#CAD5E2',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#50DBB4',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    cursor: 'pointer',
  },
});
