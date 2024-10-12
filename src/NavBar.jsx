import PropTypes from 'prop-types'

const NavBar = ({cartCount,openModal}) => {

  return (
    <nav className="border-b-2 shadow-lg h- 24  flex justify-around mt-4 p-4 items-center">
      <h2 className="text-3xl font-serif font-bold ">FackStore</h2>
      <div>
        <button type="button"
          onClick={openModal}
          className="text-xl font-bold rounded-lg px-4 py-2 bg-slate-500
           active:bg-slate-800 text-white">
          Cart : {cartCount}
        </button>
      </div>
    </nav>
  );
}

NavBar.propType = {
  cartCount: PropTypes.number.isRequired,
  openModel: PropTypes.func.isRequired
}

export default NavBar