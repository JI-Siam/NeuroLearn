import Image from "next/image";
import Banner from "@/components/home/Banner";
import Marquee from "@/components/home/Marquee"
import Courses from "@/components/home/Courses";
import Instructors from "@/components/home/Instructors";
export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Marquee></Marquee>
      <Courses></Courses>
      <Instructors></Instructors>
    </>
    
  );
}
