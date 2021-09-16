import * as shoesShopConstants  from '../constants/shoesShopConstants'

const initialState = {
    shoppingList: [],
}

const shoesShopReducer = (state = initialState, action) => {
    const {
        type,
        payload
    } = action;
    switch (type) {
        case shoesShopConstants.ADD_TO_SHOPPING_LIST: {
            const shoppingListUpdate = [...state.shoppingList];
            //Bổ sung thuộc tính của shoe
            const newShoe = {
                ...payload,
                quantity: 1
            };

            // Kiểm tra sản phẩm tồn tạo trong mảng hay chưa
            const idx = shoppingListUpdate.findIndex((item) => item.id === payload.id);
            if (idx === -1) {
                //Chưa tồn tại trong mảng
                shoppingListUpdate.push(newShoe);
            } else {
                shoppingListUpdate[idx].quantity += 1;
            }
            //trả về state
            return {
                ...state,
                shoppingList: shoppingListUpdate
            };
        }
        case shoesShopConstants.UPDATE_QUANTITY: {

            const {
                id,
                type
            } = payload
            const shoppingListUpdate = [...state.shoppingList];
            // type :true=> tăng
            //Tìm vị trí phần tử cần cập nhập số lượng
            const idx = shoppingListUpdate.findIndex((item) => item.id === id);
            if (type) {
                shoppingListUpdate[idx].quantity += 1;
            } else {
                if (shoppingListUpdate[idx].quantity > 1)
                    shoppingListUpdate[idx].quantity -= 1;
            }
            //cập nhập state
            return {
                ...state,
                shoppingList: shoppingListUpdate
            };
        }
        case shoesShopConstants.REMOVE_FROM_SHOPPING_LIST: {

            const{id}=payload
            const shoppingListUpdate = [...state.shoppingList];

            // Tìm vị trí cần xóa

            const idx = shoppingListUpdate.findIndex((item) => (item.id = id));
            // Xóa một phần tử tại vị trí idx
            shoppingListUpdate.splice(idx, 1);
            //cập nhập lại state
            return {...state, shoppingList:shoppingListUpdate}
        }
        default:
            return state;
    }

}
export default shoesShopReducer;