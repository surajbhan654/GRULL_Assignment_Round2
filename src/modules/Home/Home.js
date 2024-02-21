import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import Stats from '../../components/Stats'
import Category from '../../components/Category'

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        const fetchProducts = async () => {
            const resList = await fetch('https://fakestoreapi.com/products?limit=12');
            const data = await resList.json();
            setProducts(data);
            }
         fetchProducts();
    },[])

    return (
        <>
          {/* <Hero/>  */}
          <Category/>
          <h1 className='text-4xl font-bold text-center mt-10'>All Products</h1>

          <div>
             {
                products.length > 0 ? <ProductCard products={products} /> : <div className='h-[35vh] flex justify-center items-center text-3xl'> Loading...... </div>
             }
          </div>
          
          <Stats/>
        </>
    )
}

export default Home