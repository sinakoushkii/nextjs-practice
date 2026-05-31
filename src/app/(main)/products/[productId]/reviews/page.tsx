import Link from 'next/link'
import React from 'react'

const Reviews = ({productId}:{productId:string}) => {
  return (
    <div>
        <ul>
        {[1, 2, 3, 4, 5].map((item) => (
          <li>

            <Link className="text-blue-500 font-bold mr-4" href={`/products/${productId}/reviews/${item}`}>review - {item}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Reviews