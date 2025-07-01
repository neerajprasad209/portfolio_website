import { Award, ExternalLink, Calendar, Building } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  link: string;
  icon: React.ReactNode;
}

const CertificationCard = ({ certification }: { certification: Certification }) => {
  return (
    <div className="bg-navy p-6 rounded-lg border border-navy-light hover:border-teal/30 transition-all transform hover:-translate-y-2 duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div className="bg-teal/10 p-2 rounded">
          {certification.icon}
        </div>
        <a 
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-teal transition group"
          title="View Certificate"
        >
          <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>
      
      <h3 className="text-lg font-medium mb-3 flex-grow">{certification.title}</h3>
      
      <div className="flex items-center text-slate text-sm mt-auto">
        <Building size={16} className="mr-2 text-teal" />
        {certification.issuer}
      </div>
    </div>
  );
};

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Snowflake: Hands-On Essentials - Data Warehousing Workshop",
      issuer: "Snowflake",
      link: "https://achieve.snowflake.com/e61c3c53-1d86-425b-bb51-3126e67bc056#acc.lAiZ5keG",
      icon: <Award className="text-teal" size={24} />
    },
    {
      title: "Python Basics",
      issuer: "University of Michigan",
      link: "https://www.coursera.org/account/accomplishments/verify/R4PE5YZ7LWY3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      icon: <Award className="text-teal" size={24} />
    },
    {
      title: "Machine Learning Pipelines with Azure ML Studio",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/L68EQCUKN7YL",
      icon: <Award className="text-teal" size={24} />
    }
  ];

  return (
    <section id="certifications" className="section pl-8 md:pl-16 lg:pl-32">
      <div className="max-w-5xl">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl font-bold">Certifications</h2>
          <div className="h-[1px] bg-navy-light flex-grow ml-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;