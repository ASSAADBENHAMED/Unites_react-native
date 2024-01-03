import React from "react";
import { View, Button, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import { setUnit } from "./store";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Gigabytes vers Megabytes"
          onPress={() => {
            setUnit("gigabytes");
            navigation.navigate("GigabytesToMegabytes");
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Megabytes vers Gigabytes"
          onPress={() => {
            setUnit("megabytes");
            navigation.navigate("MegabytesToGigabytes");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 20, 
  },
});

export default HomeScreen;
