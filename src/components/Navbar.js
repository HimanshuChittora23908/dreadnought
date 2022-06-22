import React from 'react'
import dreadnought from '../assets/dreadnought.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Navbar() {
    return (
        <div className='fixed flex items-center justify-between px-2 lg:px-8 py-2 w-full bg-gray-800 shadow-xl z-20'>
            <img src={dreadnought} alt="" className='h-6 lg:h-10' />
            <div className='hidden lg:flex gap-4 text-sm items-center'>
                <p className='text-white cursor-pointer'>Login</p>
                <button className='cursor-pointer bg-white py-1 px-4 rounded-md shadow-lg hover:shadow-none transition-all'>Register</button>
            </div>
            <div className='block lg:hidden'>
                <FontAwesomeIcon icon={solid('bars')} className='text-white cursor-pointer' />
            </div>
        </div>
    )
}
