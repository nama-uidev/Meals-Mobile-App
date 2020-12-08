import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MealItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
})

export default MealItem;