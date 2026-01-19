import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CourseCurriculum from "../components/CourseCurriculum";
import InstructorSection from "../components/InstructorSection";
import Testimonails from "../components/Testimonails";
import AlumniCompanies from "../components/AlumniCompanies";
import CourseIntro from "../components/CourseIntro";
import EnrollCTA from "../components/EnrollCTA";
import Community from "../components/Community";
import Framer from "../components/Framer";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main> 
        <section id="HeroSection" className="bg-black pt-8" >
          <HeroSection />
        </section>
        <CourseIntro id="CourseIntro" />
        <Framer id="Framer" />
        <WhyChooseUs id="WhyChooseUs" />
        <CourseCurriculum id="CourseCurriculum" />
        <AlumniCompanies id="AlumniCompanies" />
        <Testimonails id="Testimonails" />
        <InstructorSection id="InstructorSection" />
        <EnrollCTA id="EnrollCTA" />
        <Community id="Community" />
        <FAQ id="FAQ" />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
