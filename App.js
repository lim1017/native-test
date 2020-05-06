import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

//react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//components
import Navbar from "./components/Navbar/Navbar";
import NavIcons from "./components/NavIcons/NavIcons";


//pages
import Rewards from "./pages/Rewards";
import BookingMain from "./pages/BookingMain";
import Appointments from "./pages/Appointments";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Rewards' headerMode='screen' 
      screenOptions={{header: ({ scene, previous, navigation }) => 
      <Navbar leftButton={
        previous ? <Button color="teal"
        title='Back' onPress={navigation.goBack}/> : undefined
      } />}}
      > */}

      <Navbar
        leftButton={(previous, navigation) =>
          previous ? (
            <Button color="teal" title="Back" onPress={navigation.goBack} />
          ) : undefined
        }
      />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Rewards') {
              iconName = 'reward'
            } else if (route.name === 'New Booking') {
              iconName = 'booking'
            } else if (route.name === 'Appointments') {
              iconName = 'appointment'
            }

            // You can return any component that you like here!
            return <NavIcons name={iconName} />;
          }
        })}
       tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Rewards">
          {(props) => <Rewards {...props} extraData="bbbbb" />}
        </Tab.Screen>
        <Tab.Screen name="New Booking" component={BookingMain} />
        <Tab.Screen name="Appointments" component={Appointments} />

      </Tab.Navigator>

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
