import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Modal} from 'react-native';

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    inputField: {
        width: '70%',
        borderBottomWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%',
    },
    button: {
        width: '40%',
    }
});

const GoalInput = ({addGoal, visible, onCancel}) => {
    const [goal, setGoal] = useState('');
    const hideModalInput = () => onCancel(false);
    const enterGoal = () => {
        if(goal.length){
            addGoal({id: Date.now(), goal});
            setGoal('');
            hideModalInput();
        }
    };
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.screen}>
                <TextInput placeholder="Enter goal ..." style={styles.inputField} value={goal} onChangeText={setGoal}/>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={enterGoal}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" color='red' onPress={hideModalInput}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;