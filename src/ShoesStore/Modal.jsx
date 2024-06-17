import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const { product, handleClose } = this.props;
    if (!product) {
      return null;
    }
    return (
      <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.8)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{product.name}</h5>
            </div>
            <div className="modal-body">
              <img src={product.image} width={100} />
              <p><strong>Price:</strong> {product.price} $</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Short Description:</strong> {product.shortDescription}</p>
              <p><strong>Quantity:</strong> {product.quantity}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
