
import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  featured?: boolean;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-navy p-6 rounded-lg h-full border border-navy-light hover:border-teal/30 transition-all transform hover:-translate-y-2 duration-300 flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div className="bg-teal/10 p-2 rounded">
          <Folder className="text-teal" size={24} />
        </div>
        <div className="flex space-x-4">
          {project.githubLink && (
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition"
            >
              <Github size={20} />
            </a>
          )}
          {project.liveLink && (
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-lg font-medium mb-2">{project.title}</h3>
      <p className="text-base text-slate mb-6 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="text-slate-light text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Advanced Q&A Chatbot with Vector Embeddings",
      description: "An NLP-powered chatbot developed using LangChain, HuggingFace, and FAISS, aimed at retrieving and answering queries from custom document sources through vector embeddings.",
      technologies: ["Python", "HuggingFace", "LangChain", "FAISS", "Streamlit"],
      githubLink: "https://github.com/neerajprasad209/ChatWithPDF_using_OpenAI",
      featured: true
    },
    {
      title: "Application Tracking System (ATS)",
      description: "An automated resume screening platform utilizing NLP-based keyword extraction, rule-based logic, and predictive modeling for efficient candidate evaluation.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Regex"],
      githubLink: "https://github.com/neerajprasad209/ats-system",
      featured: true
    },
    {
      title: "Hotel Booking Cancellation Prediction System",
      description: "Built a predictive system to forecast hotel booking cancellations and support revenue optimization. Developed an end-to-end ML pipeline with automated data ingestion and Flask-based prediction interface.",
      technologies: ["Python", "LightGBM", "MLflow", "Docker", "Jenkins", "Flask"],
      githubLink: "https://github.com/neerajprasad209/hotel_reservation",
      featured: true
    },
    {
      title: "Gluco Guard: Advanced Diabetes Predictor",
      description: "A healthcare analytics tool achieving 89% accuracy, integrating cloud-deployed AI models for personalized diabetes risk prediction.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask", "AWS"],
      githubLink: "https://github.com/neerajprasad209/Dibeties_Prediction_Project",
      featured: true
    },
    {
      title: "Multilingual Call Center Analysis Tool",
      description: "Developed at RedPluto Analytics to transcribe and analyze multilingual voice data using Gemini and Streamlit, facilitating support for unstructured audio.",
      technologies: ["Python", "Gemini", "Streamlit", "Apache Airflow", "Spark", "Hadoop"],
      // githubLink: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="section pl-8 md:pl-16 lg:pl-32">
      <div className="max-w-5xl">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="h-[1px] bg-navy-light flex-grow ml-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;