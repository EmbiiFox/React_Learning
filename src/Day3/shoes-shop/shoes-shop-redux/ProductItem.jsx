import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddToShoppingList } from '../../store/actions/shoesShopActions';
class ProductItem extends Component {
  render() {
    const { shoe, addToShoppingList } = this.props;

    return (
      <div className="col-4" style={{ paddingBottom: '30px' }}>
        <div className="card">
          <img className="card-img-top" src={shoe.image} />
          <div className="card-body">
            <h4 className="card-title">{shoe.name}</h4>
            <p className="card-text">{shoe.price}$</p>
            <button
              className="btn btn-dark"
              onClick={() => addToShoppingList(shoe)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// Tạo ra các function để dispatch action, các func này sẽ được chuyển thành props component
const mapDispatchToProps = dispatch => ({
  addToShoppingList: shoe => {
    // Dispatch action lên reducer
    dispatch(actAddToShoppingList(shoe));
  },
});

export default connect(null, mapDispatchToProps)(ProductItem);
