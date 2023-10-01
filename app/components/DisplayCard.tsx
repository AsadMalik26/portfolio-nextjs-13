'use client'
import Image from 'next/image';
import picture from "@/app/assets/pexels-photomix-company-106344.jpg";
import Tilt from 'react-parallax-tilt'
const DisplayCard = ({ body, picture, title, reverse }: card) => {
  return (
    <>
      <Tilt
        className={reverse ?
          `border-2 rounded-md m-2 p-2 text-center flex flex-col-reverse gap-2 hover:text-ellipsis
    sm:flex-row-reverse sm:mx-28 sm:border-0 sm:my-5 sm:border-r-4`
          :
          `border-2 rounded-md m-2 p-2 text-center flex flex-col-reverse gap-2 hover:text-ellipsis
    sm:flex-row sm:mx-28 sm:border-0 sm:my-5 sm:border-l-4
    `}>
        {/* // sm:mx-32 sm:my-10 p-3 tablet:flex-row  */}
        <section className={reverse ?
          "flex-1 flex flex-col justify-center rounded-s-lg gap-2"
          :
          'flex-1 flex flex-col justify-center rounded-s-lg gap-2'}>
          <h3 className='text-2xl'><strong>{title || "title here"}</strong></h3>
          <p>{body || "body here"}</p>
          {/* <button className='btn btn-info btn-sm rounded border-2 w-max btn-outline'>Button</button> */}
        </section>
        <section className={reverse? 'flex-1 rounded-s-lg': 'flex-1 rounded-e-lg'}>
          {picture && <Image
            src={picture}
            alt='Image'
            width={500}
            height={500}
            objectFit='contain'
            className={`${reverse? 'rounded-s-lg':'rounded-e-lg'} justify-center`}
          />}
        </section>
      </Tilt>
    </>
  )
}

export default DisplayCard