import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


//react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//components
import Navbar from './components/Navbar/Navbar'
import MyBackButton from './components/MyBackButton/MyBackButton'

//pages
import Rewards from './pages/Rewards'
import BookingMain from './pages/BookingMain'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Rewards' headerMode='screen' 
      screenOptions={{header: ({ scene, previous, navigation }) => 
      <Navbar leftButton={
        previous ? <Button color="teal"
        title='Back' onPress={navigation.goBack}/> : undefined
      } />}}
      >
        <Stack.Screen name="Rewards" >
         {props => <Rewards {...props} extraData='bbbbb' />}
        </Stack.Screen>
        
        <Stack.Screen name="BookingMain" component={BookingMain}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//        <Navbar style={styles.navbar} />

//        <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Rewards" component={Rewards} />
//         <Stack.Screen name="Booking" component={BookingMain} />

//       </Stack.Navigator>
//     </NavigationContainer>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   }
// });
