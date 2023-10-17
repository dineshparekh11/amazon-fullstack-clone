import React from 'react';
import Product from './Product';


function Home() {
  return (
    <div>
        
        <div className="home_row">
        <Product 
            title="The lean startup"
            price={2990}
            image=""
            rating={5}
        />

        <Product 
            title="7AM2M Sonic Electric Toothbrush"
            price={4999}
            image=""
            rating={3}
        />

        </div>
    </div>
  )
}

export default Home