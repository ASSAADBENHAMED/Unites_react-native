// AboutScreen.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutScreen = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        copyright© 2024 - Travail proposé par Assaad Ben Hamad et Hedi Ben
        Ltoufa
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f2f2f2", 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc", 
  },
  text: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default AboutScreen;
