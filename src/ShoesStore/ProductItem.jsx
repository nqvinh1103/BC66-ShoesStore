import React, { Component } from 'react';
import { Popconfirm } from 'antd';

export default class ProductItem extends Component {
  renderShoesCart = () => {
    const { arrayCart, handleDelete, handleChangeQuantity } = this.props;

    return arrayCart.map((shoes) => {
      const isQuantityZero = shoes.soLuong === 0;
      const totalPrice = shoes.price * shoes.soLuong;
      return (
        <tr key={shoes.id}>
          <td>{shoes.name}</td>
          <td>
            <img height={50} src={shoes.image} alt="" />
          </td>
          <td>
            {isQuantityZero ? (
              <Popconfirm
                title="Bạn có chắc chắn muốn xóa sản phẩm này không?"
                onConfirm={() => {
                  handleDelete(shoes.id);
                }}
                okText="Yes"
                cancelText="No"
              >
                <button className="btn btn-danger">-</button>
              </Popconfirm>
            ) : (
              <button
                onClick={() => {
                  handleChangeQuantity(shoes.id, -1);
                }}
                className="btn btn-danger"
              >
                -
              </button>
            )}
            <span className="mx-2">{shoes.soLuong}</span>
            <button
              onClick={() => {
                handleChangeQuantity(shoes.id, +1);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>{totalPrice} $</td>
          <td>
            <Popconfirm
              title="Bạn có chắc chắn muốn xóa sản phẩm này không?"
              onConfirm={() => {
                handleDelete(shoes.id);
              }}
              okText="Yes"
              cancelText="No"
            >
              <button className="btn btn-primary">Xoá</button>
            </Popconfirm>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="my-5 col-6">
        <h3>Cart</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderShoesCart()}</tbody>
        </table>
        {!this.props.arrayCart.length && (
          <div className="alert alert-danger">Giỏ hàng trống</div>
        )}
      </div>
    );
  }
}
