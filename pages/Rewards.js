import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import RewardsStepper from "../components/RewardsStepper/RewardsStepper";

export default function Rewards({ navigation, extraData }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <img
        src={require(`../assets/StaffBumpGraphics/Artwork/iconRewardsLarge.svg`)}
        alt="Smiley face"
        height="92"
        width="188"
      />
      <Text
        style={{
          fontSize: 25,
          fontFamily: "Advent Pro",
          color: "#16A7B9",
          fontWeight: 1000,
          letterSpacing: "2px",
        }}
      >
        REWARDS
      </Text>

      <Text
        style={{
          fontSize: 16,
          marginTop: 20,
          paddingBottom: 10,
        }}
      >
        Points Balance:{" "}
        <Text
          style={{
            fontSize: 30,
            color: "#8F75BE",
            fontWeight: "bold",
            letterSpacing: "4px",
          }}
        >
          1,234
        </Text>
      </Text>

      <RewardsStepper />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scroll:{
    flex: 1,
  }
});
