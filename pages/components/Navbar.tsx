import Image from "next/image";
import Link from "next/link";
import twitter from "../assets/twitter.svg";
export default function Navbar() {
  return (
    <>
    <div className="flex ml-0 justify-start mt-2 "> 
      <Image src={twitter} alt="" className="" />
      <Link href="/" className="">
        <a className="font-light text-3xl ml-1  text-twi">Spaces</a> 
      </Link>
      </div>
    </>
  );
}
