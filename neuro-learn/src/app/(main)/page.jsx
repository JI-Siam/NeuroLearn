import Image from "next/image";
import Banner from "@/components/home/Banner";
import Marquee from "@/components/home/Marquee"
import Courses from "@/components/home/Courses";
import Instructors from "@/components/home/Instructors";
import Tips from "@/components/home/Tips";
import Trending from "@/components/home/Trending";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Marquee></Marquee>
      <Trending></Trending>
      <Courses></Courses>
      <Instructors></Instructors>
      <Tips></Tips>
      
    </>
    
  );
}
