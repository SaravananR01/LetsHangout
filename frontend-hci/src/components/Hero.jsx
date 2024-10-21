import React from 'react';
import phoneImage from '../assets/phone.png';
import { Link } from 'react-router-dom';

function Hero(){
    return(
        <section className='py-5 max-w-[1240px] px-4 mx-auto'>
            <div className='container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row'>
                <div className='mb-14 lg:mb-0 lg:w-1/2'>
                    <h1 className='animate-typing overflow-hidden whitespace-nowrap max-w-xl text-[2.9rem] leading-none font-extrabold font-sans text-center text-[#E85A4F] lg:text-6xl lg:text-left lg:leading-tight mb-5'>Let's Hangout</h1>
                    <p className='text-[#E98074] max-w-xl text-center lg:text-left lg:max-w-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque lorem, posuere in placerat non, rhoncus in felis. Etiam ac risus eu augue lacinia eleifend. Nam et tortor nec orci tempus tempor. Maecenas vel enim nunc. Praesent augue turpis, lacinia quis odio non, consequat convallis lacus.</p>
                    <div className='flex justify-center mt-14 lg:justify-start'>
                    <Link to='/newcode'>
                        <button type="button" className='text-[#fff] bg-[#8E8D8A] font-medium rounded-lg px-5 py-4 text-center hover:bg-white hover:text-[#8E8D8A] hover:drop-shadow-md transition duration-300 ease-in-out mx-2'>New Code</button>
                    </Link>
                    <Link to='/entercode'>
                        <button type="button" className='text-[#fff] bg-[#E85A4F] font-medium rounded-lg px-5 py-4 text-center hover:bg-white hover:text-[#8E8D8A] hover:drop-shadow-md transition duration-300 ease-in-out mx-2'>Enter Code</button>
                    </Link>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <img className="ml-auto" src={phoneImage} alt="phone"/>
            </div>
            </div>
        </section>
    );
}

export default Hero;