import PropTypes from 'prop-types'

const ProductList = ({ image, title, price, onCartClick }) => {
    
    return (
      <div className="flex flex-col justify-center items-center p-8 w-1/4 gap-8">
        <img className="w-52 h-52" src={image} alt={title} />
        <div className="flex flex-col justify-center items-center gap-4">
          <h3 className="text-xl font-semibold text-center ">{title}</h3>
          <p className="text-xl font-bold">
            Price : ${price ? price.toFixed(2) : "N/A"}
          </p>
          <button
            className="text-xl font-semibold border-2 border-slate-500  bg-slate-500 active:bg-slate-800 text-white rounded-md px-4 py-2"
            type="button"
            onClick={onCartClick}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
}

ProductList.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onCartClick: PropTypes.func.isRequired,
        
};




export default ProductList