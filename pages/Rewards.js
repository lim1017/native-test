import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BookingMain from './BookingMain'

const Tab = createBottomTabNavigator();



export default function Rewards({ navigation, extraData }) {
  return (
    <View style={styles.container}>

      <Text> Rewards screen {extraData}</Text>
      <Button
        title="Go to Booking"
        onPress={() => navigation.navigate('New Booking')}
      />

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
