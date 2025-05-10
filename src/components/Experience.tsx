
import { useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

interface Job {
  company: string;
  title: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const Experience = () => {
  const [activeJob, setActiveJob] = useState(0);
  
  const jobs: Job[] = [
    {
      company: "RedPluto Analytics",
      title: "AI/ML Engineer",
      location: "Pune, India",
      period: "Sep 2024 - Present",
      responsibilities: [
        "Developed a multilingual call center analysis tool using Streamlit and Google's Gemini for transcription and querying of unstructured data.",
        "Built scalable data pipelines and ETL workflows with Apache Spark, Hadoop, and Apache Airflow, optimizing machine learning training in distributed environments.",
        "Conducted academic research aligned with business goals, mentored junior engineers, and supported cross-functional collaboration for AI-driven cloud solutions.",
        "Delivered thought leadership and insights at AI conferences, contributing to the innovation of Generative AI and emerging technologies."
      ]
    }
  ];

  return (
    <section id="experience" className="section pl-8 md:pl-16 lg:pl-32">
      <div className="max-w-3xl">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="h-[1px] bg-navy-light flex-grow ml-6"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Company tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible">
            {jobs.map((job, index) => (
              <button
                key={index}
                className={`px-4 py-3 border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap transition-all ${
                  activeJob === index
                    ? "border-teal text-teal bg-navy-light bg-opacity-50"
                    : "border-navy-light text-slate hover:text-slate-lighter hover:bg-navy-light hover:bg-opacity-20"
                }`}
                onClick={() => setActiveJob(index)}
              >
                {job.company}
              </button>
            ))}
          </div>
          
          {/* Job details */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-1">
              {jobs[activeJob].title}
              <span className="text-teal"> @ {jobs[activeJob].company}</span>
            </h3>
            
            <div className="flex items-center text-slate text-xs mb-2">
              <Calendar size={14} className="mr-2 text-teal" />
              {jobs[activeJob].period}
            </div>
            
            <div className="flex items-center text-slate text-xs mb-6">
              <Briefcase size={14} className="mr-2 text-teal" />
              {jobs[activeJob].location}
            </div>
            
            <ul className="space-y-4">
              {jobs[activeJob].responsibilities.map((item, index) => (
                <li key={index} className="flex">
                  <span className="text-teal mr-3">▹</span>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
