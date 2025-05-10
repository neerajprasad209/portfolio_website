
import { useEffect } from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Index = () => {
  useEffect(() => {
    document.title = "Neeraj Prasad | Portfolio";
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Neural Network Background */}
      <Background />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content Sections - Adjusted margin for right sidebar */}
      <main className="mr-0 lg:mr-24">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
