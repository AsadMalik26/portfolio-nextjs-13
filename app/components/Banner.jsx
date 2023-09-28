// import "@/public/jquery.ripples"
'use client'
import bg from "@/app/assets/rocket.jpg"
import Tilt from 'react-parallax-tilt'
// import { WaterCanvas, WaterModel } from "@/public/watercanvas"
import Image from "next/image"
// import Script from "next/script"

const Banner = ({ }) => {
  return (
    <>
      <Tilt>
        <section id="waterHolderold" className='flex flex-col relative items-center justify-center min-h-screen text-center'>
          {/* <div id="waterHolder" className="bg-slate-500 z-10">
            <Image id="rplimg" src={bg} />
          </div> */}
          <p className='text-6xl ms:text-8xl sm:text-9xl bg-clip-text clip text-transparent bg-gradient-to-r hover:bg-gradient-to-l from-pink-500 to-violet-500 font-serif'>Asad</p>
          <p className='text-2xl ms:text-3xl bg-clip-text clip text-transparent bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-pink-500 font-sans'>Full stack developer</p>
          {/* <p className='absolute bottom-20'>Scroll down</p> */}
        </section>
      </Tilt>
      {/* <Script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js" />
      <Script src="../../public/ripple.js" />
      <Script src="../../public/watercanvas.js" /> */}
    </>
  )
}

export default Banner