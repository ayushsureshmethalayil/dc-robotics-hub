import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext"; // Corrected path

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const sum = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotal(sum);
    };
    calculateTotal();
  }, [cartItems]);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                </td>
                <td>{item.price * item.quantity}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="cart-summary">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
