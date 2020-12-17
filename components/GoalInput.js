import React, {useState} from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from "react-native";

const GoalInput = ({addGoalHandler, isAdd, cancelAddMode}) => {
  const [enterGoal, setEnterGoal] = useState('');

  const goalInputHandler = (text) => {
    setEnterGoal(text);
  }

  const addHandler = () => {
    addGoalHandler(enterGoal);
    setEnterGoal('');
  }

  return (
      <Modal visible={isAdd} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
              placeholder="Hello truongduong"
              style={styles.textInput}
              onChangeText={goalInputHandler}
              value={enterGoal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Cancel" color="red" onPress={cancelAddMode}/>
            </View>
            <View style={styles.button}>
              <Button title="Add" onPress={addHandler}/>
            </View>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10
  },
  buttonContainer: {
    width: '60%',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: "40%",
  }
});

export default GoalInput;