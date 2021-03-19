import React, { Component } from "react";
import Product from "./product";

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  componentDidMount() {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data
        });
      });
  }

  render() {
    const { products } = this.state;

    return (
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => {
            const { id, name, price } = product;
            return <Product key={id} id={id} name={name} price={price} />;
          })}
        </tbody>
      </table>
    );
  }
}
