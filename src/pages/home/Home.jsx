import React, { useEffect, useState } from 'react';
import { request } from '@/api';
import HeaderContact from '@/components/headerContact/HeaderContact';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import EditorHome from '@/components/editorHome/EditorHome';
import ProductsHome from '@/components/productsHome/ProductsHome';
import SummerHome from '@/components/summerHome/SummerHome';
import Footer from '@/components/footer/Footer';
import FeaturedHome from '@/components/feauturedHome/FeaturedHome';

export const Home = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        request
            .get("/products", {
                params: {
                    limit: 8,
                },
            })
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    
    return (
        <>
            
            <Hero />
            <EditorHome />
            <ProductsHome products={products} >
            <div className="text-center">
          <p className="text-[#737373] text-xl font-medium">
            Featured Products
          </p>
          <h3 className="text-2xl font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-[#737373]">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
            </ProductsHome>
            <SummerHome />
            <FeaturedHome />
           
        </>
    );
};

export default Home;