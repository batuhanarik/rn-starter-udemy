import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <br></br>
      <Text>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => {
          onIncrease();
        }}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={() => {
          onDecrease();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
  },
});

export default ColorCounter;
