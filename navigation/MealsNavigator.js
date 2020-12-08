import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories:  {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    Meals: {
        screen: MealDetailScreen
    }
},  {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'blue'
        }
    }
});

const MealsTabNavigator = createBottomTabNavigator({
    Meals: MealsNavigator
})

export default createAppContainer(MealsTabNavigator);
