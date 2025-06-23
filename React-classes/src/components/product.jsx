import React, { Component } from "react";
import "../App.css";

class Product extends Component {
  getClasses() {
    const product = this.props.product || {};
    return product.count === 0
      ? "badge bg-warning text-dark m-2"
      : "badge bg-primary m-2";
  }

  render() {
    const { product = {}, onIncrement, onDelete } = this.props;
    if (!product || !product.name) {
      return null;
    }
    // Use first letter as avatar if no image
    const avatar = product.image ? (
      <img
        src={product.image}
        alt={product.name}
        className="product-avatar img-fluid"
      />
    ) : (
      <div className="product-avatar">{product.name.charAt(0)}</div>
    );
    return (
      <div
        className="card mb-3 shadow-sm product-card w-100"
        style={{ maxWidth: 500, margin: "0 auto" }}
      >
        <div className="row g-0 align-items-center flex-column flex-md-row">
          <div className="col-12 col-md-auto d-flex align-items-center justify-content-center p-3">
            {avatar}
          </div>
          <div className="product-divider d-none d-md-block" />
          <div className="col ps-md-2 w-100">
            <div className="card-body d-flex flex-column flex-md-row align-items-center p-2 gap-2 gap-md-0">
              <div className="flex-grow-1 text-center text-md-start">
                <h5 className="card-title mb-1">{product.name}</h5>
                <span
                  className={this.getClasses()}
                  style={{ minWidth: 40, textAlign: "center" }}
                >
                  {product.count || 0}
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-2 mt-md-0">
                <button
                  onClick={() => onIncrement && onIncrement(product)}
                  className="btn btn-primary btn-sm mx-2"
                  title="Add one"
                >
                  +
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  style={{ marginLeft: 8 }}
                  onClick={() => onDelete && onDelete(product)}
                  title="Delete"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
