"use client"

import CardDemo from "./component/CardDemo/page";
import Image from "next/image"
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";



function page() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-10">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}>
    <div className=" min-h-screen pt-10">
      <div className="flex flex-col items-center ">
      <CardDemo/>
      <div className="bg-[#C8C8D2] rounded-lg mt-4">
        <div className="flex justify-center items-center h-[50px] w-full ">
      <Image
      src="/logo.png"
      width={100}
      height={100}
      alt="uvise logo"
      className="object-contain"
    />
    </div>
    
    <div className="flex flex-col justify-center items-center p-2 w-full">
   <h1 className="mt-4 text-[#2A2A2A] font-bold text-[20px]">Yanga By MeekTurna</h1>
   <p className="text-[25px]">OUT NOW</p>
   </div>
   <Separator className="my-4 bg-[#0443E2] opacity-20" />
   <div className="flex justify-center items-center gap-[120px] pl-[20px] pr-[20px]">
      <div >
       <Image src="/apple.png"
       
       width={100}
      height={100}
      alt="uvise logo"
      className="object-contain"/>
      </div>
      <div>
        <Link href="https://music.apple.com/us/album/yanga-single/1760751055">
      <Button className=" border-[#0443E2] border-[1px]">Play</Button>
      </Link>
      </div>
      
    </div>
    <Separator className="my-4 bg-[#0443E2] opacity-20" />
    <div className="flex justify-center items-center gap-[120px] pl-[20px] pr-[20px]">
      <div >
       <Image src="/spotify.png"
       
       width={100}
      height={100}
      alt="uvise logo"
      className="object-contain"/>
      </div>
      <div>
        <Link href="https://open.spotify.com/album/14ftgJ4eRqUdLkGD9N0Y11?si=QE1wWtciQ-iMWH5z4XUhGQ">
      <Button className=" border-[#0443E2] border-[1px]">Play</Button>
      </Link>
      </div>
      
    </div>
    <Separator className="my-4 bg-[#0443E2] opacity-20" />
    <div className="flex justify-center items-center gap-[120px] pl-[20px] pr-[20px]">
      <div >
       <Image src="/audiomack.png"
       
       width={100}
      height={100}
      alt="uvise logo"
      className="object-contain"/>
      </div>
      <div>
        <Link href="https://audiomack.com/meekturna/song/meekturna-yanga">
      <Button className=" border-[#0443E2] border-[1px]">Play</Button>
      </Link>
      </div>
      
    </div>
    <Separator className="my-4 bg-[#0443E2] opacity-20" />
    <div className="flex justify-center items-center gap-[120px] pl-[20px] pr-[20px]">
      <div >
       <Image src="/boomplay.png"
       
       width={100}
      height={100}
      alt="uvise logo"
      className="object-contain"/>
      </div>
      <div>
        <Link href="https://www.boomplay.com/songs/176640830?srModel=COPYLINK&srList=WEB">
      <Button className=" border-[#0443E2] border-[1px]">Play</Button>
      </Link>
      </div>
      
    </div>

    <Separator className="my-4 bg-[#0443E2] opacity-20" />
    <div className="flex justify-center items-center gap-[120px] pl-[20px] pr-[20px]">
      <div >
       <Image src="/deezer.png"
       
       width={100}
      height={100}
      alt="uvise logo"
      className="object-contain"/>
      </div>
      <div>
        <Link href="https://www.deezer.com/us/album/623886301">
      <Button className=" border-[#0443E2] border-[1px]">Play</Button>
      </Link>
      </div>
      
    </div>

    <Separator className="my-4 bg-[#0443E2] opacity-20" />
    <div className="flex justify-center items-center gap-[120px] pl-[20px] pr-[20px]">
      <div >
       <Image src="/youtubemusic.png"
       
       width={100}
      height={100}
      alt="uvise logo"
      className="object-contain"/>
      </div>
      <div>
        <Link href="https://music.youtube.com/watch?v=TnEKQovkdsA&si=idUZxYxL4F-Xkg4u">
      <Button className=" border-[#0443E2] border-[1px]">Play</Button>
      </Link>
      </div>
      
    </div>
   

    <Separator className="my-4 bg-[#0443E2] opacity-20" />
    <div className="flex justify-center items-center gap-[120px] pl-[20px] pr-[20px]">
      <div >
       <Image src="/tidal.png"
       
       width={100}
      height={100}
      alt="uvise logo"
      className="object-contain"/>
      </div>
      <div>
        <Link href="https://open.spotify.com/album/14ftgJ4eRqUdLkGD9N0Y11?si=QE1wWtciQ-iMWH5z4XUhGQ">
      <Button className=" border-[#0443E2] border-[1px]">Play</Button>
      </Link>
      </div>
      
    </div>
   </div>

   
      </div>
      
    </div>
      
    
    </motion.div>
    </WavyBackground>

    
  )
}

export default page
