import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 50,
        alignItems: 'center',
        flex: 1,
    },
    goalInput: {
        flexDirection: 'row',
        alignContent: 'center',

    },
    inputField: {
        width: '70%',
        borderBottomWidth: 1,
        borderColor: 'black',
        marginRight: 5
    },
});


export default function App() {
    const [goal, setGoal] = useState('');
    const [goals, setGoals] = useState([]);
    const updateGoals = () => {
        setGoals([...goals, goal]);
        setGoal('');
    };
    return (
        <View style={styles.container}>
            <View style={styles.goalInput}>
                <TextInput placeholder="enter goal" style={styles.inputField} value={goal} onChangeText={setGoal}/>
                <Button title="ADD" onPress={updateGoals}/>
            </View>
            <View>
                { goals.map((goal, index) => <Text key={index}>{goal}</Text>) }
            </View>
        </View>
    );
}
