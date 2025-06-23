import React, { PureComponent } from "react";
import NavBar from "./components/navbar";
import ShoppingCart from "./components/shoppingCart";
import Product from "./components/product";

class App extends PureComponent {
  state = {
    products: [
      { id: 1, name: "Burger", count: 0, isInCart: false },
      { id: 2, name: "Fries", count: 0, isInCart: false },
      { id: 3, name: "Cola", count: 0, isInCart: false },
    ],
  };
  handleReset = () => {
    //Clone
    let products = [...this.state.products];
    //Edit
    products = products.map((p) => {
      p.count = 0;
      p.isInCart = false;
      return p;
    });
    //Set state
    this.setState({ products });
  };
  IncrementHandler = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].count++;
    products[index].isInCart = true;
    //Set State
    this.setState({ products });
  };
  handleDelete = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    //Edit
    products.splice(index, 1);
    //Set State
    this.setState({ products });
  };
  render() {
    return (
      <>
        <NavBar
          productsCount={this.state.products.filter((p) => p.isInCart).length}
        />
        <main className="container">
          <ShoppingCart
            products={this.state.products}
            onIncrement={this.IncrementHandler}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
          <Product />
        </main>
      </>
    );
  }
}
export default App;
