import React, { useEffect, useState } from 'react'
import { request } from "@/api";
import { useNavigate } from 'react-router-dom';


const ProductsHome = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {
        request
            .get("/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data.slice(0, 8));
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className='py-20'>
            <div className='container'>
                <div className='text-center'>
                    <p className='text-[#737373] text-xl font-medium'>Featured Products</p>
                    <h3 className='text-2xl font-bold text-[#252B42]'>BESTSELLER PRODUCTS</h3>
                    <p className='text-[#737373]'>Problems trying to resolve the conflict between </p>
                </div>

                <div>
                    <div className="grid grid-cols-4 gap-8 mt-20 max-[950px]:grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:text-center">
                        {products.map((product) => (
                            <div key={product.id} className="p-4 cursor-pointer">
                                <img
                                    onClick={() => navigate(`/product/${product.id}`)}
                                    src={product.image}
                                    className="h-[250px] max-[500px]:mx-auto"
                                    alt={product.title}
                                />
                                <h2 className='font-bold mt-6 truncate'>{product.title}</h2>
                                <p className='text-sm text-[#737373] font-bold py-3'>English Department</p>
                                <p className='text-[#23856D] font-bold'>${product.price}</p>
                                <div className='flex gap-2 mt-3 max-[500px]:justify-center'>
                                    <div className='w-4 h-4 rounded-full bg-[#23A6F0]'></div>
                                    <div className='w-4 h-4 rounded-full bg-[#23856D]'></div>
                                    <div className='w-4 h-4 rounded-full bg-[#E77C40]'></div>
                                    <div className='w-4 h-4 rounded-full bg-[#252B42]'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsHome