'use client'
import Image from 'next/image';
import picture from "@/app/assets/pexels-photomix-company-106344.jpg";
import Tilt from 'react-parallax-tilt'
import edugen from "@/app/assets/images/edugen/0.1 EduGen Signup.png"
const DisplayCardProject = ({ body, picture, title,tags, reverse }: project) => {
  return (
    <>
      <div className={`card
        border-2 rounded-md m-2 p-2 text-center flex flex-col items-center gap-2 hover:text-ellipsis
   ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} sm:mx-28 sm:border-0 sm:my-5 sm:border-r-4
   `}>
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
              {title}
            </strong>
          </p>
          <p>
            {body}
          </p>
          <p className='flex gap-2 max-w-full flex-wrap justify-center'>
          {tags?.map((v,i)=>(
            <span key={i} className='btn btn-outline btn-xs ms:btn-xs w-max btn-info text-slate-950 flex-grow-0.6 md:flex-grow-0 cursor-default'>{v}</span>
          ))}
          </p>
        </section>
      </div>
    </>
  )
}

export default DisplayCardProject