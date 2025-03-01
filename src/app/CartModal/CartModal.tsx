const CartModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0  bg-opacity-50 z-50 flex justify-center items-center">
      <div className="container mx-auto p-5 bg-gray-800  text-white rounded-lg shadow-md relative">
        {/* Close Button - Positioned at top right */}
        <button
          onClick={closeModal}
          aria-label="Close Cart"
          className="absolute top-4 right-4 text-white"
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800  text-white p-6 rounded-lg  col-span-3">
            <div className="grid grid-cols-4 gap-4 font-bold border-b pb-2">
              <div className="col-span-2">PRODUCT</div>
              <div className="flex gap-10 col-span-2">
                <div>PRICE</div>
                <div>QUANTITY</div>
                <div>TOTAL</div>
              </div>
            </div>

            {/* Cart Item 1 */}
            <div className="grid grid-cols-4 gap-4 items-center border-b py-4">
              <div className="flex items-center col-span-2">
                <img
                  src="https://cdn.bitcommerz.com/manfarebd/media/1726496302507-manfarebd-id-13.jpeg"
                  alt=""
                  className="w-16 h-16 mr-4"
                />
                <span className="text-sm">
                  Designer Edition Calligraphy T Shirt For Men
                </span>
              </div>
              <div className="flex gap-10 col-span-2 text-sm">
                <div>$120</div>
                <div>2</div>
                <div>$240</div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-span-1 px-5">
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$418</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$418</span>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full py-1.5 rounded-md bg-teal-500 text-white hover:bg-white font-semibold hover:border-teal-500 hover:text-teal-500">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
