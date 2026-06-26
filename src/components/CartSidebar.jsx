export default function CartSidebar({ cart, isOpen, onClose, onChangeQty, onRemove, onClear }) {
  // running total shown at the bottom
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <aside className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="cart-close-btn" aria-label="Close cart" onClick={onClose}>&times;</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="cart-empty">Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item" key={item.name}>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <span className="cart-item-price">${(item.price * item.qty).toFixed(2)}</span>
                </div>
                <div className="cart-item-controls">
                  <button onClick={() => onChangeQty(index, -1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => onChangeQty(index, 1)}>+</button>
                </div>
                <button className="cart-item-remove" aria-label="Remove item" onClick={() => onRemove(index)}>
                  <i className="fas fa-trash-alt" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span id="cart-total-price">${total.toFixed(2)}</span>
          </div>
          <button className="btn btn-outline" onClick={onClear}>Clear Cart</button>
          <button className="btn btn-primary">Checkout</button>
        </div>
      </aside>
    </>
  );
}
