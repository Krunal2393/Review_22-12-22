import React from "react";
import {Link} from 'react-router-dom';
import{useSelector} from 'react-redux';


function Navbar(){
    


  const items = useSelector((state) => state.cart);
  console.log(items);


return(
   
        <div  >
          
        
    
          <div style={{
            margin: "3px 10px 10px 10px" ,border:"inset"
          }}>
            <Link className='navLink' to="/Home" style={{margin:"50px"}}>Home</Link>
            <Link className='navLink' to="/Cart">Cart</Link>
            
           
    
            <span style={{margin:470}} className='cartCount'>Cart Item:{ items.length} </span>
          </div>
        </div>
      )
    }



export default Navbar
