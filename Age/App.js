import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function User() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    // Convert input strings to numbers
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);

    // Check if all inputs are valid numbers
    if (!isNaN(dayNum) && !isNaN(monthNum) && !isNaN(yearNum)) {
      // Create Date object for birthdate
      const birthdate = new Date(yearNum, monthNum - 1, dayNum); // Month is zero-based

      // Calculate age
      const today = new Date();
      const diff = today - birthdate;
      const ageDate = new Date(diff);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge.toString()); // Convert the age to a string for displaying
    } else {
      Alert.alert('Error', 'Please enter valid numbers.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectangularContainer}>
        <Text>Calculate Website</Text>
      </View>
      <View style={styles.rectangularContainer2}>
        <Text>MY Calculate</Text>
        <View style={styles.subContainer}>
          <TextInput
            style={styles.dateInput}
            placeholder="Day"
            value={day}
            onChangeText={setDay}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.dateInput}
            placeholder="Month"
            value={month}
            onChangeText={setMonth}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.dateInput}
            placeholder="Year"
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
          />
          <Button title="Submit" onPress={handleSubmit} />
          {age !== '' && <Text style={styles.resultText}>{`Current Age: ${age}`}</Text>}
        </View>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://placeimg.com/200/200/people' }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rectangularContainer: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
  rectangularContainer2: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 600,
    borderWidth: 1,
    borderColor: 'black',
  },
  subContainer: {
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '30%',
    marginBottom: 10,
  },
  resultText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});