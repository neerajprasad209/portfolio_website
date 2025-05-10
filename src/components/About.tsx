import { Download } from "lucide-react";
import { Button } from "./ui/button";
const About = () => {
  const techStack = ["Advanced Machine Learning", "Natural Language Processing", "Deep Learning", "Python", "HuggingFace", "LangChain", "Vector Databases", "Scikit-learn", "Pandas", "Apache Airflow", "TensorFlow", "Flask", "AWS"];
  return <section id="about" className="section flex flex-col justify-center pl-8 md:pl-16 lg:pl-32">
      <div className="max-w-3xl">
        <h2 className="text-base font-normal text-teal mb-4">Hi, my name is</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Neeraj Prasad.</h1>
        <h2 className="text-3xl font-semibold mb-8 text-slate-light leading-tight py-0 mx-0 md:text-2xl px-[4px] my-0">Turning raw data into AI-powered magic tricks.</h2>
        
        <p className="text-base text-slate mb-8 leading-relaxed">AI/ML Engineer wrangling data and models into smart, scalable solutions. I build and deploy LLMs, NLP pipelines, and deep learning systems with a splash of cloud magic (AWS, GCP, Azure). Passionate about making AI useful, ethical, and slightly less mysterious—one model at a time.</p>
        
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="flex items-center gap-2 border-2 border-teal text-teal hover:bg-teal hover:bg-opacity-10 transition" asChild>
            <a href="/resume/Neeraj Prasad.pdf" download="Neeraj Prasad.pdf">
              Fetch CV → Execute!
              <Download size={16} />
            </a>
          </Button>
        </div>
        
        <div className="mt-16">
          <div className="text-slate-light mb-4">
            <span className="text-teal">Tech Stack</span> // 
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map(tech => <div key={tech} className="px-4 py-2 bg-navy-light rounded-full text-xs hover:text-teal transition cursor-default">
                {tech}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;