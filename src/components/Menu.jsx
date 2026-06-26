import { useState } from 'react';
import { menuItems } from '../data';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'burgers', label: 'Burgers' },
  { key: 'pizza', label: 'Pizza' },
  { key: 'sides', label: 'Sides' },
  { key: 'drinks', label: 'Drinks' },
];

export default function Menu({ onAddToCart }) {
  // which category tab is selected ("all" shows everything)
  const [active, setActive] = useState('all');

  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-subtitle">Discover our carefully crafted dishes</p>

        <div className="menu-filters">
          {filters.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${active === f.key ? 'active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {menuItems.map(item => (
            // keep all cards mounted and just hide the ones that don't match
            <div
              key={item.id}
              className={`menu-card ${active !== 'all' && active !== item.category ? 'hidden' : ''}`}
            >
              <div className="menu-card-img">
                <img src={item.img} alt={item.name} loading="lazy" />
              </div>
              <div className="menu-card-body">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="menu-card-footer">
                  <span className="price">${item.price.toFixed(2)}</span>
                  <button className="btn btn-sm add-to-cart" onClick={() => onAddToCart(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
