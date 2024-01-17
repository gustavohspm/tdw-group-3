import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Profile.css';
import NavBar from '../globalComponents/NavBar';
import Footer from '../globalComponents/Footer';

const Profile = () => {
  const [language, setLanguage] = useState('en-GB');
  const [currency, setCurrency] = useState('GBP');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const getCountryCode = (currencyCode) => {
    const currencyToCountryCode = {
      'GBP': 'GB',
      'EUR': 'PT',
    };

    return currencyToCountryCode[currencyCode] || '';
  };

  return (
    <div>
      <NavBar />
      <div className="user-profile">
        <h1>
        <span className="user-icon">
         </span>
            Welcome, <br/> Renata Vilela!</h1>
        <ul>
          <li>
            <Link to="/my-history">My History</Link>
          </li>
          <li>
            <Link to="/orders-and-returns">Orders & Returns</Link>
          </li>
          <li>
            <Link to="/details-and-password">Details & Password</Link>
          </li>
          <li>
            <Link to="/address">Address</Link>
          </li>
        </ul>

        <h2>Language and Region</h2>

        <div className="select-container">
            <div>
                <label htmlFor="language">
                    Select Language
                </label>
                <select id="language" value={language} onChange={handleLanguageChange}>
                    <option value="en-GB">English (UK)</option>
                    <option value="pt-PT">Português (Portugal)</option>
                    <option value="es-ES">Español (España)</option>
                </select>
                </div>

                <div>
                <label htmlFor="currency">
                    Select Currency
                </label>
                <select id="currency" value={currency} onChange={handleCurrencyChange}>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="EUR">EUR - Euro</option>
                </select>
            </div>
        </div>
            <div className="shop-preferences-section">
                <h2>My Shop Preferences</h2>
                <div>
                <label>
                    <input type="radio" name="shop-preference" value="women" />
                    Women
                </label>
                </div>
                <div>
                <label>
                    <input type="radio" name="shop-preference" value="men" />
                    Men
                </label>
                </div>
                <div>
                <label>
                    <input type="radio" name="shop-preference" value="kids" />
                    Kids
                </label>
                </div>
            </div>
        </div>
        <div className="my-settings-section">
            <h2>My Settings</h2>
            <p>
            <a href="/communication-preferences">Communication Preferences</a>
            </p>
        </div>
        <div className="support-section">
        <h2>Support</h2>
        <ul>
            <li>
            <a href="/about-leafeel">About Leafeel</a>
            </li>
            <li>
            <a href="/terms-and-conditions">Terms & Conditions</a>
            </li>
            <li>
            <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
            <a href="/faqs">FAQs</a>
            </li>
            <li>
            <a href="/brands">Brands</a>
            </li>
        </ul>
        </div>
        <Footer />
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Profile;
