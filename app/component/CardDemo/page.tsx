"use client";
import { cn } from "@/lib/utils";


function CardDemo() {
  return (
    <div className=" w-full max-w-xs">
      <div
        className={cn(
          "group w-full cursor-pointer relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-center p-6 border border-transparent dark:border-neutral-800",
          "bg-[url(https://imgtr.ee/images/2024/08/16/a010269b48ce1ad3ebea6d0882c5d73c.png)] bg-center bg-cover",
          
          "before:bg-[https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTR2cnpmamFwZ29xbDR2ZzloOTcwam44a2xzenEzdDdvbjNjOTl1eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VmwkpXk7dSf3OgqdvQ/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTR2cnpmamFwZ29xbDR2ZzloOTcwam44a2xzenEzdDdvbjNjOTl1eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VmwkpXk7dSf3OgqdvQ/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-10",
          "transition-all duration-500"
        )}
      >
        
      </div>
    </div>
  );
}

export default CardDemo
