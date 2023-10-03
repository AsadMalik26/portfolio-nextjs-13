import Navbar from '@/app/components/Navbar'
import Banner from '@/app/components/Banner'
import DisplayCards from '@/app/components/DisplayCards'
import Footer from '@/app/components/Footer'
import "./globals.css"
import Image from 'next/image'
import picture from "@/app/assets/rocket (2).jpg"
export default function Home() {
  return (
    <main className='container mx-auto bg-base-100'>
      <Navbar />
      <Banner />
      <p id='ingrediants' className='text-center my-5'>
        <strong className='text-2xl mx-2 bg-clip-text clip text-transparent bg-gradient-to-r hover:bg-gradient-to-l from-pink-500 to-violet-500 font-serif
      ms:mx-5 sm:mx-10 sm:text-5xl
      '>Ingrediants</strong>
      </p>
      <DisplayCards />
      <section id='projects'>
        <p className='text-center my-5 mt-10'>
          <strong className='text-2xl text-center w-full mx-2 bg-clip-text clip text-transparent bg-gradient-to-r hover:bg-gradient-to-l from-pink-500 to-violet-500 font-serif
      ms:mx-5 sm:mx-10 sm:text-5xl
      '>Projects</strong>
        </p>
        <div className='card
         border-2 rounded-md m-2 p-2 text-center flex flex-col items-center gap-2 hover:text-ellipsis
    sm:flex-row sm:mx-28 sm:border-0 sm:my-5 sm:border-r-4'>
          <section className={'flex-1 rounded-lg flex flex-col gap-2'}>
            <Image
              alt='project'
              src={picture}
              width={500}
              height={500}
              objectFit='contain'
              className='rounded-lg'
            />
          </section>
          <section className='flex-1 flex flex-col gap-4'>
            <p>
              <strong className='text-xl hover:underline underline-offset-4'>
                Project Name
              </strong>
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a eius quas cupiditate nulla magnam perspiciatis consequuntur incidunt, cum sequi?</p>
            <p className='flex gap-2 max-w-full flex-wrap justify-center'>
              <span className='btn btn-outline btn-xs ms:btn-xs w-max flex-grow-0.6 md:flex-grow-0 cursor-default'>Texh 1</span>
              <span className='btn btn-outline btn-xs ms:btn-xs w-max flex-grow-0.6 md:flex-grow-0 cursor-default'>Texh 1</span>
              <span className='btn btn-outline btn-xs ms:btn-xs w-max flex-grow-0.6 md:flex-grow-0 cursor-default'>Texh 1</span>
              <span className='btn btn-outline btn-xs ms:btn-xs w-max flex-grow-0.6 md:flex-grow-0 cursor-default'>Texh 1</span>
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
