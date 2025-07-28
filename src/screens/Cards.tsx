import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";


const cards = [
  { id: 1, title: 'My Card 1', description: 'This is yello card.' },
  { id: 2, title: 'My Card 2', description: 'This is White card' },
  { id: 3, title: 'My Card 3', description: 'This is black card' },
  { id: 4, title: 'My Card 4', description: 'This is blue card' },
  { id: 5, title: 'My Card 5', description: 'This is green card' },
  { id: 6, title: 'My Card 6', description: 'This is grey card' },
];

const screenWidth = Dimensions.get('window').width;
const CARD_MARGIN = 10;
const NUM_COLUMNS = 2;
const cardWidth = (screenWidth - CARD_MARGIN * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

export default function Cards() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    {cards.map ((card) => (
       <View key={card.id} style={[styles.card, { width: cardWidth }]}>
          <Text style={styles.title}>{card.title}</Text>
          <Text style={styles.description}>{card.description}</Text>
        </View>
    ))}
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: CARD_MARGIN,
    justifyContent: 'space-between',
  },
  card: {
    marginTop: 60,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: CARD_MARGIN,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});