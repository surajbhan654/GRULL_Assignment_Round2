import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
// import Stats from '../components/Stats'
// import ProductCard from '../components/ProductCard';

const Category = () => {

    const [cot, setCot] = useState([]);

    useEffect( ()=>{
        const fetchCot = async () => {
            const resList = await fetch('https://fakestoreapi.com/products/categories')
            const data = await resList.json();
            setCot(data);
            }
         fetchCot();
    },[])
    
//  if (cot.length === 0) return <div className='text-xl text-center mt-44 mb-40'> Loading... </div>
 
 return (
    <>
    <FeatureCard cards={cot}/>
    </>
   )
}

export default  Category ;
