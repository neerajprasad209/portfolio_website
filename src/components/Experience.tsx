
import { useState } from "react";
import { Briefcase, Calendar, Code, Database, Brain } from "lucide-react";

interface Project {
  title: string;
  role: string;
  description: string;
  implementation: string;
  results: string;
  icon: React.ReactNode;
}

interface Job {
  company: string;
  title: string;
  period: string;
  location: string;
  projects: Project[];
}

const Experience = () => {
  const [activeJob, setActiveJob] = useState(0);
  
  const jobs: Job[] = [
    {
      company: "RedPluto Analytics",
      title: "AI/ML Engineer",
      location: "Pune, India",
      period: "Sep 2024 - Present",
      projects: [
        {
          title: "HubSpot Deal Data Pipeline",
          role: "Data Engineer",
          description: "Needed a scalable solution to automate extraction and reporting of HubSpot CRM deal data for operational analytics.",
          implementation: "Built an Airflow-based ETL pipeline using Python, integrated HubSpot APIs, and enabled field mapping, logging, and SFTP-based report delivery.",
          results: "Automated deal data reporting for both open and closed pipelines, reducing manual effort by 90% and ensuring timely, structured CSV reports with error tracking.",
          icon: <Database size={20} className="text-teal" />
        },
        {
          title: "AI-Powered Call Analysis System",
          role: "AI Engineer",
          description: "Needed an automated system to analyze trading call recordings and validate transactions for compliance and quality assurance.",
          implementation: "Built a Flask-based API with PostgreSQL backend, used Google Gemini AI for transcription and data extraction, and implemented real-time audio processing and dashboard analytics.",
          results: "Delivered a production-grade system that achieved 95%+ transcription accuracy and automated match/mismatch analysis, improving call auditing efficiency and reducing manual verification efforts by over 80%.",
          icon: <Brain size={20} className="text-teal" />
        }
      ]
    }
  ];

  return (
    <section id="experience" className="section pl-8 md:pl-16 lg:pl-32">
      <div className="max-w-4xl">
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
            
            <div className="flex items-center text-slate text-xs mb-8">
              <Briefcase size={14} className="mr-2 text-teal" />
              {jobs[activeJob].location}
            </div>
            
            {/* Projects */}
            <div className="space-y-8">
              {jobs[activeJob].projects.map((project, index) => (
                <div key={index} className="border-l-2 border-navy-light pl-6 hover:border-teal transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    {project.icon}
                    <div>
                      <h4 className="text-base font-medium text-slate-lighter">
                        {project.title}
                      </h4>
                      <span className="text-sm text-teal font-medium">{project.role}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-teal font-medium">Challenge: </span>
                      <span className="text-slate">{project.description}</span>
                    </div>
                    
                    <div>
                      <span className="text-teal font-medium">Solution: </span>
                      <span className="text-slate">{project.implementation}</span>
                    </div>
                    
                    <div>
                      <span className="text-teal font-medium">Impact: </span>
                      <span className="text-slate">{project.results}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;