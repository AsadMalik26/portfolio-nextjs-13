import Navbar from '@/app/components/Navbar'
import Banner from '@/app/components/Banner'
import DisplayCards from '@/app/components/DisplayCards'
import Footer from '@/app/components/Footer'
import "./globals.css"

export default function Home() {
  return (
    <main className='container mx-auto bg-base-100'>
      <Navbar />
      <Banner />
      <div id='ingrediants' className='my-5'>

      <strong  className='text-2xl mx-2 bg-clip-text clip text-transparent bg-gradient-to-r hover:bg-gradient-to-l from-pink-500 to-violet-500 font-serif
      ms:mx-5 sm:mx-10 sm:text-5xl
      '>Ingrediants</strong>
      </div>
      <DisplayCards />
      <Footer />
    </main>
  )
}
