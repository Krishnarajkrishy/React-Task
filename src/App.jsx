import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';
import NavBar from './NavBar';
import CartModal from './CartModal';

const App = () => {
    const fackApi = 'https://fakestoreapi.com/products';
    const [product,setProduct] = useState([])
    const [cart, setCart] = useState([]);
    const [modalOpen,setModalOpen] = useState(false)

    useEffect(() => {
        const getdata = async () => {
            try {
                const res = await fetch(fackApi)
                const data = await res.json()
                setProduct(data)
                
            } catch (error) {
                console.warn(error)
                
            }
        }
        getdata();
    }, []);
    
     const addToCart = (product) => {
       if (cart.some((item) => item.id === product.id)) {
         alert("product is already added ");
       } else {
         setCart([...cart, product]);
       }
     };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId))
    };

       
  return (
    <div className="container mx-auto p-4">
      <NavBar cartCount={cart.length} openModal={() => setModalOpen(true)} />
      {modalOpen && (
        <CartModal
          cartItems={cart}
          closeModal={() => setModalOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}
       <div className="p-4">
        <h1 className="text-3xl font-serif font-bold ">Products</h1>
      </div>
      <div className="flex flex-wrap gap-4 justify-evenly">
        {product.map((product) => (
          <ProductList
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            onCartClick={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default App