import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import heropic from "/public/heropic.webp"
import textpic from "/public/textpic.webp"
import textpic1 from "/public/textpic1.webp"
import textpic3 from "/public/textpic3.webp"
import textpic4 from "/public/textpic4.webp"

const Hero = () => {
  return (
    <section className='flex flex-col justify-between md:flex-row'>
        <div className='w-[30%]'>
            <Badge variant="outline" className='bg-blue-100 text-blue-700 font-bold text-[16px] mt-24'>sale 70%</Badge>
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
                                        An Industrial Take on Streetwear
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                 Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                            </p>
             <Button variant="outline" className='bg-black text-white py-10 gap-2 rounded-none mt-6 w-40'><ShoppingCart/><ul className='flex flex-col'><li>Start</li> <li></li>Shopping</ul></Button>
             <div className='md:flex mt-6 gap-5'>
                <Image src={textpic1} alt='font' className=''/>
                <Image src={textpic} alt='font'/>
                <Image src={textpic3} alt='font'/>
                <Image src={textpic4} alt='font'/>
             </div>
        </div>
        <div className='w-[40%] mr-24'> 
            <div className='sm:h-[250px] sm:w-[250px] md:h-[500px] md:w-[500px] bg-[#FFECE3] rounded-full mt-10 flex justify-center items-center'>
                <div></div> <Image src={heropic} alt='pic' className= 'sm:h-[275px] md:h-[550px] '/>
                
            
            </div>
        
         </div>
    </section>
    
  )
}

export default Hero