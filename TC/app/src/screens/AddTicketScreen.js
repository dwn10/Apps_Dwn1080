import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
// import { db, storage } from '../services/firebase';
// import { collection, addDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import * as ImagePicker from 'expo-image-picker';

const AddTicketScreen = ({ navigation }) => {
  const [artist, setArtist] = useState('');
  const [venue, setVenue] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });
    // if (!result.cancelled) {
    //   setImage(result.uri);
    // }
    console.log('Pick image button pressed (implementation commented out)');
  };

  const handleSaveTicket = async () => {
    // let imageUrl = '';
    // if (image) {
    //   const response = await fetch(image);
    //   const blob = await response.blob();
    //   const imageRef = ref(storage, `tickets/${Date.now()}`);
    //   await uploadBytes(imageRef, blob);
    //   imageUrl = await getDownloadURL(imageRef);
    // }
    // try {
    //   await addDoc(collection(db, 'tickets'), {
    //     artist,
    //     venue,
    //     city,
    //     country,
    //     date,
    //     imageUrl,
    //   });
    //   navigation.goBack();
    // } catch (error) {
    //   console.error("Error adding document: ", error);
    // }
    console.log('Save Ticket button pressed (implementation commented out)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Artist</Text>
      <TextInput
        style={styles.input}
        value={artist}
        onChangeText={setArtist}
      />
      <Text style={styles.label}>Venue</Text>
      <TextInput
        style={styles.input}
        value={venue}
        onChangeText={setVenue}
      />
      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
      />
      <Text style={styles.label}>Country</Text>
      <TextInput
        style={styles.input}
        value={country}
        onChangeText={setCountry}
      />
      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="YYYY-MM-DD"
      />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Scan Ticket" onPress={() => navigation.navigate('Scanner')} />
      <Button title="Save Ticket" onPress={handleSaveTicket} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default AddTicketScreen;
