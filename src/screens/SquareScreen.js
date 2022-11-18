import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  /* const setColor = (color, changeAmount) => {
    if (color === "red") {
      if (red + changeAmount > 255 || red + changeAmount < 0) {
        return;
      } else {
        setRed(red + changeAmount);
      }}}; */

  const setColor = (color, changeAmount) => {
    switch (color) {
      case "red":
        red + changeAmount > 255 || red + changeAmount < 0
          ? null
          : setRed(red + changeAmount);
        return;
      case "green":
        green + changeAmount > 255 || green + changeAmount < 0
          ? null
          : setGreen(green + changeAmount);
        return;

      case "blue":
        blue + changeAmount > 255 || blue + changeAmount < 0
          ? null
          : setBlue(blue + changeAmount);
        return;
      default:
        return;
    }
  };

  console.log(red, green, blue);

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => {
          setColor("red", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("red", -COLOR_INCREMENT);
        }}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          setColor("green", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("green", -COLOR_INCREMENT);
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          setColor("blue", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("blue", -COLOR_INCREMENT);
        }}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
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

export default SquareScreen;
