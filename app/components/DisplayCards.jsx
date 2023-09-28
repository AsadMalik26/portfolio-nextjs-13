import DisplayCard from "./DisplayCard"
import DisplayCardReverse from "./DisplayCardReverse"
import picture from "@/app/assets/pexels-photomix-company-106344.jpg";
import ppd from "@/app/assets/pixel perfect.jpg";
import seo from "@/app/assets/seo.jpg";
import ux from "@/app/assets/ux.jpg";
import rocket from "@/app/assets/rocket (2).jpg";
import responsive from "@/app/assets/responsive.jpg";
import responsive2 from "@/app/assets/reponsive.jpg";

const cards_data = [
  {
    title: "Pixel Perfect Design",
    body: "Crafted with precision, every pixel meticulously placed for a flawless design",
    picture: responsive2,
  },
  {
    title: "Minimal and Clean",
    body: "Embracing simplicity in design, creating elegant and clutter-free user interfaces",
    picture: responsive,
  },
  {
    title: "SEO-Friendly Approach",
    body: "Optimized for search engines, ensuring your online presence gets the attention it deserves",
    picture: seo,
  },
  {
    title: "Seamless User Experience",
    body: "Dedicated to providing users with a smooth and intuitive journey through your website",
    picture: ux,
  },
  {
    title: "Utilizing Modern Technology",
    body: "Employing cutting-edge technologies to keep your website on the forefront of innovation",
    picture: picture,
  },
  {
    title: "Consistent Branding",
    body: "Infusing your unique brand identity into every aspect of the website, from color schemes and typography to imagery and messaging, to create a cohesive and memorable online presence",
    picture: rocket,
  },
];
const DisplayCards = ({}) => {
  return (
    cards_data?.map((v,i)=>{
      return <DisplayCard key={i} {...v} reverse={i%2!==0}/>
    })
  )
}

export default DisplayCards