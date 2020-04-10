import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
});


export default function App() {
    const [isAddModal, setIsAddModal] = useState(false);
    const [goals, setGoals] = useState([]);
    const addGoal = (goal) => {
        setGoals([...goals, goal]);
    };
    const removeGoal = (goalIdToRemove) => {
        setGoals(goals.filter(({id})=>(id !== goalIdToRemove)));
    };
    return (
        <View style={styles.screen}>
            <Button title="ADD GOAL" onPress={() => setIsAddModal(true)}/>
            <GoalInput visible={isAddModal} addGoal={addGoal} onCancel={setIsAddModal} />
            <GoalList deleteGoal={removeGoal} goals={goals} />
        </View>
    );
}
