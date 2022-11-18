import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imgSource, score }) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={imgSource} />
      <Text>{title}</Text>
      <Text>Image Score : {score}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200,
  },
});
export default ImageDetail;
