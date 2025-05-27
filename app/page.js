"use client";
import { Button } from "@/components/ui/button";
import { Montserrat } from 'next/font/google'
import { Typewriter } from 'react-simple-typewriter';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose the weights you need
  display: 'swap',
})

export default function WelcomeScreen() {
  return (
    <>
      <div className={`${montserrat.className} h-[90vh] bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.9)_100%)]%,#fff_40%,#ffffff_100%)] dark:bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#ea580c_100%)] relative overflow-hidden`}>
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
          <div className="relative z-10 flex flex-col justify-center items-center dark:text-white text-center gap-6 max-w-5xl w-full">

            {/* Logo + Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold flex items-center justify-center gap-3 flex-wrap">
              <img src="/logo.png" alt="Logo" className="w-12 sm:w-16 md:w-20 h-auto" />
              Magma Hacks
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl font-semibold w-full sm:max-w-xl md:max-w-2xl">
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
            <p className="text-base sm:text-xl md:text-2xl font-semibold w-full sm:max-w-xl md:max-w-2xl">
              Where Curiosity Becomes Code. And Code Becomes Power.
            </p>
            <p className="text-sm sm:text-base md:text-lg max-w-3xl px-2 sm:px-4 tracking-wide leading-relaxed">
              Dive into the underground world of ethical hacking, cutting-edge tech, and limitless creation. No boring theory, no bloated fluff—just battle-tested tools, hands-on skills, and raw, unfiltered knowledge curated for rebels, coders, and digital warriors who refuse to stay average and are ready to break systems, build futures, and truly master their craft.
            </p>
            <Button className="bg-[#ff5900] p-8 hover:scale-105 transition-all cursor-pointer hover:bg-[#d95a0b] dark:text-white font-bold text-base sm:text-lg md:text-2xl px-6 rounded-full duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      <div className="h-screen">
        .
      </div>


    </>
  );
}
