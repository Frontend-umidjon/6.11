import ProductsHome from '@/components/productsHome/ProductsHome'
import { useStateValue } from '@/context'
import React, { useEffect } from 'react'
import EmptyWishlist from '../emptyWishlist/EmptyWishlist'

const Wishlist = () => {
    const [state, dispatch] = useStateValue()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const Redirect = () => {
        window.location.href = '/'
    }

    return (
        <>
            {state.wishlist.length > 0 ? (
                <ProductsHome products={state.wishlist}>
                    <div>
                        <h2 className="text-2xl border-b border-black">Your Favourites</h2>
                    </div>
                </ProductsHome>
            ) : (
                <EmptyWishlist onRedirect={Redirect} />
            )}
        </>
    )
}

export default Wishlist
