import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../redux/actions/productAction'
import { addToCart } from '../redux/actions/cartActions'

const Home = () => {

    const { loading, products, error } = useSelector(state => state.product)
    const dispatch = useDispatch();
    let cart=useSelector(state=>state.cart)
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    function checkCart(id){
        let cnt=0;
        cart.forEach((product) => {
            if(product.id===id)cnt++;
        });
        if(cnt>0){
            alert("item already present in the cart")
            return true;
        }
        return false;
    }

    return (
        <div className='home'>
            <h1>All Items</h1>
            <div className='product-container'>
                {
                    products.length > 0 && (
                        products.map((product) => (
                            <div key={product.id} className='product'>
                                <img src={product.thumbnail} alt={product.title} />
                                <p>Title : {product.title}</p>
                                <p>Price : ${product.price}</p>
                                <button className='btn' onClick={(e) => {
                                    e.target.backgroundColor = "grey";
                                    if (!checkCart(product.id)) {
                                        dispatch(addToCart(product));
                                    }
                                }}>Add To Cart</button>
                            </div>
                        ))

                    )
                }
            </div>
        </div>
        )
}

            export default Home