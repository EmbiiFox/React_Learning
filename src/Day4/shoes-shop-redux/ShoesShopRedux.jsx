import React, { Component } from "react";
import ProductList from "./ProductList";
import ShopppingList from "./ShoppingList";

// import file data.json
import productList from "./data.json";
import {connect} from 'react-redux'

 class ShoesShopRedux extends Component {
  state = {
    shoppingList: [],
  };
  // };
  // updateQuantity = (id, action) => {
  //   // console.log(id,action);

  // };

  // removeFromShoppingList = (id) => {

  // };
  render() {
    // const { shoppingList } = this.state;
    const { lengthShoppingList } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row my-5">
            <div className="col-7 text-right">
              <h2>Shoes Shop</h2>
            </div>
            <div className="col-5">
              {/* Lấy data toggle và sau đó từ shopping List modal  */}
              <button
                className="btn btn-dark text-right"
                data-toggle="modal"
                data-target="#shoppingList"
              >
                {/* Shopping List({shoppingList.length}) */}
                Shopping List({lengthShoppingList})
              </button>
            </div>
          </div>
        </div>
        <ShopppingList
          // shoppingList={shoppingList}
          // updateQuantity={this.updateQuantity}
          // removeFromShoppingList={this.removeFromShoppingList}
        />
        <ProductList
          productList={productList}
          // addToShoppingList={this.addToShoppingList}
        />
      </div>
    );
  }
}
const mapStateToProps=state=>({
    lengthShoppingList:state.shoesShopReducer.shoppingList.length,
  }
)
export default connect(mapStateToProps)(ShoesShopRedux);
