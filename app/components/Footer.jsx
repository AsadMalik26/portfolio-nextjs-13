'use client'
import { Link } from 'react-scroll'
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { AiOutlineMail, AiOutlinePhone, AiTwotonePhone } from "react-icons/ai"
import {HiMail } from "react-icons/hi"
const Navbar = ({ }) => {
  return (

    <footer>
      <div className='flex flex-col w-full mt-8
    sm:flex-row-reverse rounded mb-4
    '>
        <div className='links flex flex-col sm:flex-1 gap-3 p-2 m-2 border-2 items-center
          sm:border-0 sm:items-start
          '>
          <strong className='text-lg'>Site Links</strong>
          <Link to="cards" className="link no-underline flex flex-col justify-center items-center gap-2 p-2 min-w-0 max-w-xl hover:bg-pink-100 border rounded" smooth={true} duration={500}>
            Link 1
          </Link>
          <Link to="cards" className="link no-underline flex flex-col justify-center items-center gap-2 p-2 min-w-0 max-w-xl hover:bg-pink-100 border rounded" smooth={true} duration={500}>
            Link 1
          </Link>
          <Link to="cards" className="link no-underline flex flex-col justify-center items-center gap-2 p-2 min-w-0 max-w-xl hover:bg-pink-100 border rounded" smooth={true} duration={500}>
            Link 1
          </Link>
        </div>
        <div id='contact' className='contacts
     flex flex-col sm:flex-1 gap-3 p-2 m-2 border-2 items-center
     sm:border-0 sm:items-start'>
          <strong className='text-lg'>Contact</strong>
          <section className='link no-underline flex flex-col justify-center items-center gap-2 p-2 min-w-0 max-w-xl hover:bg-pink-100 border rounded
          sm:flex-row'>
            <BsGithub size={25} key={"BsGithub"} />
            <strong className='text-sm'>GitHub</strong>
          </section>
          <section className='link no-underline flex flex-col justify-center items-center gap-2 p-2 min-w-0 max-w-xl hover:bg-pink-100 border rounded
          sm:flex-row'>
            <BsLinkedin size={25} key={"BsLinkedin"} text={"hello"} />
            <strong className='text-sm'>LinkedIn</strong>
          </section>
          <section className='link no-underline flex flex-col justify-center items-center gap-2 p-2 min-w-0 max-w-xl hover:bg-pink-100 border rounded
          sm:flex-row'>
            <HiMail size={25} key={"BsLinkedin"} text={"hello"} />
            <strong className='text-sm'>calltoasad@gmail.com</strong>
          </section>
          <section className='link no-underline flex flex-col justify-center items-center gap-2 p-2 min-w-0 max-w-xl hover:bg-pink-100 border rounded
          sm:flex-row'>
            <AiTwotonePhone size={25} key={"BsLinkedin"} text={"hello"} />
            <strong className='text-sm'>+92 306 140 2623</strong>
          </section>
        </div>
        {/* <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="6%" y1="74%" x2="94%" y2="26%"><stop offset="5%" stop-color="#ec4899"></stop><stop offset="95%" stop-color="#8b5cf6"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,350 0,350 C 179.5,308 359,266 599,266 C 839,266 1139.5,308 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg> */}
      </div>
      <>

      <Link to="banner" className="link no-underline flex justify-center items-center mb-10 gap-2 p-2 w-full min-w-0 btn btn-primary btn-outline" spy={true} smooth={true} duration={500}>
        Back to Top
      </Link>
      </>
    </footer>

  )
}

export default Navbar