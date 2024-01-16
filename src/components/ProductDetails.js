import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../globalComponents/products/products.json';
import Navbar from '../globalComponents/NavBar';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductDetails = () => {
  const { id } = useParams();

  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  // Estado para controlar a cor e o tamanho selecionados
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  // Funções para atualizar o estado quando uma cor ou tamanho for selecionado
  const handleColorClick = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  return (
    <div>
      <Navbar />
      <div className="product-details-container px-2 py-3">
        <div className="product-image col-lg-6 col-sm-12">
          <img
            src={product.image}
            alt={product.title}
            className="responsive-image px-2"
          />
        </div>
        <div className="product-info col-lg-6 col-sm-12 w-100 px-2">
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="p-2">
                {product.title} | {product.brand}
              </h5>
              <div className="d-flex flex-column m-2">
                <i
                  className="bi bi-star p-2"
                  size="2x"
                  style={{ cursor: 'pointer' }}
                ></i>
                <i
                  className="bi bi-share p-2"
                  size="2x"
                  style={{ cursor: 'pointer' }}
                ></i>
              </div>
            </div>
            <h2
              className="p-2"
              style={{ borderTop: '1px solid #E3D3B2', marginBottom: '32px' }}
            >
              € {product.price}
            </h2>
            {/* Opções de cores */}
            <div className="d-flex">
              <p className="mr-2">Cor:</p>
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`color-option ${
                    selectedColor === color ? 'selected' : ''
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorClick(color)}
                ></div>
              ))}
            </div>

            {/* Opções de tamanhos */}
            <div className="mt-2">
              <p>Tamanho:</p>
              <div className="d-flex">
                {product.sizes.map((size, index) => (
                  <button
                    key={size}
                    className={`btn btn-outline-primary size-button mb-4 ${
                      selectedSize === size ? 'selected' : ''
                    }`}
                    onClick={() => handleSizeClick(size)}
                    style={{
                      marginRight:
                        index < product.sizes.length - 1 ? '8px' : '0',
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button className="btn btn-primary w-100 d-none d-sm-block">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <p className="py-5 px-4">
        {product.description}DETAILS Description A prime example of exquisite
        Italian craftmanship, the tailored cut of this double-breasted wool
        blazer by Lemon W is complemented by classic notched lapels. Spun from
        rich wool fibres, a slightly cropped silhouette - and a triangle logo on
        the back put a twist on its traditional allure. Made in: Italy Brand
        color: A7C7D9 LIGHT BLUE Highlights black wool tailored design notched
        lapels double-breasted button fastening long sleeves buttoned cuffs two
        front jetted pockets straight hem cropped Brand style ID: UGM257SOOO11A6
      </p>
      <button
        className="btn btn-primary w-100 mt-3 d-sm-none"
        style={{
          position: 'fixed',
          bottom: '0',
          left: '0',
          right: '0',
          margin: 'auto',
          zIndex: '1000',
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
