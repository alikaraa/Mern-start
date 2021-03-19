import React from "react";

export default function Product(props) {
  const { id, name, price } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
