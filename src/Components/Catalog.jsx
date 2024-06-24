import React, { useState, useEffect } from 'react';
import '../Components/Catalog.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Catalog() {
  const [filteredData, setFilteredData] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5000);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const location = useLocation();

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories({
      ...selectedCategories,
      [categoryId]: !selectedCategories[categoryId],
    });
  };

  const filterByPriceAndCategory = (searchQuery = '') => {
    if (!Array.isArray(data)) return;

    let filtered = data.filter((item) => item.price >= minValue && item.price <= maxValue);
    
    const selectedCategoryValues = Object.values(selectedCategories);
    if (selectedCategoryValues.some((value) => value)) {
      filtered = filtered.filter((item) => selectedCategories[item.info_id]);
    }
    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.articul.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ba65-94-141-125-64.ngrok-free.app/api/detail/all', {
          headers: {
            'ngrok-skip-browser-warning': 'true',
          },
        });
        if (Array.isArray(response.data)) {
          setData(response.data);
          setFilteredData(response.data);
        } else {
          throw new Error('Data is not an array');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const infoId = params.get('info_id');
    const searchQuery = params.get('search');
    if (infoId) {
      setSelectedCategories((prevCategories) => ({
        ...prevCategories,
        [infoId]: true,
      }));
    }
    filterByPriceAndCategory(searchQuery);
  }, [location.search]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('search');
    filterByPriceAndCategory(searchQuery);
  }, [minValue, maxValue, data, selectedCategories]);

  return (
    <>
      <div className='glivn'>
        <div className="container-common">
          <div className="sidebarr">
            <div className="filter-section">
              <h4>Price Range</h4>
              <div className="range-container">
                <input
                  type="number"
                  className="range-input"
                  value={minValue}
                  onChange={handleMinChange}
                  min="0"
                  max="10000"
                />
                <span>:</span>
                <input
                  type="number"
                  className="range-input"
                  value={maxValue}
                  onChange={handleMaxChange}
                  min="0"
                  max="10000"
                />
                <div className="slider-container-ct">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={minValue}
                    onChange={handleMinChange}
                    className="slider-ct"
                  />
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="slider-ct"
                  />
                </div>
              </div>
            </div>

            <div className="filter-section">
              <h4>Categories</h4>
              {Object.keys(selectedCategories).map((categoryId) => (
                <label key={categoryId} className={`category-label category-${categoryId}`}>
                  <input
                    type="checkbox"
                    value={categoryId}
                    checked={selectedCategories[categoryId]}
                    onChange={() => handleCategoryChange(categoryId)}
                    className={`category-checkbox category-${categoryId}`}
                  />
                  {categoryId === '1' && "Шины"}
                  {categoryId === '2' && "Тех запчасти"}
                  {categoryId === '3' && "Масла"}
                  {categoryId === '4' && "Инструменты"}
                  {categoryId === '5' && "АвтоХимия"}
                  <span>(1)</span>
                </label>
              ))}
            </div>
          </div>
          <div className="product-grid">
            {filteredData && filteredData.map((item) => (
              <div key={item.detail_id} className="product-card">
                <img src={`data:image/png;base64,${item.img}`} alt={item.name} />
                <h2>{item.name}</h2>
                <div className="info">
                  <p className="price">Price: {item.price}</p>
                  <button className="buy-button" onClick={() => handleBuyClick(item.detail_id)}>Купить</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
