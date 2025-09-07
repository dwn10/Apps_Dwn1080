import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TicketDetailScreen = ({ route }) => {
  const { ticket } = route.params;

  return (
    <View style={styles.container}>
      {ticket.imageUrl && (
        <Image source={{ uri: ticket.imageUrl }} style={styles.image} />
      )}
      <Text style={styles.text}>Artist: {ticket.artist}</Text>
      <Text style={styles.text}>Venue: {ticket.venue}</Text>
      <Text style={styles.text}>City: {ticket.city}</Text>
      <Text style={styles.text}>Country: {ticket.country}</Text>
      <Text style={styles.text}>Date: {ticket.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default TicketDetailScreen;
