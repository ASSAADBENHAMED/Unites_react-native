import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import store from "./store";

import { useSnapshot } from "valtio";
const InputScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  const { unit } = useSnapshot(store);

  const handleConversion = () => {
    let convertedValue = 0;
    if (unit === "gigabytes") {
      convertedValue = parseFloat(value) * 1024; // Conversion de gigabytes en megabytes
    } else {
      convertedValue = parseFloat(value) / 1024; // Conversion de megabytes en gigabytes
    }
    navigation.navigate("ResultScreen", { convertedValue });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        keyboardType="numeric"
        placeholder="Entrez la valeur"
        style={styles.input}
      />
      <Button title="Convertir" onPress={handleConversion} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default InputScreen;
