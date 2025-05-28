"use client";
import MagmaTerminal from "@/components/MagmaTerminal";
import { Button } from "@/components/ui/button";
import { Montserrat } from 'next/font/google'
import { Typewriter } from 'react-simple-typewriter';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Footer from "@/components/Footer";



const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function WelcomeScreen() {
  return (
    <>
      <div className={`${montserrat.className} h-[100vh] bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.9)_100%)]%,#fff_40%,#ffffff_100%)] dark:bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#ea580c_100%)] relative overflow-hidden`}>
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="flex items-center justify-center h-full px-4 cursor-default">
          <div className="relative z-10 flex flex-col justify-center items-center dark:text-white text-center gap-8 max-w-6xl w-full">

            {/* Logo + Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold flex items-center justify-center gap-4 flex-wrap">
              <img src="/logo.png" alt="Logo" className="w-16 sm:w-20 md:w-24 h-auto" />
              Magma Hacks
            </h1>
            <p className="text-xl sm:text-3xl md:text-4xl font-semibold w-full sm:max-w-2xl md:max-w-3xl">
              <Typewriter
                words={['Magma Hacks', 'Unleash the Hacker Within.', 'Decode. Build. Dominate.']}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <p className="text-lg sm:text-2xl md:text-3xl font-semibold w-full sm:max-w-2xl md:max-w-3xl">
              Where Curiosity Becomes Code. And Code Becomes Power.
            </p>
            <p className="text-base sm:text-lg md:text-xl max-w-4xl px-4 sm:px-6 tracking-wide leading-relaxed">
              Dive into the underground world of ethical hacking, cutting-edge tech, and limitless creation. No boring theory, no bloated fluff—just battle-tested tools, hands-on skills, and raw, unfiltered knowledge curated for rebels, coders, and digital warriors who refuse to stay average and are ready to break systems, build futures, and truly master their craft.
            </p>
            <Button className="bg-[#ff5900] p-10 hover:scale-105 transition-all cursor-pointer hover:bg-[#d95a0b] dark:text-white font-bold text-lg sm:text-xl md:text-3xl px-8 rounded-full duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      <div className="h-screen bg-gradient-to-br from-white via-[#ffd1b3] to-[#ff6f00] dark:from-black dark:via-[#7c1f0e] dark:to-[#ff4500]">

        <div className="container mx-auto flex items-center md:flex-row flex-col-reverse justify-center h-full px-6 py-8">

          <MagmaTerminal />
          <div className="flex flex-col my-12 gap-4">
            <h1 className="font-bold text-3xl sm:text-6xl">Magma Hacks</h1>
            <p className="text-3xl sm:text-5xl">Where Curiosity Becomes Code And Code Becomes Power</p>
            <a href="text-lg sm:text-2xl">Join the Movement</a>
          </div>
        </div>
      </div>
      <div className="h-[90vh]">
        <div className="container mx-auto">
          <h1 className="text-6xl font-bold my-10">Why Magma Hacks?</h1>
          <div className="w-full flex justify-around">

            <div className="relative w-72 h-64 md:w-80 md:h-72 lg:w-120 lg:h-100 drop-shadow-[0_0_30px_rgba(255,115,0,0.7)] drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
              <div
                className={`
      relative
      w-full h-full
      bg-[url(/pentabg1.png)] bg-cover bg-center
      text-white
      flex items-center justify-center
      p-6
      rounded-[32px]
      overflow-hidden
    `}
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)',
                }}
              >
                <div className="absolute inset-0 bg-orange-500 opacity-50 mix-blend-multiply z-0"></div>
                <div className="text-start mb-15 text-5xl w-[350px] mr-4 font-bold z-10">
                  No Theory, Just Battle Ready Execution Skills
                </div>
              </div>
            </div>
            {/* Shadow Wrapper */}
            <div className="relative w-72 h-64 md:w-80 md:h-72 lg:w-120 lg:h-100 drop-shadow-[0_0_30px_rgba(255,115,0,0.7)] drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
              <div
                className={`
      relative
      w-full h-full
      bg-[url(/pentabg2.png)] bg-cover bg-center
      text-white
      flex items-center justify-center
      p-6
      rounded-[32px]
      overflow-hidden
    `}
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)',
                }}
              >
                <div className="absolute inset-0 bg-orange-500 opacity-50 mix-blend-multiply z-0"></div>
                <div className="text-start mb-15 text-5xl w-[350px] mr-4 font-bold z-10">
                  From<br></br> Blogs to <br></br>Battle-Ready Exceptional Skills
                </div>
              </div>
            </div>

            {/* Shadow Wrapper */}
            <div className="relative w-72 h-64 md:w-80 md:h-72 lg:w-120 lg:h-100 drop-shadow-[0_0_30px_rgba(255,115,0,0.7)] drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
              <div
                className={`
      relative
      w-full h-full
      bg-[url(/pentabg3.png)] bg-cover bg-center
      text-white
      flex items-center justify-center
      p-6
      rounded-[32px]
      overflow-hidden
    `}
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)',
                }}
              >
                <div className="absolute inset-0 bg-orange-500 opacity-50 mix-blend-multiply z-0"></div>
                <div className="text-start mb-15 text-5xl w-[350px] mr-4 font-bold z-10">
                  All-in-One: Web, AI, CyberSecurity,<br />Data Science, IOT
                </div>
              </div>
            </div>
          </div>
          <div className="py-16">
            <h2 className="mb-12 text-3xl font-bold text-center">Tech Stack</h2> {/* Changed my-12 to mb-12 as parent now has py-16 */}
            <div className="w-[80%] mx-auto h-[300px] flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)]
 rounded-xl overflow-hidden bg-white dark:bg-neutral-800"> {/* Optional: Added example border and bg color */}
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  <CarouselItem className="basis-1/3">
                    <div className="h-56 w-56 border-2 border-gray-100 bg-gray-50 rounded-xl  dark:bg-neutral-700 mx-auto flex items-center justify-center p-4">
                      hello 1
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-1/3">
                    <div className="h-56 w-56 border-2 border-gray-100 bg-gray-50 rounded-xl  dark:bg-neutral-700 mx-auto flex items-center justify-center p-4">
                      hello 2
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-1/3">
                    <div className="h-56 w-56 border-2 border-gray-100 bg-gray-50 rounded-xl  dark:bg-neutral-700 mx-auto flex items-center justify-center p-4">
                      hello 3
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-1/3">
                    <div className="h-56 w-56 border-2 border-gray-100 bg-gray-50 rounded-xl  dark:bg-neutral-700 mx-auto flex items-center justify-center p-4">
                      hello 4
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-1/3">
                    <div className="h-56 w-56 border-2 border-gray-100 bg-gray-50 rounded-xl  dark:bg-neutral-700 mx-auto flex items-center justify-center p-4">
                      hello 5
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
