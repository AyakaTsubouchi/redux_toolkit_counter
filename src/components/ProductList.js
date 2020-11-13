import React from 'react';

const products = [
    {
        name:"1",
        price:100
    },
    {
        name:"2",
        price:200
    },
    {
        name:"3",
        price:300
    }
]

const ProductList = () => {
   products.map(item=> {
       return (
           <>
           <li>{item.name}</li>
           <li>{item.price}</li>
           <li>
               <button>+</button>
               <button>-</button>
           </li>
           </>
       )
   })
};

export default ProductList;