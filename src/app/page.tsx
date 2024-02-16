'use client';
import { useScroll } from "@/hooks/useScroll";
import styles from "@/utils/styles.module.css";

export default function Home() {
  const { isActive } = useScroll({ offSet: 120 });

  return (
    <div className="flex min-h-screen flex-col justify-between bg-white">
      <div className="bg-[#ffe4c4] h-screen items-center justify-center flex flex-col">
        <div className={styles.container}>
          <p className={styles.text}>tnmod</p>
        </div>
        <div className={`absolute transform transition-all delay-150 duration-500 translate-y-0 justify-center items-center flex opacity-0 z-0 h-52 w-full ${isActive && "translate-y-96 opacity-100"}`}>
          <div className={`w-8 h-full delay-500 transform transition-all duration-700 ${isActive && "w-11/12 rounded-2xl"}`}>
            <div className={`h-full w-full bg-white delay-700 transform transition-all duration-1000  ${isActive && " h-96 rounded-2xl"}`}>
            </div>
          </div>
        </div>
      </div>
      <div className="h-80 bg-slate-300">

      </div>
    </div>
  );
}
