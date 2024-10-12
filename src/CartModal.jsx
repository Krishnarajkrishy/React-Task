import PropTypes from 'prop-types'

const CartModal = ({ cartItems, closeModal, removeFromCart }) => {
  return (
    <>
      <div className="flex flex-col just mt-12 shadow-lg p-4 w-full">
        <h2 className="h-8 text-3xl font-serif font-bold">CartList</h2>
        <div className="flex flex-wrap justify-evenly mt-10 w-full">
          {cartItems.length === 0 ? (
            <p className="text-xl font-semibold mt-10">No items in cart</p>
          ) : (
            cartItems.map((item) => (
              <div className="flex flex-col justify-center items-center p-8 w-2/4 gap-8">
                <img className="w-52 h-52" src={item.image} alt={item.title} />
                <h3 className="text-xl font-semibold text-center ">
                  {item.title}
                </h3>
                <p className="text-xl font-bold">Price :${item.price}</p>
                <button
                  className="text-xl font-semibold border-2 border-slate-500  bg-slate-500 active:bg-slate-800 text-white rounded-md px-4 py-2"
                  onClick={() => removeFromCart(item.id)}
                  type="button"
                >
                  Remo From Cart
                </button>
              </div>
            ))
          )}
        </div>
        <button
          className="text-xl font-bold rounded-lg px-4 py-2 bg-slate-500
           active:bg-slate-800 text-white"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </>
  );
};

CartModal.propTypes = {
  cartItems: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
}

export default CartModal