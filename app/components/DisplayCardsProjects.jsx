
import edugen from "@/app/assets/images/edugen/01 EduGen Signup.png";
import DisplayCardProject from "./DisplayCardProject";
const cards_data = [
  {
    title: "EduGen",
    body: "AI-powered platform for educators to create custom academic papers and tests, accessible both on the web and via a mobile app for on-the-go papers generation",
    tags: ["JavaScript", "Node js", "Express js", "React js", "Mongo DB"],
    picture: edugen,
  },
  // {
  //   title: "EduGen (Mobile App)",
  //   body: "AI-powered platform for educators to create custom academic papers and tests, accessible both on the web and via a mobile app for on-the-go papers generation",
  //   tags: ["JavaScript", "Node js", "Express js", "React js", "Mongo DB"],
  //   picture: edugen,
  // },
];
const DisplayCardsProjects = ({ }) => {
  return (
    <section className='projects'>
      <p className='text-center my-5 mt-10'>
        <strong className='text-2xl text-center w-full mx-2 bg-clip-text clip text-transparent bg-gradient-to-r hover:bg-gradient-to-l from-pink-500 to-violet-500 font-serif
      ms:mx-5 sm:mx-10 sm:text-5xl
      '>Projects</strong>
      </p>
      {cards_data?.map((v, i) => {
        return <DisplayCardProject key={i} {...v} reverse={i % 2 !== 0} />
      })}
    </section>
  )
}

export default DisplayCardsProjects