import React from 'react'
import Image from 'next/image'
import event1 from '/public/event1.webp'
import event3 from '/public/event3.webp'
import event2 from '/public/event2.webp'
import { Button } from '@/components/ui/button'

const Promotions = () => {
  return (
    <div>
                <p className="leading-7 [&:not(:first-child)]:mt-6 mb-5 text-blue-700 text-[12px] font-bold text-center mt-24">
                    PROMOTIONS
                </p>
                
                <h2 className="scroll-m-20 text-xl font-semibold tracking-tight text-[36px] flex justify-center">
                    Our Promotions Events
                </h2>

                <div className='mt-10 lg:flex gap-5'>
                    <div>
                           
                           
                            <div className='bg-gray-300 w-[450px] h-[200px] flex mt-2'>
                                <div className='w-'>
                                <p className="leading-7 [&:not(:first-child)]:mt-6 pl-8 flex flex-col item-center justify-evenly w-10%">
                                        <b className='text-[24px]'>GET UP TO 60%</b>For the summer season
                                </p>
                                </div>
                                <Image src={event1} alt='event' className='ml-12 bg-[#D6D6D8]'/>
                            
                            </div>
                                
                                <div className='bg-[#212121] text-white h-[200px] w-[450px] flex flex-col justify-between items-center py-10 mt-2'>

                                
                            
                                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                                    GET 30% Off
                                </h2>
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                    USE PROMO CODE
                                </p> 
                                <Button className='w-60 bg-[#474747]'>DINEWEEKENDSALE</Button></div>
                            
                    </div>
                            
                            <div className='lg:flex gap-3'>
                                <div className='bg-[#EFE1C7] px-6 py-8 w-[250px] h-[408px] mt-2'>
                                    <p>Flex Sweatshirt</p>
                                    <p><del>$100.00</del>&nbsp;&nbsp; <b>$75.00</b> </p>
                                <Image src={event2} alt='event' className='mt-2 w-80 h-80'/>
                                </div>
                                <div className='bg-[#D7D7D9] px-6 py-8 w-[250px] h-[408px] mt-2'>
                                    <p>Flex Push Button Bomber</p>
                                    <p className='line-through'>$225.00</p><p>$190.00</p>
                                <Image src={event3} alt='event' className='mt-2 w- h-[295px]'/>
                                </div>   
                            </div>
                           
                </div>



                                
    </div>
  )
}

export default Promotions