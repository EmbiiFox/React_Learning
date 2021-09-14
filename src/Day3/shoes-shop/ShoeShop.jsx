import React, { Component } from "react";
import ProductList from "./ProductList";
import ShopppingList from "./ShoppingList";
// import file data.json
import productList from "./data.json";

export default class Shoeshop extends Component {
  state = {
    shoppingList: [],
  };

  //Call back Function
  addToShoppingList = (shoe) => {
    //Copy mảng mới để xử lý
    const shoppingListUpdate = [...this.state.shoppingList];
    //Bổ sung thuộc tính của shoe
    const newShoe = { ...shoe, quantity: 1 };

    // Kiểm tra sản phẩm tồn tạo trong mảng hay chưa
    const idx = shoppingListUpdate.findIndex((item) => item.id === shoe.id);
    if (idx === -1) {
      //Chưa tồn tại trong mảng
      shoppingListUpdate.push(newShoe);
    } else {
      shoppingListUpdate[idx].quantity += 1;
    }
    //cập nhập lại state
    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };
  updateQuantity = (id, action) => {
    // console.log(id,action);
    const shoppingListUpdate = [...this.state.shoppingList];
    // action:true=> tăng
    //Tìm vị trí phần tử cần cập nhập số lượng
    const idx = shoppingListUpdate.findIndex((item) => item.id === id);
    if (action) {
      shoppingListUpdate[idx].quantity += 1;
    } else {
      if (shoppingListUpdate[idx].quantity > 1)
        shoppingListUpdate[idx].quantity -= 1;
    }

    //cập nhập state
    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };

  removeFromShoppingList = (id) => {
    const shoppingListUpdate = [...this.state.shoppingList];

    // Tìm vị trí cần xóa

    const idx = shoppingListUpdate.findIndex((item) => (item.id = id));
    // Xóa một phần tử tại vị trí idx
    shoppingListUpdate.splice(idx, 1);
    //cập nhập lại state
    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };
  render() {
    const { shoppingList } = this.state;
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
                Shopping List({shoppingList.length})
              </button>
            </div>
          </div>
        </div>
        <ShopppingList
          shoppingList={shoppingList}
          updateQuantity={this.updateQuantity}
          removeFromShoppingList={this.removeFromShoppingList}
        />
        <ProductList
          productList={productList}
          addToShoppingList={this.addToShoppingList}
        />
      </div>
    );
  }
}
