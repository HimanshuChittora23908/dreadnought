import React from 'react'

export default function Footer() {
    return (
        <div className=' bg-gradient-to-b from-gray-800 to-gray-900 py-6 lg:py-12 text-white px-4 lg:px-24 flex flex-col md:flex-row gap-4 lg:gap-0 justify-between'>
            <div>
                <p className='font-semibold text-lg'>&copy; Dreadnought 2022</p>
                <p className='text-sm pt-1'>Teach Online with</p>
                <p className='font-medium'>teach:able</p>
            </div>
            <p>FAQ</p>
            <div>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
            </div>
        </div>
    )
}
