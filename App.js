import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, Button} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {addGoal, removeGoal} from "./service/goal.service";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    useEffect(() => {
        fetchGoalFromDB();
    }, []);

    const fetchGoalFromDB = () => {
        return fetch('https://goallist-d24fb-default-rtdb.firebaseio.com/goals.json')
            .then(res => res.json())
            .then(parseRes => {
                    const goals = [];

                    for (const k in parseRes) {
                        goals.push({
                            key: parseRes[k].key,
                            value: parseRes[k].value,
                            id: k
                        })
                    }
                    setCourseGoals(goals);
                }
            )
    }

    const addGoalHandler = async (goal) => {
        const newGoal = {
            key: Math.random().toString(),
            value: goal
        };
        await addGoal(newGoal);
        setIsAddMode(false);
        await fetchGoalFromDB();
    }

    const removeGoalHandler = async (id) => {
        await removeGoal(id);
        await fetchGoalFromDB();
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
    screen: {padding: 50},
});