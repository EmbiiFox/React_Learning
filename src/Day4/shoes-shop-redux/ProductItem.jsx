import { type } from "jquery";
import React, { Component } from "react";
import{connect} from 'react-redux';
import {actAddToShoppingList} from '../../store/action/shoeShopAction'
 class ProductItem extends Component {
  render() {
    const {shoe, addToShoppingList}=this.props;
    return (
      <div className="col-4" style={{paddingBottom:'30px'}}>
        <div className="card">
          <img className="card-img-top" src={shoe.image}/>
          <div className="card-body">
            <h4 className="card-title">{shoe.name}</h4>
            <p className="card-text">{shoe.price}</p>
            <button className="btn btn-dark" onClick={()=>addToShoppingList(shoe)}>Add to card</button>
          </div>
        </div>
      </div>
    );
  }
}
// Tạo ra function để dispatch action, các function này sẽ dc map thành props component
const  mapDispatchToProps=dispatch=>({
    addToShoppingList:shoe=>{
      // // Khởi tạo action gồm type( để reducer nhận diện action) và data gui723i lên reducer qua payload 
      // const action={
      //   type:'ADD_TO_SHOPPING_LIST',
      //   payload:shoe,
      // }
      //Dispatch action lên reducer
      // dispatch(action);
      dispatch(actAddToShoppingList(shoe));
    }
  }
);

//Hàm dispatch bắt buộc tham số truyền vào là tham số thứ 2
export default connect(null,mapDispatchToProps)(ProductItem);