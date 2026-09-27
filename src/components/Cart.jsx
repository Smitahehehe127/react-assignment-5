import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);
  const [coupon, setCoupon] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = (subtotal * discountPercent) / 100;
  const afterDiscount = subtotal - discount;
  const gst = afterDiscount * 0.18;
  const grandTotal = afterDiscount + gst;

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "SAVE10") {
      setDiscountPercent(10);
    } else {
      setDiscountPercent(0);
    }
  };

  return (
    <section className="cart-section">
      <h2>Shopping Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div>
                  <div className="cart-product">
  
  <h3>{item.name}</h3>
  </div>
                  <p>₹{item.price} × {item.quantity}</p>
                </div>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: {
                          id: item.id,
                          quantity: Math.max(1, item.quantity - 1),
                        },
                      })
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: {
                          id: item.id,
                          quantity: item.quantity + 1,
                        },
                      })
                    }
                  >
                    +
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item.id,
                      })
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="coupon-box">
            <input
              type="text"
              placeholder="Enter coupon (SAVE10)"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />

            <button onClick={applyCoupon}>Apply Coupon</button>
          </div>

          <div className="bill">
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>Discount: -₹{discount.toFixed(2)}</p>
            <p>GST (18%): ₹{gst.toFixed(2)}</p>

            <h2>Grand Total: ₹{grandTotal.toFixed(2)}</h2>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;