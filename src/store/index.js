import{createStore,combineReducers} from 'redux';
import shoesShopReducer from './reducers/ShoesShopReducer';
// Khởi tạo root reducer( quản lý reducer)
const rootReducer=combineReducers({
   shoesShopReducer // shoesShopReducer: shoesShopReducer
})
// Khởi tạo store (quản lý root reducer)
const store=createStore(rootReducer);
export default store;