import React from 'react';

import { useSelector,useDispatch} from 'react-redux';
import {remove} from '../Store/cartSlice'
function Cart() {
  const dispatch =  useDispatch();
  const products = useSelector((state) => state.cart);
   
  const handleRemove = (productId) =>{
    dispatch(remove(productId));
    const Product = (product) => {
        let quantity;
        products.map((item) => {
          if (item._id === product._id) {
            quantity = item.customer_qty;
          }
        });
        return quantity;
      };
  
    
  };
  return (
    <>
    <div className='card'>
      <h3>HURRY UP !!!</h3>
      <div className='cartwrapper'>
        {
          products.map((product) => (
            <div key={product?.id} className=''>
                
              <img src={product?.image} alt="" />
              <h5>{product?.title}</h5>
              <h5>{product?.price}</h5>
              <button >+1</button>
              <button  onClick={() => handleRemove(product.id)}>REMOVED</button>
             <button>-1</button>

            </div>
          ))
        }
      </div>
    </div>
    </>

  );
};
export default Cart

