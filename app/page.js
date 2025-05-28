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
import Blog from "@/components/Blog";



const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function WelcomeScreen() {
  return (
    <>
      <div className={`${montserrat.className} md:h-[90vh] py-12 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.9)_100%)]%,#fff_40%,#ffffff_100%)] dark:bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#ea580c_100%)] relative overflow-hidden`}>
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

      <div className="md:h-[90vh] bg-gradient-to-br from-white via-[#ffd1b3] to-[#ff6f00] dark:from-black dark:via-[#7c1f0e] dark:to-[#ff4500]">

        <div className="container mx-auto flex items-center md:flex-row flex-col-reverse justify-center h-full px-6 py-8">

          <MagmaTerminal/>
          <div className="flex flex-col my-12 gap-4">
            <h1 className="font-bold text-3xl sm:text-6xl cursor-default">Magma Hacks</h1>
            <p className="text-3xl sm:text-5xl  cursor-default">Where Curiosity Becomes Code And Code Becomes Power</p>
            <a href="text-lg sm:text-2xl">Join the Movement</a>
          </div>
        </div>
      </div>
      <div className="pb-20"> {/* Changed from h-[90vh] to min-h-screen with bottom padding */}
        <div className="container mx-auto px-4"> {/* Added px-4 for better mobile spacing */}
          <h1 className="xl:text-6xl text-4xl cursor-default font-bold my-10">Why Magma Hacks?</h1>
          <div className="w-full flex justify-around text-white flex-wrap gap-8"> {/* Added flex-wrap and gap for better responsive behavior */}

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
                <div className="text-start cursor-default mb-15 text-3xl xl:text-5xl w-[350px] mr-4 font-bold z-10">
                  No Theory, Just Battle Ready Execution Skills
                </div>
              </div>
            </div>

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
                <div className="text-start cursor-default mb-15 text-3xl xl:text-5xl w-[350px] mr-4 font-bold z-10">
                  From<br></br> Blog to <br></br>Battle-Ready Exceptional Skills
                </div>
              </div>
            </div>

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
                <div className="text-start cursor-default mb-15 text-3xl xl:text-5xl w-[350px] mr-4 font-bold z-10">
                  All-in-One: Web, AI, CyberSecurity,<br />Data Science, IOT
                </div>
              </div>
            </div>
          </div>

          <div className="py-16"> {/* Added mb-20 for extra space before footer */}
            <h2 className="mb-12 text-3xl font-bold text-center cursor-default">Tech Stack</h2>
            <div className="lg:w-[100%] xl:w-[80%] mx-auto h-[300px] flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-xl overflow-hidden bg-white dark:bg-neutral-800">
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="h-56 w-56 hover:bg-gray-100 rounded-xl dark:bg-neutral-800 hover:dark:bg-neutral-700 transition-colors duration-700 cursor-pointer mx-auto flex items-center flex-col gap-2 justify-center p-4">
                      <img className="dark:invert-85" width={155} src="/hackaday-svgrepo-com.svg" alt="" />
                      <span className="text-2xl font-bold dark:text-[#d9d9d9]">Hacking</span>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="h-56 w-56 hover:bg-gray-100 rounded-xl dark:bg-neutral-800 hover:dark:bg-neutral-700 transition-colors duration-700 cursor-pointer mx-auto flex items-center flex-col gap-2 justify-center p-4">
                      <img className="dark:invert-85" width={155} src="/ds.svg" alt="" />
                      <span className="text-2xl font-bold dark:text-[#d9d9d9]">Data Science</span>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="h-56 w-56 hover:bg-gray-100 rounded-xl dark:bg-neutral-800 hover:dark:bg-neutral-700 transition-colors duration-700 cursor-pointer mx-auto flex items-center flex-col gap-2 justify-center p-4">
                      <img className="dark:invert-85" width={155} src="/dev.svg" alt="" />
                      <span className="text-2xl font-bold dark:text-[#d9d9d9]">Development</span>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="h-56 w-56 hover:bg-gray-100 rounded-xl dark:bg-neutral-800 hover:dark:bg-neutral-700 transition-colors duration-700 cursor-pointer mx-auto flex items-center flex-col gap-2 justify-center p-4">
                      <img className="dark:invert-85" width={155} src="/iot.svg" alt="" />
                      <span className="text-2xl font-bold dark:text-[#d9d9d9]">IOT</span>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="h-56 w-56 hover:bg-gray-100 rounded-xl dark:bg-neutral-800 hover:dark:bg-neutral-700 transition-colors duration-700 cursor-pointer mx-auto flex items-center flex-col gap-2 justify-center p-4">
                      <img className="dark:invert-85" width={155} src="/code.svg" alt="" />
                      <span className="text-2xl font-bold dark:text-[#d9d9d9]">Coding</span>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className={'hidden xl:block'} />
                <CarouselNext className={'hidden xl:block'} />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto">
          <h2 className="text-5xl mx-2.5 font-bold cursor-default">Featured Blog</h2>
          <div className="w-full">
            <Carousel className="w-full my-12 mx-auto">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Blog />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Blog />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Blog />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Blog />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Blog />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Blog />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Blog />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Blog />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Blog />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Blog />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Blog />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Blog />
                </CarouselItem>

              </CarouselContent>
              <CarouselPrevious className={'hidden xl:block'}/>
              <CarouselNext className={'hidden xl:block'}/>
            </Carousel>
          </div>
        </div>
      </div>
        <div className="flex flex-col items-center justify-center my-12">
          <h2 className="text-2xl cursor-default sm:text-3xl md:text-4xl mx-12 dark:text-white text-black lg:text-4xl font-bold text-center py-8">
          You’re one decision away from becoming dangerous—with skills.
          </h2>
        
            <Button className="bg-[#ff5900] py-8 hover:scale-105 transition-all cursor-pointer hover:bg-[#d95a0b] dark:text-white font-bold text-lg sm:text-xl md:text-3xl px-8 rounded-full duration-300">
              Join Now
            </Button>
        </div>


    </>
  );
}
