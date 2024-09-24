
import React, { useState } from 'react';
import Products from '../card/Products';
import Cart from '../card/Cart';
import { makeStyles } from '@mui/styles';


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const useStyles = makeStyles((theme) => ({

button:{
  marginTop: "4%",
  [theme.breakpoints.down('md')]: {
    marginTop: "8%",
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: "10%",
  },
  [theme.breakpoints.down('xs')]: {
    marginTop: "16%",
  }
}

}));

function Dashboard() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const clsses = useStyles()

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div className="app">
      <header className={clsses.button}>
        <button
          style={{ margin: '20px' , backgroundColor: '#3f51b5', border: 'none', padding: '10px', borderRadius: '4px', color: '#ffff' }}
          onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({getCartTotal()})
        </button>

        <button
          style={{
            margin: '20px', backgroundColor: '#3f51b5', border: 'none',
            padding: '10px', borderRadius: '4px', color: '#ffff'
          }}
          onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Products
        </button>
      </header>
      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default Dashboard;
