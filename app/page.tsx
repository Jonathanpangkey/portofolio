import {Navbar} from "@/components/Navbar";
import {Hero} from "@/components/Hero";
import {About} from "@/components/About";
import {Contact} from "@/components/Contact";
import {Project} from "@/components/Project";
import {Skills} from "@/components/Skills";
import {Experience} from "@/components/Experience";

export default function Home() {
  return (
    <div className='min-h-screen bg-background-dark'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
