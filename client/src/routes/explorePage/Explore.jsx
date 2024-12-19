// src/pages/explore/Explore.jsx
import { useState } from 'react';
import './explore.scss';

function Explore() {
  const [propertyType, setPropertyType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  
  return (
    <div className="explore">
      <div className="explore-header">
        <h1>Explore Properties</h1>
        <p>Discover your perfect property from our extensive collection</p>
      </div>
      
      <div className="filters">
        <div className="filter-section">
          <h3>Property Type</h3>
          <select 
            value={propertyType} 
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="all">All Properties</option>
            <option value="house">Houses</option>
            <option value="apartment">Apartments</option>
            <option value="condo">Condos</option>
          </select>
        </div>
        
        <div className="filter-section">
          <h3>Price Range</h3>
          <select 
            value={priceRange} 
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="0-100000">$0 - $100,000</option>
            <option value="100000-300000">$100,000 - $300,000</option>
            <option value="300000-500000">$300,000 - $500,000</option>
            <option value="500000+">$500,000+</option>
          </select>
        </div>
      </div>

      {/* <div className="featured-properties"> */}
        {/* <h2>Featured Properties</h2> */}
        {/* <div className="property-grid"> */}
          {/* Property cards will go here */}
          {/* You can map through your properties data here */}
        {/* </div> */}
      {/* </div> */}

      <div className="explore-categories">
        <h2>Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="/house.png" alt="Houses" />
            <h3>Houses</h3>
          </div>
          <div className="category-card">
            <img src="/apartment.png" alt="Apartments" />
            <h3>Apartments</h3>
          </div>
          <div className="category-card">
            <img src="/condo.png" alt="Condos" />
            <h3>Condos</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;