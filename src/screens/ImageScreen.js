import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}>
        Image Screen
      </Text>
      <ImageDetail
        title="Forest"
        imgSource={require("../../assets/imgs/forest.jpg")}
        score="10"
      />
      <ImageDetail
        title="Beach"
        imgSource={require("../../assets/imgs/beach.jpg")}
        score="14"
      />
      <ImageDetail
        title="Mountain"
        imgSource={require("../../assets/imgs/mountain.jpg")}
        score="8"
      />
    </View>
  );

  const styles = StyleSheet.create({});
};
export default ImageScreen;
