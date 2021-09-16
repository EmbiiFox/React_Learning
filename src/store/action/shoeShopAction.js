import {
    ADD_TO_SHOPPING_LIST,
    UPDATE_QUANTITY,
    REMOVE_FROM_SHOPPING_LIST
} from '../constants/shoesShopConstants'

// import * as shoesShopConstants  from '../constants/shoesShopConstants' 

// const actAddToShoppingLIst=shoe=>{
//     return{
//         type:'ADD_TO_SHOPPING_LIST',
//         payload:shoe,
//     }
// }
export const actAddToShoppingList = shoe => ({
    type: ADD_TO_SHOPPING_LIST,
    payload: shoe,
});

export const actUpdateQuantity = (id, type) => ({
    type: UPDATE_QUANTITY,
    payload: {
        id,
        type
    },
});
export const actRemoveFromShoppingList = id => ({
    type:REMOVE_FROM_SHOPPING_LIST,
    payload: {
        id
    },
})