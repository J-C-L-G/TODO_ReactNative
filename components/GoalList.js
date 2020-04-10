import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    listItem: {
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
        backgroundColor: '#ccc',
        padding: 10,
    }
});

const GoalList = ({goals, deleteGoal}) => (
    <FlatList
        keyExtractor={({id}) => String(id)}
        data={goals}
        renderItem={({item}) => (
            <TouchableOpacity onPress={deleteGoal.bind(this, item.id)} >
                <View style={styles.listItem}>
                    <Text>{item.goal}</Text>
                </View>
            </TouchableOpacity>
        )
        }/>
);

export default GoalList;