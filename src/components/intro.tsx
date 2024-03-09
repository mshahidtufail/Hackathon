import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
const Intro = () => {
  return (
    <div>
        <div className='flex font-bold text-[36px] ml-[600px]'>Unique and <br/>Authentic Vintage <br/>Designer Jewellery</div>
        <div className='flex justify-between'>
            
            <div className='w-1/4'>
                    <div className='mb-12'><b>Using Good<br/> Quality Materials</b>
                        <br/>
                        <p className='mt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className=''><b>Modern Fashion <br/> Design</b>
                        <br/>
                        <p className='mt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
            </div>
            <div className='w-1/4'>
            <div className='mb-12'><b>100% Handmade <br/> Products</b>
                        <br/>
                        <p className='mt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className=''><b>Discount for Bulk  <br/> Orders</b>
                        <br/>
                        <p className='mt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
            </div>
            <div className='mr-5 w-1/4 '><Image src='/image/pro1.png' alt='' width={300} height={350}/></div>
            <div className='ml-5 w-1/4'>
                <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                </p>
                <Button className='mt-8 rounded-none font-bold text-center w-28 h-16'>See All<br/>Product</Button>
            </div>
        </div>
    </div>
  )
}

export default Intro