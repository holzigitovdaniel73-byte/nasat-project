import React from 'react'
import "./ProductLice.scss"
import ProductList from '../ProductList/ProductList'
import Card from '../Card/Card'


function ProductLice({ list }) {
    return (
        <div>
            <Card/>
            <div className='productSlice'>
                {
                    list.map((item) => (
                        <ProductList key={item.id} data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductLice
