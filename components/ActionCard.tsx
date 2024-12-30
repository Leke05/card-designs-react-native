import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';

const ActionCard = () => {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>

      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            What's new in JavaScript 21 -ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png?w=1600&h=840&fit=crop&auto=compress,format&format=webp',
          }}
          style={styles.cardImg}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardText}>
            Just like every year, JavaScript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.{' '}
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://x.com/Jonathan0556')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  card: {
    width: 370,
    height: 340,
    marginHorizontal: 16,
    marginVertical: 10,
  },
  elevatedCard: {
    backgroundColor: '#EA7773',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowRadius: 0.3,
  },
  headerContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
  },
  cardImg: {
    height: 150,
  },
  cardBody: {
    padding: 10,
  },
  cardText: {},
  cardFooter: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 4,
  },
});
