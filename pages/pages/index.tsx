import Image from "next/image";
import { useRouter } from 'next/router'
import balloon from "../assets/balloon.svg";
export default function Index() {
  const router = useRouter()
  return (
    <>
      <div className="flex text-5xl font-light mt-[5rem]  flex-row ml-[5rem] ">
        <div className=" mt-20 leading-relaxed" >
          Discover great <span className="text-twi font-semibold ">Spaces</span> to listen in !
          <div className="text-3xl text-bl text-center leading-relaxed	">Helps you to find your favorite twitter spaces </div>
          <div className="text-center">
          <button className="mt-10 bg-twi text-white text-4xl font-semibold px-8 py-5 rounded-full hover:bg-white hover:text-twi border-2 border-twi" onClick={() => router.push('/')}>Join Waitlist</button> </div>
        </div>
        <div className="ml-[10rem]"> 
          <Image src={balloon} />
        </div>
      </div>
       
    </>
  );
}
