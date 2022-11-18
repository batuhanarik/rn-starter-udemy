import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const BoxScreen = () => {
  const [name, setName] = useState("");
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Screen</Text>
      <Text style={styles.textStyle}>Child #1 </Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    //alignItems: "flex-end", //default:stretch,flext-start-center-flex-end
    flexDirection: "row",
    justifyContent: "center",
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "red",
    marginVertical: 2,
    marginHorizontal: 2,
    // ...StyleSheet.absoluteFillObject, //position:absolute,left,right,top,bottom:0 kısayolu
  },
});

export default BoxScreen;
