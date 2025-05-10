
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section flex flex-col justify-center items-center px-8">
      <div className="max-w-2xl text-center">
        <h2 className="text-base font-normal text-teal mb-4">What's Next?</h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Slide Into My Inbox</h2>
        
        <p className="text-base text-slate mb-12 leading-relaxed">
          If you've got a role, a project, or just a meme worth sharing — I'm all ears! I'm open to new opportunities, collaborations, or caffeine-fueled debugging chats. 
          Don't worry, I respond faster than your CI/CD pipeline.
        </p>
        
        <Button 
          variant="outline"
          className="border-2 border-teal text-teal px-8 py-4 rounded-md text-base font-medium hover:bg-teal hover:bg-opacity-10 transition"
          asChild
        >
          <a href="mailto:neerajprasad.209@gmail.com">Ping Me</a>
        </Button>
        
        <div className="mt-16 flex justify-center space-x-8">
          <a href="https://github.com/neerajprasad209" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal transition">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/neeraj-prasad-86a89b202/" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal transition">
            <Linkedin size={24} />
          </a>
          <a href="mailto:neerajprasad.209@gmail.com" className="text-slate hover:text-teal transition">
            <Mail size={24} />
          </a>
        </div>
        
        <p className="mt-16 text-slate-light text-xs">
          Designed & Built by Neeraj Prasad © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Contact;
