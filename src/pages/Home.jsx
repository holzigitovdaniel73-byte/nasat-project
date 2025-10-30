import React, {useEffect} from 'react'
import Banner from '../Components/Banner/Banner'
import ProductLice from '../Components/ProductLice/ProductLice'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../redux/Thunk/thunk'

function Home() {
  const {product, loading, error}= useSelector((state) => state.products)
  const dispatch = useDispatch()

useEffect(() => {
  dispatch(getProduct())
},[])
console.log(product);

  return (
    <div>
     
    <Banner/>
    <ProductLice list={product}/>

    </div>
  )
}

export default Home
