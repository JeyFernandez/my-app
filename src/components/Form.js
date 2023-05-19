import "./Form.css";
import React, { useEffect, useState } from "react";

function Form() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    detalle: "",
    price: "",
    stock: "",
  });
  const [updateProductId, setUpdateProductId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(products);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar la lógica para agregar el producto a la API
    // y actualizar la lista de productos en el estado

    const newProduct = {
      name: formData.name,
      detalle: formData.detalle,
      price: formData.price,
      stock: formData.stock,
    };

    // Realizar la solicitud POST a la API para agregar el nuevo producto
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        // Agregar el nuevo producto a la lista de productos
        setProducts([...products, data]);

        // Limpiar el formulario
        setFormData({
          name: "",
          detalle: "",
          price: "",
          stock: "",
        });
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (productId) => {
    // Realizar la lógica para eliminar el producto de la API
    // y actualizar la lista de productos en el estado

    // Realizar la solicitud DELETE a la API para eliminar el producto
    fetch(`http://localhost:3001/products/${productId}`, {
      method: "DELETE",
    })
      .then((response) => {
        // Remover el producto de la lista de productos
        setProducts(products.filter((product) => product.id !== productId));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="fon">
      <div className="flex">
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <p className="title">Registro de medicamentos</p>
            <p className="message">Por favor ingrese los datos requeridos</p>
            <label>
              <input
                required
                placeholder="Nombre"
                type="text"
                className="input1"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <span></span>
            </label>

            <label>
              <input
                required
                placeholder="Detalle"
                type="text"
                className="input1"
                name="detalle"
                value={formData.detalle}
                onChange={handleInputChange}
              />
              <span></span>
            </label>
            <div className="flex">
              <label>
                <input
                  required
                  placeholder="Precio"
                  type="number"
                  className="input"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
                <span></span>
              </label>
              <label>
                <input
                  required
                  placeholder="Cantidad"
                  type="number"
                  className="input"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                />
                <span></span>
              </label>
            </div>
            <button type="submit" className="submit">
              Agregar
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </button>
          </form>
        </div>
        {/* ----------------- */}
        <div className="container2">
          <h2>Productos Agregados</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Detalle</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.detalle}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                    <button onClick={() => handleDelete(product.id)}>
                      <span class="circle1"></span>
                      <span class="circle2"></span>
                      <span class="circle3"></span>
                      <span class="circle4"></span>
                      <span class="circle5"></span>
                      <span class="text">Eliminar</span>
                    </button>
                    {/* Agregar lógica para editar el producto */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Form;
