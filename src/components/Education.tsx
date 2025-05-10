
import { Calendar, GraduationCap, MapPin } from "lucide-react";

const EducationCard = ({ 
  degree, 
  institution, 
  location, 
  period, 
  description,
  courses = []
}: {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  courses?: string[];
}) => {
  return (
    <div className="bg-navy p-6 rounded-lg border border-navy-light hover:border-teal/30 transition-all duration-300 mb-6">
      <div className="flex items-start mb-4">
        <div className="bg-teal/10 p-2 rounded mr-4">
          <GraduationCap className="text-teal" size={24} />
        </div>
        <div>
          <h3 className="text-lg font-medium">{degree}</h3>
          <p className="text-slate-light">{institution}</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-4 text-xs text-slate">
        <div className="flex items-center">
          <MapPin size={14} className="mr-1 text-teal" />
          {location}
        </div>
        <div className="flex items-center">
          <Calendar size={14} className="mr-1 text-teal" />
          {period}
        </div>
      </div>
      
      <p className="text-slate mb-4">{description}</p>
      
      {courses.length > 0 && (
        <div>
          <h4 className="text-white font-medium mb-2">Key Courses:</h4>
          <div className="flex flex-wrap gap-2">
            {courses.map((course, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-navy-light rounded-full text-xs hover:bg-teal hover:bg-opacity-10 transition cursor-default"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Education = () => {
  const educations = [
    {
      degree: "Master of Computer Applications",
      institution: "Bhilai Institute of Technology",
      location: "Durg, India",
      period: "Jan 2020 - Jan 2022",
      description: "Focus: Machine Learning, Data Science, and Advanced Topics in Computer Applications. Completed projects in: NLP, Model Deployment, and MLOps.",
      courses: ["Advanced Machine Learning", "Natural Language Processing", "Deep Learning", "Software Engineering", "Data Mining"]
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Shri Shankaracharya Swami Swaroopanand Mahavidyalaya",
      location: "Durg, India",
      period: "Jan 2016 - Jan 2019",
      description: "Established a solid foundation in Programming, Data Structures, and Computer Fundamentals. Involved in Technical Events and Research-Focused Mini-Projects.",
      courses: ["Data Structures", "Algorithms", "Database Management Systems", "Operating Systems", "Web Technologies"]
    }
  ];

  return (
    <section id="education" className="section pl-8 md:pl-16 lg:pl-32">
      <div className="max-w-3xl">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="h-[1px] bg-navy-light flex-grow ml-6"></div>
        </div>
        
        <div>
          {educations.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
