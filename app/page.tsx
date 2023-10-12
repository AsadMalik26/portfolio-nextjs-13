import Navbar from '@/app/components/Navbar'
import Banner from '@/app/components/Banner'
import DisplayCards from '@/app/components/DisplayCards'
import DisplayCardsProjects from '@/app/components/DisplayCardsProjects'
import Footer from '@/app/components/Footer'
import "./globals.css"
import Image from 'next/image'
import picture from "@/app/assets/rocket (2).jpg"
import edugen from "@/app/assets/images/edugen/0.1 EduGen Signup.png"
import mern from "@/app/assets/images/MERN/MERN.png"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Asad Saeed || Fullstack Developer || MERN Stack Developer || HTML CSS JavaScript Developer || Strong Knowledge of JavaScript ||Strong Knowledge of React js and Next js || Strong knowledge of Node js and Express js || Proficient and Excellent Developer || Senior Full Stack Developer',
  keywords: ['Next.js', 'React', 'JavaScript',"HTML","CSS","Tailwind CSS","MUI","Material UI", "Daisy UI", "React Native", "React Native Expo", "Upwork", "Freelancer", "MERN stack developer","Full stack developer", "Node js developer", "Express js Developer","Senior Developer", "Associate",],
  description: `
  Experienced MERN Stack Developer | FYP Award Winner | React.js Expert
Hello! I'm a highly skilled MERN Stack Developer with a passion for crafting cutting-edge web applications. My
journey started at COMSATS University Lahore Campus, where I honed my skills and graduated with a strong
foundation in software development. During my academic journey, I didn't just stop at studying; I embarked on a
part-time role as a MERN Developer to gain hands-on experience in the field.
One of my proudest achievements was my Final Year Project, which I poured my heart and soul into. It's no
surprise that it earned me the top prize at the FYP exhibition ceremony, reflecting my commitment to excellence
and innovation in software development.
Currently, I am working at Prismatic Technologies as a React.js Developer. My role involves working on a complex
React application, where I continuously extend features, tackle intricate bugs, and enhance existing functionalities.
What sets me apart is my unwavering dedication to my tech stack. I'm unbeatable when it comes to mastering and
utilizing the MERN stack. My in-depth knowledge of React.js allows me to drive projects to successful completion
with efficiency and precision.
I'm always on the lookout for new opportunities to contribute my expertise to ambitious teams and projects.
If you're searching for a passionate and results-driven MERN Stack Developer who thrives in challenging
environments, feel free to reach out. Let's connect and explore how I can bring value to your organization.
Email: calltoasad@gmail.com
#MERNStack #ReactJS #SoftwareDevelopment #Innovation #AwardWinner #ProblemSolver #TechEnthusiast
  `,
}
export default function Home() {
  return (
    <main className='container mx-auto bg-base-100'>
      <Navbar />
      <Banner />
      {/* <span id='141' className="loader"></span> */}
      <p id='ingrediants' className='text-center my-5'>
        <strong className='text-2xl mx-2 bg-clip-text clip text-transparent bg-gradient-to-r hover:bg-gradient-to-l from-pink-500 to-violet-500 font-serif
      ms:mx-5 sm:mx-10 sm:text-5xl
      '>Ingrediants</strong>
      </p>
      <DisplayCards />
      <DisplayCardsProjects />
      <Footer />
    </main>
  )
}
