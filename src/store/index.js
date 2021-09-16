import{createStore,combineReducers} from 'redux';
import shoesShopReducer from './reducers/ShoesShopReducer';
// Khởi tạo root reducer( quản lý reducer)
const rootReducer=combineReducers({
   // key:value 
   shoesShopReducer // shoesShopReducer: shoesShopReducer
})
// Khởi tạo store (quản lý root reducer)
const store=createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;