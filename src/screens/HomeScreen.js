import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go To Components Demo"
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("List");
        }}
      >
        <Text>Go To List Demo</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go To Image Screen"
      />
      <br></br>
      <br></br>
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go To Counter Screen"
      />
      <br></br>
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go To Color Screen"
      />
      <br></br>
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go To Square Screen"
      />
      <br></br>
      <Button
        onPress={() => navigation.navigate("SquareR")}
        title="Go To Square Reducer Screen"
      />
      <br></br>
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go To Text Screen"
      />
      <br></br>
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go To Box Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
