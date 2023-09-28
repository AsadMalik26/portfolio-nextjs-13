import Image from 'next/image';
import picture from "@/app/assets/pexels-photomix-company-106344.jpg";

const DisplayCardReverse = ({body,picture,title}:card) => {
  return (
    <div 
    className='
    border-2 rounded-md m-2 p-2 text-center flex flex-col-reverse gap-2 hover:text-ellipsis
    sm:flex-row-reverse sm:mx-28 sm:border-0 sm:my-5 sm:border-r-4
    '>
      {/* // sm:mx-32 sm:my-10 p-3 tablet:flex-row  */}
        <section className='flex-1 flex flex-col justify-center rounded-s-lg gap-2'>
          <h3 className='text-2xl'><strong>{title || "title here"}</strong></h3>
          <p>{body || "body here"}</p>
          {/* <button className='btn btn-info btn-sm rounded border-2 w-max btn-outline'>Button</button> */}
        </section>
        <section className='flex-1 rounded-s-lg'>
          <Image
            src={picture}
            alt='Image'
            width={500}
            height={500}
            objectFit='contain'
            className='rounded-s-lg justify-center'
          />
        </section>
      </div>
  )
}

export default DisplayCardReverse