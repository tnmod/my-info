'use client'
import { ScrollView } from "@/components/ScrollView";
import { ScrollingText } from "@/components/ScrollingText";
import { useViewport } from "@/hooks/useViewport";
import { useEffect, useState } from "react";


export default function Projects() {

  const [offset, setOffset] = useState(0);
  const { viewportHeight } = useViewport();

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="w-full flex flex-col flex-1 scroll-smooth md:scroll-auto">
      <div className="">
        <div className="bg-orange-500 h-screen p-32  ">

        </div>
        <div className="bg-red-500 h-screen p-32">

        </div>
        <div className="bg-blue-500 h-screen p-32">

        </div>
      </div>

      <ScrollView offset={offset} height={viewportHeight} count={3} start={viewportHeight * 3}>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1>alllll</h1>
        </div>
      </ScrollView>

      <div>
        <div className="bg-red-500 h-screen p-32">

        </div>
        <div className="bg-blue-500 h-screen p-32">

        </div>
      </div>
    </div>
  );
}
