import { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import Toast from './components/Toast';

export default function App() {
  // cart lives here so the header badge and the sidebar stay in sync
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', visible: false });

  // little popup that fades out after a couple seconds
  const showToast = useCallback((message) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 2000);
  }, []);

  const addToCart = useCallback((item) => {
    setCart(prev => {
      // if it's already in the cart just bump the quantity
      const existing = prev.find(c => c.name === item.name);
      if (existing) return prev.map(c => c.name === item.name ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
    showToast(`${item.name} added to cart!`);
  }, [showToast]);

  const changeQty = useCallback((idx, delta) => {
    setCart(prev => {
      const updated = prev.map((item, i) => i === idx ? { ...item, qty: item.qty + delta } : item);
      return updated.filter(item => item.qty > 0); // drop anything that hits 0
    });
  }, []);

  const removeItem = useCallback((idx) => {
    setCart(prev => prev.filter((_, i) => i !== idx));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    showToast('Cart cleared');
  }, [showToast]);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <CartSidebar
        cart={cart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onChangeQty={changeQty}
        onRemove={removeItem}
        onClear={clearCart}
      />
      <main>
        <Hero />
        <Menu onAddToCart={addToCart} />
        <Gallery />
        <About />
        <Contact showToast={showToast} />
      </main>
      <Footer />
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
