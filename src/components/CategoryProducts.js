import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';

const CategoryProducts = () => {

    const {name} = useParams();
    const [products, setProducts] = useState([]);
    console.log(name);
    useEffect( ()=>{
        const fetchProducts = async () => {
            const resList = await fetch(`https://fakestoreapi.com/products/category/${name}`)
            const data = await resList.json();
            setProducts(data);
            }
         fetchProducts();
    },[])

if(products.length === 0) return <div className='h-[35vh] flex justify-center items-center text-3xl'> Loading...... </div>
  return (
        <ProductCard products={products}/>
      )
}

export default CategoryProducts