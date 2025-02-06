import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const EmptyWishlist = ({ onRedirect }) => {
    return (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center">
            <div className="text-gray-500 text-4xl mb-4">
                <AiOutlineShoppingCart size={48} />
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Your Wishlist is Empty
            </h2>
            <p className="text-gray-500 mb-6">
                Add items to your wishlist to keep track of your favorites!
            </p>
            <button
                onClick={onRedirect}
                className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition-all"
            >
                Start Shopping
            </button>
        </div>
    )
}

export default EmptyWishlist
