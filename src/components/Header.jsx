import { useState, useEffect } from 'react';

const navItems = ['HOME', 'MENU', 'GALLERY', 'ABOUT', 'CONTACT'];

export default function Header({ cartCount, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  // highlight the nav link for whatever section you're scrolled to
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close the mobile menu after tapping a link
  const handleNavClick = (item) => {
    setMenuOpen(false);
    setActive(item.toLowerCase());
  };

  return (
    <header id="header">
      <div className="container header-inner">
        <a href="#home" className="logo">Feane</a>
        <nav id="navbar" className={menuOpen ? 'open' : ''}>
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={active === item.toLowerCase() ? 'active' : ''}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-icons">
          {/* only show the badge once something's in the cart */}
          <button className="icon-btn cart-toggle" aria-label="Shopping cart" onClick={onCartOpen}>
            <i className="fas fa-shopping-cart" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
          {/* hamburger only shows on mobile (hidden with CSS on desktop) */}
          <button className="icon-btn" id="hamburger" aria-label="Toggle menu" onClick={() => setMenuOpen(v => !v)}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
