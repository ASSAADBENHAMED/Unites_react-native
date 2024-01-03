import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultScreen = ({ route }) => {
  const { convertedValue } = route.params;

  return (
    <View style={styles.container}>
      <Text>Résultat: {convertedValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ResultScreen;
