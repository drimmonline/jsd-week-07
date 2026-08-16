import Gallery from "./Components/Gallery";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Course from "./Components/course";
import { Layout } from "./Components/layout";
import { ourCourse } from "./mobdata";
export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Course />
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3 p-2 justify-items-center ">
        {ourCourse.map((el) => {
          return (
            <Gallery img={el.img} title={el.title} descript={el.descript} />
          );
        })}
      </div>
    </>
  );
}
