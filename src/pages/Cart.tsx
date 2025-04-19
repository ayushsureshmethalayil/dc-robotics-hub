import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 text-black">Your Cart</h1>
        <p className="text-xl text-gray-600">Review your selected robotic solutions.</p>
      </section>

      <section>
        {cartItems.length > 0 ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </td>
                    <td>{item.price}</td>
                    <td><button onClick={() => removeFromCart(item.id)}>Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>Total: {/* calculate total here */}</div>
          </div>
        ) : (
          <div>Your cart is empty.</div>
        )}
      </section>
    </div>
  );
};

export default Cart;















// import React from 'react';
// import { useCart } from '../context/CartContext';

// const Cart: React.FC = () => {
//   const { cartItems, removeFromCart, clearCart } = useCart();

//   const total = cartItems.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <div className="container mx-auto py-12 px-4">
//       <h1 className="text-4xl font-bold mb-6">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-6">
//           {cartItems.map((item, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center border border-gray-300 rounded p-4"
//             >
//               <div>
//                 <h2 className="text-lg font-semibold">{item.name}</h2>
//                 <p className="text-gray-500">${item.price.toLocaleString()}</p>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="text-red-500 hover:underline"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="text-right mt-6">
//             <p className="text-xl font-bold">Total: ${total.toLocaleString()}</p>
//             <button
//               onClick={clearCart}
//               className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
//             >
//               Clear Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
