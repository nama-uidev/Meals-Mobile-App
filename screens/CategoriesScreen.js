import React from 'react';
import { View, Text, Button ,FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import { colors } from '../constants/colors';

const CategoriesScreen = props => {
    const renderData = (itemData) => {
        return (
            <TouchableOpacity style={styles.renderStyle} onPress={() => {
                props.navigation.navigate({routeName: 'CategoryMeals',
                params: {
                    itemId: itemData.item.id
                }
            })
            }}>
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
            </TouchableOpacity>
        )
    }

    return ( 
        <FlatList data={CATEGORIES} renderItem={renderData} />
    )
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: colors.Primary   
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    renderStyle: {
        flex: 1,
        margin: 10,
        height: 100
    }
});

export default CategoriesScreen;