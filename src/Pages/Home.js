import React from 'react'
import Products  from '../Components/Products'

function Home  () {
  return (
    <div>
      <h1>
      home
      </h1>
    
    
    <h2 className='heading'>Welcome to the online shopping</h2>
    <section>
      <h3>
        Products
      </h3>
      <Products/>
      
    </section>
    </div>
  )
}

export default Home