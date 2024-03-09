import React from 'react'

import Link from 'next/link'
import { Female_Product } from '@/utils/femaleproducts'

const FemalePage = () => {
  return (
    <div className='grid grid-cols-3 gap-24 mt-24'>{Female_Product.map((product)=>(
      <div key={product.name}>
      <Link href={`products/${product.id}`}>
               <div>
                   <img src={product.img} alt='' width={270} height={374}/> 
               </div>
               
               <div className='font-bold'>
                   <p>{product.name}</p>
                   <p className='text-gray-400'>{product.type}</p>
                   <p>{product.price}</p>
               </div>
       </Link></div>))}
   </div>
  )
}

export default FemalePage