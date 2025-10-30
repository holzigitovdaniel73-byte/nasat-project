import React from 'react'
import WishCard from '../Components/Wishcard/WishCard'
import { useSelector } from 'react-redux'

function Wish() {
  const { items } = useSelector((state) => state.wishlist)

  console.log(items);

  return (
    <div >
      {
        items?.map((item) => (
          <WishCard key={item.id} card={item} />
        ))
      }

    </div>
  )
}

export default Wish
