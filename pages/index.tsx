import Image from "next/image";
import { useRouter } from 'next/router'
import balloon from "./assets/balloon.svg";
import Head from 'next/head'
export default function Index() {
  const router = useRouter()
  return (
    <>
    <Head>
        <title>Spaces</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="author" content="Anurag"/>
        <meta name="keywords" content="Typescript,Space,Twitter,TwitterSpace,Nextjs"/>
        <meta name="description" content="Helps you to find your favorite twitter spaces"/>

      </Head>
      <div className="flex text-5xl font-light mt-[5rem]  flex-row ml-[5rem] ">
        <div className=" mt-20 leading-relaxed" >
          Discover great <span className="text-twi font-semibold ">Spaces</span> to listen in !
          <div className="text-3xl text-bl text-center leading-relaxed	">Helps you to find your favorite twitter spaces </div>
          <div className="text-center">
          <button className="mt-10 bg-twi text-white text-4xl font-semibold px-8 py-5 rounded-full hover:bg-white hover:text-twi border-2 border-twi" onClick={() => router.push('/space')}>Join Waitlist</button> </div>
        </div>
        <div className="ml-[10rem] w-[520px]"> 
          <Image src={balloon} alt="air balloon image" />
        </div>
      </div>
       
    </>
  );
}
