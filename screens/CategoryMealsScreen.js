import React from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from '../components/MealItem';

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = props => { 
    const itemId = props.navigation.getParam('itemId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayMeals = availableMeals.filter(item => item.categoryIds.indexOf(itemId) > 0);

    const renderDispayMeals = itemData => {
        return (
            <MealItem />
        )
    }

    return ( 
        <View style={styles.screen}>
            <FlatList data={displayMeals} keyExtractor={(item, index) => item.id}
                renderItem={renderDispayMeals} />
        </View>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;