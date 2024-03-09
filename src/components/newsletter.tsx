import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Newsletter = () => {
  return (
    <div className='text-center mt-'>
    
        <h3 className='text-[28px] font-bold my-2'>Subscribe Our Newsletter</h3>
        <p className='my-5'>Get the latest information and promo offers directly</p>
    
        <div className="flex w-full max-w-sm items-center space-x-2 ml-[340px]">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      
    </div>
  )
}

export default Newsletter