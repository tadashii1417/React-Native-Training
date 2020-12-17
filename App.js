import React, {useState} from 'react';
import {FlatList, StyleSheet, View, Button} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goal) => {
    setCourseGoals(currentGoals => [...currentGoals, {
      key: Math.random().toString(),
      value: goal
    }]);
    setIsAddMode(false);
  }

  const removeGoalHandler = (key) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== key);
    })
  }

  const cancelAddMode = () => {
    setIsAddMode(false);
  }

  return (
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
        <GoalInput addGoalHandler={addGoalHandler}
                   isAdd={isAddMode}
                   cancelAddMode={cancelAddMode}
        />
        <FlatList data={courseGoals}
                  renderItem={itemData =>
                      <GoalItem
                          item={itemData.item}
                          onDeleteItem={removeGoalHandler}/>
                  }/>
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});

{/*<ScrollView>*/}
{/*  {courseGoals.map((goal, index) =>*/}
{/*      <View style={styles.listItem} key={index}>*/}
{/*        <Text>{goal}</Text>*/}
{/*      </View>*/}
{/*  )}*/}
{/*</ScrollView>*/}