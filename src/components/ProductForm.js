import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [id, setId] = useState('');
  const [Marca, setMarca] = useState('');
  const [Modelo, setModelo] = useState('');
  const [Numero, setNumero] = useState('');
  const [Precio, setPrecio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ id, Marca, Modelo, Numero, Precio });
    setId('');
    setMarca('');
    setModelo('');
    setNumero('');
    setPrecio('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="number" id="id" value={id} onChange={(e) => setId(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="Marca">Marca:</label>
        <input type="text" id="Marca" value={Marca} onChange={(e) => setMarca(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="Modelo">Modelo:</label>
        <input type="text" id="Modelo" value={Modelo} onChange={(e) => setModelo(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="Numero">Numero:</label>
        <input type="number" id="Numero" value={Numero} onChange={(e) => setNumero(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="Precio">Precio:</label>
        <input type="number" id="Precio" value={Precio} onChange={(e) => setPrecio(e.target.value)} required />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ProductForm;
