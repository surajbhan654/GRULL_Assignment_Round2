import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({products}) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-20 mx-auto ">
                    <div className="flex flex-wrap">
                         {
                            products.map( (product) => {
                                const {id, title, price, category, image} = product;
                                return(
                                <Link to={`/products/${id}`} key={id} className=" lg:w-1/4 md:w-1/2 p-3 w-full border border-opacity-20 mb-3 cursor-pointer rounded-lg">
                                    <div className="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={image} />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{title}r</h2>
                                        <p className="mt-1">${price}</p>
                                    </div>
                                </Link>
                             )
                           })
                         }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductCard