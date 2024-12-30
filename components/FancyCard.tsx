import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>RCCG</Text>
      <View style={[styles.card, styles.cardElevation]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&w=800', // Direct image URL
          }}
          style={styles.img}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>
            The Redeem Christain Church of God
          </Text>
          <Text style={styles.cardLabel}>Lagos-Ibadan express way</Text>
          <Text style={styles.cardDescription}>
            The Redeemed Christian Church of God (RCCG) was founded in 1952 in
            Nigeria, following a divine revelation received by a young man whose
            heart had been set
          </Text>
          <Text style={styles.cardFooter}>38 km away</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  card: {
    width: 370,
    height: 450,
    marginHorizontal: 20,
  },
  cardElevation: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  img: {
    height: 300,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 16,
    marginBottom: 4,
  },
  cardDescription: {
    marginTop: 4,
    marginBottom: 10,
    fontSize: 13,
    flexShrink: 1,
    color: '#242B2E',
  },
  cardFooter: {
    fontSize: 15,
    fontWeight: '500',
  },
});
export default FancyCard;
