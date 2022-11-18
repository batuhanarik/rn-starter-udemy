import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { id: 0, name: "Friend #1", age: 10 },
    { id: 1, name: "Friend #2", age: 11 },
    { id: 2, name: "Friend #3", age: 12 },
    { id: 3, name: "Friend #4", age: 12 },
    { id: 4, name: "Friend #5", age: 31 },
  ];
  return (
    <View>
      <Text>List Screen</Text>
      <FlatList
        keyExtractor={(friend) => friend.id}
        data={friends}
        renderItem={(item) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
