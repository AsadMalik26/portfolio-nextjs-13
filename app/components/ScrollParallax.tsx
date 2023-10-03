'use client'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

const ScrollParallax = ({ }) => {
    return (
        <section className="relative h-5/6 w-full">
            <Parallax pages={1}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <p className="text-9xl cursor-pointer ">Hello Paralex</p>
                </ParallaxLayer>
            </Parallax>
        </section>
    )
}
export default ScrollParallax