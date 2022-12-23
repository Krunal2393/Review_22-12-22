import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../Store/cartSlice';



const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([])
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json(); 
      
      console.log("data", data);
      setProducts(data);
    }
    fetchProducts();
  }, []);
 
const handleAdd = (product)=>{
  console.log(product)
  dispatch(add(product))

}



  return(
  <div className='productsWrapper'>
    {
      products.map(product =>(
        <div className='card' key={product.id}>
          <img src={product.image} alt=""/>
          <h4>{product.title}</h4>
          
          <div className='d-flex justify-content-center '>
          <h5 >RS.</h5>
          <h5  > {product.price} </h5>
            </div>
         
          <button onClick={function(event){handleAdd(product);handleClick()}} className={active ? "black-btn" : "white-btn"}>ADD TO CART</button>
          </div> 
      ))
    }
    
  </div>

  )

};

export default Products;
