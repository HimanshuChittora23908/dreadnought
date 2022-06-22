import React from 'react'
import IsometricHome from '../assets/IsometricHome.png';
import StartUp from '../assets/startup.jpg';
import AIForGood from '../assets/AIForGood.png';
import Stanford from '../assets/Stanford.png';
import YC from '../assets/YC.png';
import Person1 from '../assets/Person1.svg';
import Person2 from '../assets/Person2.svg';
import Person3 from '../assets/Person3.svg';
import User1 from '../assets/User1.png';
import User2 from '../assets/User2.png';
import User3 from '../assets/User3.png';
import Project1 from '../assets/Project1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import '../index.css'

export default function Home() {

    const data = [
        {
            img: AIForGood,
            title: 'AI for Good Foundation',
        },
        {
            img: YC,
            title: 'Y Combinator',
        },
        {
            img: Stanford,
            title: 'Stanford University',
        }
    ];

    const people = [
        {
            img: Person1,
            name: 'Bailee Cooper',
            title: 'Technophile. Left Brain. Space Nerd. UC Berkeley Alum.',
        },
        {
            img: Person2,
            name: 'Jason Miller',
            title: 'Futurist. Entrepreneur. Hardcore Nerd. Stanford Alum.',
        },
        {
            img: Person3,
            name: 'Ragini Malhotra',
            title: 'AI Researcher. Right Brain. Loves Dogs. MIT Alum.',
        },
    ];

    const users = [
        {
            img: User1,
            name: 'Rob Nielsen',
            description: "Sophomore year student at MIT says, 'I have been coding since I was 12 but this course blew my mind away because now I know no fear. I can keep launching again and again till I win. The startup lessons are invaluable and practical.'"
        },
        {
            img: User2,
            name: 'Rashmi Tirke',
            description: "Final year student at IIT Madras says, 'I almost gave up but then I realised that if I can't build these things in a controlled learning environment then I am not going to survive as an entrepreneur in the real world. I am far more confident now.'"
        },
        {
            img: User3,
            name: 'David Raum',
            description: "First year student at Cambridge says, 'I learnt so much and I plan to use the money I earned as a seed money for my startup. The smartest thing I did was to refer my friends as it increased my earnings and now we are working together.'"
        }
    ];

    return (
        <>
            <div className='py-24 lg:py-0 px-8 lg:px-16 z-10 bg-gradient-to-b from-gray-800 to-gray-900 lg:h-screen flex flex-col lg:flex-row lg:items-center shadow-2xl'>
                <div className='lg:w-1/2 flex flex-col items-start'>
                    <p className='md:text-xl font-medium text-gray-200 italic'>School for Deep Tech founders</p>
                    <p className='text-3xl md:text-5xl font-bold uppercase text-white font-nunito py-2 md:py-4'>DreadNought</p>
                    <div className='text-sm md:text-base bg-amber-200 px-3 md:px-4 py-1 lg:py-2 rounded-md font-medium font-gray-800 flex gap-2 items-center cursor-pointer shadow-lg'>
                        <button className=''>Get Started</button>
                        <FontAwesomeIcon icon={solid('arrow-right')} className='lg:text-sm' />
                    </div>
                </div>
                <div className="mt-4 lg:mt-0 md:px-8 lg:px-0 lg:w-1/2 lg:flex justify-center"><img src={IsometricHome} alt="" className='xl:w-5/6' /></div>
            </div>
            <div className='flex flex-col lg:flex-row mx-8 md:mx-24 py-12 lg:py-24 gap-8 lg:gap-16 items-center'>
                <div className='lg:w-1/2'>
                    <img src={StartUp} alt="" />
                </div>
                <div className='flex flex-col gap-8 lg:w-1/2 md:text-xl text-gray-700 text-justify'>
                    <p>We believe <b> humanity's survival </b> depends on us being a <b> spacefaring civilisation </b> and future deep tech founders will lead the way.</p>
                    <p><b>Get paid </b> to learn the initial 2 months of founder journey that covers everything other than engineering. We trust your coding skills.</p>
                </div>
            </div>
            <div className='bg-gray-800 flex flex-col gap-8 items-center py-20 shadow-md'>
                <p className='text-xl md:text-3xl font-medium text-white'>Social Initiative By</p>
                <div className='flex flex-col lg:flex-row gap-8 text-xl text-gray-700 text-justify'>
                    {data.map((item, index) => {
                        return (
                            <div className='flex flex-col gap-4 text-sm items-center p-6 text-gray-800 card' key={index}>
                                <img src={item.img} alt="" className='h-24 md:h-40' />
                                <p className='cursor-pointer md:text-lg font-semibold'>{item.title}</p>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center px-8 md:px-24 py-12 md:py-16 lg:py-24 gap-4 lg:gap-20'>
                <div className='flex flex-col gap-2 lg:gap-4 lg:w-1/2'>
                    <p className='text-gray-800 font-bold text-xl md:text-3xl'>About Dreadnought</p>
                    <p className='text-gray-700 md:text-lg text-justify'>Our team is comprised of digitally-native entrepreneurs, futurists and operators with strengths in AI, Space Tech, Genomics, AR/VR and Longevity. We decided to launch Dreadnought to super charge the future by helping unlock the potential of future deep tech entrepreneurs.</p>
                </div>
                <div className='lg:w-1/2 flex flex-col gap-2'>
                    {
                        people.map((item, index) => {
                            return (
                                <div className='flex flex-col lg:flex-row text-center lg:text-left bg-gray-100 rounded py-4 lg:py-2 shadow gap-2 lg:gap-4 text-sm items-center px-6 text-gray-800' key={index}>
                                    <img src={item.img} alt="" className='h-12' />
                                    <div>
                                        <p className='cursor-pointer font-semibold'>{item.name}</p>
                                        <p className='cursor-pointer text-xs'>{item.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='px-8 md:px-16 lg:px-24 py-12 lg:py-16'>
                <p className='text-gray-800 font-bold text-xl lg:text-3xl text-center'>Student Experience</p>
                <div className='flex flex-col lg:flex-row gap-0 lg:gap-8 items-stretch pt-2'>
                    {
                        users.map((item, index) => {
                            return (
                                <div className='flex flex-col gap-2 text-sm items-center py-4 px-0 lg:py-6 lg:px-6 text-gray-800' key={index}>
                                    <img src={item.img} alt="" className='h-24 lg:h-40' />
                                    <p className='cursor-pointer md:text-lg font-semibold'>{item.name}</p>
                                    <p className='cursor-pointer text-xs text-center'>{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='px-4 lg:px-24 py-12 lg:py-24 bg-gray-800 flex flex-col items-center text-white'>
                <p className='text-lg md:text-2xl font-bold'>Sign up to learn and earn</p>
                <p className='text-xs md:text-base italic pt-2'>Course enables future founders to learn how to launch quickly as most first time founders pivot 4 to 5 times before achieving product-market fit.</p>
                <div className='bg-white text-gray-800 flex flex-col lg:flex-row items-center rounded-xl overflow-hidden mt-8'>
                    <div className='lg:w-1/2'>
                        <img src={Project1} alt="" />
                    </div>
                    <div className='flex flex-col items-center gap-2 lg:gap-4 lg:w-1/2 px-8 lg:px-20 py-8 lg:py-4'>
                        <p className='md:text-xl font-bold text-gray-900'>Future Deep Tech Founders</p>
                        <p className='text-sm md:text-base text-gray-700'>Everything you need to know about building startup other than coding. Milestone based earning upto USD $1000.</p>
                        <div className='flex text-sm md:text-base justify-between w-full gap-2 lg:gap-0 items-center'>
                            <div className='flex gap-2 items-center text-gray-800 font-medium'>
                                <img src={Person2} alt="" className='w-12' />
                                <p>Jason Miller</p>
                            </div>
                            <p>FREE</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
