import React from 'react'

const ShimmerUI = ({products=[]}) => {
  return (
    <div>
        <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                         {
                            products?.map( () => {
    
                                return(
                                    <div  className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-20 mb-4 cursor-pointer">
                                    <div className="block relative h-48 rounded overflow-hidden">
                                        <img alt="Loading" className="object-contain object-center w-full h-full block"  />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 bg-gray-200"> </h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium bg-gray-200"></h2>
                                        <p className="mt-1 bg-gray-200"></p>
                                    </div>
                                </div>
                             )
                           })
                         }
                    </div>
                </div>
            </section>
    </div>
  )
}

export default ShimmerUI