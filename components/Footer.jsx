import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='absolute -bottom-60 bg-gray-800 w-full text-white p-4 h-60'>
        <div className='flex flex-col items-center justify-center h-full'>
            <Image src="/logo.jpg" alt="Logo" width={100} height={50} className='pointer-events-none rounded-2xl'/>
            <p className='mt-2'>© 2025 Your Company. All rights reserved.</p>
            <p className='mt-1'>Contact:</p>
            <div className='flex space-x-8 mt-2'>
                <p>
                    <Instagram />
                </p>
                <p>
                    <Facebook />
                </p>
                <p>
                    <Linkedin />
                </p>
            </div>
        </div>
    </div>
  )
}
