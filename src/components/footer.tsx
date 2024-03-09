import React from 'react'
import Image from 'next/image'
import logo from '/public/logo.webp'
import { App_LinksFooter } from '@/utils/footerConstant'
import Link from 'next/link'
import { App_Support } from '@/utils/supportconstant'
import { App_Contact } from '@/utils/contactconstant'
import { Button } from './ui/button'
import {Twitter} from 'lucide-react'

const Footer = () => {
  return (
    <div className='flex flex-col pt-36 pb-20'>
      
        <div className='flex justify-between mr-24'>
            <div className='py-8 max-w-[35%]'>
                <Image src={logo} alt='logo' />
                <p className='py-8'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                <div className='flex gap-4'>
                    <Button className='bg-slate-200 text-black rounded-lg hover:bg-slate-200 w-12 h-12'><Twitter/> </Button>
                    <Button className='bg-slate-200 text-black rounded-lg hover:bg-slate-200 w-12 h-12 font-bold text-[24px]'>f</Button>
                    <Button className='bg-slate-200 text-black rounded-lg hover:bg-slate-200 w-12 h-12 font-bold text-[24px]'>in</Button>
                </div>
            </div>
            
            <div className='py-8 max-w-[20%]'><p className='font-semibold'>comapny</p>
                <div className='flex flex-col gap-y-4 py-4'>
                    {App_LinksFooter.map((link)=>(<Link href={link.href}>{link.name}</Link>))}
                </div>
            
            </div>
                <div className='flex flex-col gap-y-4 py-8 max-w-[20%]'><p className='font-bold'>Support </p>
                      {App_Support.map((link)=>(<Link href={link.href}>{link.name}</Link>))}
                </div> 
                <div className='flex flex-col gap-y-4 py-8 max-w-[20%]'> <p className='font-semibold'>Contact </p> 
                      {App_Contact.map((link)=>(<Link href={link.href}>{link.name}</Link>))}
                </div>
                
            </div> 
       
    </div>
  )
}

export default Footer