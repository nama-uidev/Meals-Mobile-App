export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavAction = (id) => {
    return {
        type: TOGGLE_FAVORITE,
        mealId: id
    } 
}