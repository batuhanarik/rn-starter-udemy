import { React } from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  const greeting = "batu";
  return (
    <View>
      <Text style={styles.textStyle}>This is component screen!</Text>
      <Text style={styles.subheader}>my name is {greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subheader: {
    fontSize: 20,
  },
});

export default ComponentScreen;
