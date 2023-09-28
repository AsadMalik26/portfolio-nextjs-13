import Navbar from '@/app/components/Navbar'
import Banner from '@/app/components/Banner'
import DisplayCards from '@/app/components/DisplayCards'
import "./globals.css"
export default function Home() {
  return (
    <main className='container mx-auto bg-base-100'>
      <Navbar />
      <Banner />
      <DisplayCards/>
    </main>
  )
}
