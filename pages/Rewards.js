import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Rewards({ navigation, extraData }) {
  return (
    <View style={styles.container}>

      <Text> Rewards screen {extraData}</Text>
      <Button
        title="Go to Booking"
        onPress={() => navigation.navigate('BookingMain')}
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
