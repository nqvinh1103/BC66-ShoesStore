import React, { Component } from 'react';
import Modal from './Modal';

export default class ProductList extends Component {
  state = {
    selectedProduct: null
  };

  handleProductClick = (product) => {
    this.setState({ selectedProduct: product });
  };

  renderListShoes = () => {
    const { shoesList, handleAddShoes } = this.props;
    return shoesList.map((item) => (
      <div key={item.id} className="col-4 mb-5">
        <div className="card">
          <div className="card-header">
            <img  onClick={() => this.handleProductClick(item)} width={100} src={item.image} alt={item.name} />
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.price} $</p>
            <button className="btn btn-success" onClick={() => handleAddShoes(item)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    const { selectedProduct } = this.state;
    const { handleChangeQuantity, handleDelete, arrayCart } = this.props;

    return (
      <div className="row col-6">
        {this.renderListShoes()}
        {selectedProduct && (
          <Modal
            product={selectedProduct}
            handleClose={() => this.setState({ selectedProduct: null })}
          />
        )}
      </div>
    );
  }
}
