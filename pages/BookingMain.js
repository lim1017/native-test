import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NavIcons from "../components/NavIcons/NavIcons";


export default function Rewards() {
  return (
    <View style={styles.container}>
      <Text> Booking main screen</Text>
      <NavIcons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
