import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { db } from '../services/firebase';
// import { collection, onSnapshot } from 'firebase/firestore';

const HomeScreen = ({ navigation }) => {
  const [tickets, setTickets] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(collection(db, 'tickets'), (snapshot) => {
  //     const ticketsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  //     setTickets(ticketsData);
  //   });
  //   return unsubscribe;
  // }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.ticketItem}
      onPress={() => navigation.navigate('TicketDetail', { ticket: item })}
    >
      <Text style={styles.ticketTitle}>{item.artist}</Text>
      <Text>{item.venue} - {item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tickets}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text>No tickets yet. Add one!</Text>}
      />
      <Button
        title="Add Ticket"
        onPress={() => navigation.navigate('AddTicket')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  ticketItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  ticketTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
