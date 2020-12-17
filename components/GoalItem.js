import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const GoalItem = ({item: {id, key, value}, onDeleteItem}) => {
  return (
      <TouchableOpacity onPress={() => onDeleteItem(id)}>
        <View style={styles.listItem}>
          <Text>{value}</Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem;