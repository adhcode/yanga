"use client"

import { CardComponent } from "./component/CardDemo/page"
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
      <CardComponent/>
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
   <h1 className="mt-4 text-[#FF7F00] font-bold text-[20px]">Yanga By MeekTurna</h1>
   <p className="text-[15px]">Choose your preferred music service</p>
   </div>
   <Separator className="my-4 bg-[#FF7F00] opacity-10" />
   <div className="flex justify-center items-center gap-[120px] pl-[20px] pr-[20px]">
      <div >
       <Image src="/spotify.png"
       
       width={100}
      height={100}
      alt="uvise logo"
      className="object-contain"/>
      </div>
      <div>
        <Link href="https://distrokid.com/hyperfollow/meekturna/yanga">
      <Button className=" border-[#FF7F00] border-[1px]">Pre Save</Button>
      </Link>
      </div>
      
    </div>
    <Separator className="my-4 bg-[#FF7F00] opacity-5" />
   </div>

   
      </div>
      
    </div>
      
    
    </motion.div>
    </WavyBackground>

    
  )
}

export default page
