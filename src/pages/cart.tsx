import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

function Cart() {
  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  );

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 100 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">
          🛒 Your Cart is Empty
        </h1>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 text-white">
      <h1 className="text-4xl font-bold mb-8">
        🛒 Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border border-gray-700 rounded-xl p-4"
            >
              <img
                src={item.images}
                alt={item.title}
                className="w-28 h-28 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h2 className="text-xl font-semibold">
                  {item.title}
                </h2>

                <p className="text-gray-400">
                  {item.category}
                </p>

                <p className="mt-2 font-bold text-lg">
                  ₹{item.price}
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <button className="bg-red-500 px-3 py-1 rounded">
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button className="bg-green-500 px-3 py-1 rounded">
                    +
                  </button>

                  <button className="ml-4 bg-gray-700 px-4 py-1 rounded">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border border-gray-700 rounded-xl p-6 h-fit sticky top-4">
          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>₹{shipping}</span>
          </div>

          <hr className="border-gray-700 my-4" />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold">
            Proceed to Checkout
          </button>

          <button className="w-full mt-3 border border-gray-600 py-3 rounded-xl">
            Continue Shopping
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;