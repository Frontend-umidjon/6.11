import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context";

const ProductsHome = ({ products,children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [state ,dispatch] = useStateValue()
  

  useEffect(() => {
    if (products && products.length > 0) {
      setLoading(false); 
    }
  }, [products]);

  const SkeletonLoader = () => (
    <div className="p-4 animate-pulse">
      <div className="bg-gray-300 h-[250px] rounded-lg"></div>
      <div className="mt-6 h-6 bg-gray-300 rounded-md"></div>
      <div className="mt-4 h-4 bg-gray-200 rounded-md"></div>
      <div className="mt-4 h-6 bg-gray-300 rounded-md w-1/2"></div>
      <div className="flex gap-2 mt-3 justify-center">
        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );

  return (
    <div className="py-20">
      <div className="container">
       {children}

        <div>
          <div className="grid grid-cols-4 gap-8 mt-20 max-[950px]:grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:text-center">
            
            {loading
              ? Array(8)
                  .fill(0)
                  .map((_, index) => <SkeletonLoader key={index} />)
              : products?.map((product) => (
                  <div key={product.id} className="p-4 relative">
                    
                     <button className="absolute top-2 right-0 text-xl cursor-pointer"  onClick={()=> dispatch({
                      type:'TOGGLE_LIKE',payload:product
                    })}>
                      {
                        state.wishlist?.some(({id})=> id=== product.id) ? 
                        <FaHeart className="duration-300 text-red-500" />
                        :
                        <FaRegHeart/>
                      }
                     </button>
                    <button  className="absolute bottom-4 right-5 text-xl cursor-pointer">

                    <MdAddShoppingCart/>
                    </button>
                    <div>
                      <img
                        src={product.image}
                        className="h-[250px] max-[500px]:mx-auto"
                        alt={product.title}
                      />
                    </div>
                    <div>
                      <h2
                        className="font-bold mt-6 truncate cursor-pointer"
                        onClick={() => navigate(`/product/${product.id}`)}
                        title="For more info click"
                      >
                        {product.title}
                      </h2>
                      <p className="text-sm text-[#737373] font-bold py-3">
                        English Department
                      </p>
                      <p className="text-[#23856D] font-bold">
                        ${product.price}
                      </p>
                      <div className="flex gap-2 mt-3 max-[500px]:justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                        <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                        <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                        <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHome;
