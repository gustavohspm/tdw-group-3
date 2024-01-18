import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../globalComponents/products/products.json';
import Navbar from '../globalComponents/NavBar';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useShoppingCart } from '../globalComponents/ShoppingCartContext';
import Footer from '../globalComponents/Footer';
import PieGraphics from '../globalComponents/PieGraphics';

const ProductDetails = () => {
  const { id } = useParams();
  const { addItem } = useShoppingCart();

  const product = productsData.find((p) => p.id === parseInt(id));
  console.log(product);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  // Estado para controlar a cor e o tamanho selecionados
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorHex, setSelectedColorHex] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  // Mapear informações do JSON para obter o nome hexadecimal de cada cor
  const colorMap = product.colors.reduce((acc, colorObj) => {
    acc[colorObj.name] = colorObj.hex;
    return acc;
  }, {});

  // Funções para atualizar o estado quando uma cor ou tamanho for selecionado
  const handleColorClick = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
    setSelectedColorHex(colorMap[color]);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  // Função para adicionar o produto ao carrinho
  const handleAddToCart = () => {
    // Verifica se cor e tamanho estão selecionados antes de adicionar ao carrinho
    if (selectedColor && selectedSize) {
      addItem({
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        color: selectedColor,
        colorHex: selectedColorHex,
        size: selectedSize,
        sustainableData: product.sustainableData
      });
    } else {
      alert('Selecione a cor e o tamanho antes de adicionar ao carrinho');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="product-details-container px-2 py-5 mt-4">
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
            <div className="d-flex flex-column">
              <p className="mb-1">Cor: {selectedColor}</p>
              <div className="d-flex flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`color-option ${
                      selectedColor === color.name ? 'selected' : ''
                    }`}
                    style={{
                      backgroundColor: color.hex,
                      width: '40px',
                      height: '40px',
                      marginRight: '8px',
                      marginBottom: '8px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      padding: '4px',
                    }}
                    onClick={() => handleColorClick(color.name)}
                  >
                    {selectedColor === color.hex && (
                      <span style={{ marginLeft: '4px', border: 'blue' }}>
                        {color.hex}
                      </span>
                    )}
                  </button>
                ))}
              </div>
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
                    style={{
                      border: `1px solid ${
                        selectedSize === size ? '#E3D3B2' : 'black'
                      }`,
                      color: `${selectedSize === size ? 'black' : ''}`,
                      backgroundColor: `${
                        selectedSize === size ? '#E3D3B2' : ''
                      }`,
                      marginRight:
                        index < product.sizes.length - 1 ? '8px' : '0',
                    }}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="btn-primary w-100 rounded-2 d-none d-sm-block add-to-cart-button"
            >
              Add to Cart
            </button>
            <div className='mt-4 d-flex justify-content-center'>
              <PieGraphics sustainableData={product.sustainableData} size={204} />
            </div>
          </div>
        </div>
      </div>
      <p className="py-5 px-4">
        DETAILS Description A prime example of exquisite Italian craftmanship,
        the tailored cut of this double-breasted wool blazer by Lemon W is
        complemented by classic notched lapels. Spun from rich wool fibres, a
        slightly cropped silhouette - and a triangle logo on the back put a
        twist on its traditional allure. Made in: Italy Brand color: A7C7D9
        LIGHT BLUE Highlights black wool tailored design notched lapels
        double-breasted button fastening long sleeves buttoned cuffs two front
        jetted pockets straight hem cropped Brand style ID: UGM257SOOO11A6
      </p>
      <button
        onClick={handleAddToCart}
        className="btn btn-primary w-100 mt-3 d-sm-none add-to-cart-button"
        style={{
          position: 'fixed',
          bottom: '0',
          left: '0',
          right: '0',
          margin: 'auto',
          zIndex: '1000',
          maxWidth: '95%',
          marginBottom: '16px',
        }}
      >
        Add to Cart
      </button>
      <Footer />
    </div>
  );
};

export default ProductDetails;
