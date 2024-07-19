import React from 'react';

const ProductList = ({ products, updateProduct, deleteProduct }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Numero</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.Marca}</td>
            <td>{product.Modelo}</td>
            <td>{product.Numero}</td>
            <td>{product.Precio}</td>
            <td>
              <button onClick={() => updateProduct(index, product)}>Editar</button>
              <button onClick={() => deleteProduct(index)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
