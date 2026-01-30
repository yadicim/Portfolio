import { ArrowUpRight, Github } from "lucide-react";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton";

const projects=[
    {
    title :"Kotkantien Malaus",
    description:
    "A practice web project focused on layout structure, responsive design, and front-end development fundamentals.",
    image:"/projects/maalaus.png",
    tags:["SVG", "Html", "CSS"],
    link:"https://geronimo.okol.org/~arsyad/index.html",
    github:"https://github.com/yadicim/Maalaus",




    },
    {
        title: "Maailman Tapahtuma",
        description:
            "An event showcase web project with navigation menu, various holiday event sections, and front-end layout built using HTML and PHP.",
        image: "/projects/tapahtuma1.png",
        tags: ["HTML", "PHP", "Responsive Design"],
        link: "https://geronimo.okol.org/~arsyad/Palvelinohjelmointi%20N%C3%A4ytt%C3%B6ty%C3%B6/index.php",
        github: "https://github.com/yadicim/Tapahtuma.git"
    },

    {
        title: "KATAPULTTI",
        description: "Katapultti is a game made with Unity, where players launch objects with a catapult in a fun and interactive environment. The project showcases game mechanics, interactivity, and responsive web deployment.",
        image: "/projects/katapultti.png",
        tags: ["C#", "Unity", "Game", "Interactive"],
        link: "https://yadicim.itch.io/katapultti",
        github: "https://github.com/yadicim/MyUnityGame"
    }   




];
export const Projects = ()=>{
    return (
     <section id="projects" className="py-32 relative overflow-hidden" >
        {/*Bg glows*/ }
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-rimary/5 rounded-full blur-3xl" ></div>
        <div className=" absolute bottom-1/4 left-0 w-64 h-64 bg-(--color-highlight)/5 rounded-full blur-3xl"></div>

        <div className=" container mx-auto px-6 relative z-10">
            {/*SECTION HEADER*/}
            <div className=" text-center mx-auto max-w-3xl mb-16">
                <span className=" text-(--color-secondary-foreground) text-sm font-medium tracking-wider uppercase animate-fade-in ">Featured Work</span>
                <h2 className=" text-(--color-opposite) text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                    Projects Created 
                    <span className="font-serif italic font-normal text-white"> During My Studies
                    </span>
                </h2>
                <p className="text-(--color-muted-foreground) animate-fade-in animation-delay-200">
                    A selection of projects I built during my studies, focusing 
                    on web development fundamentals and practical problem-solving.

                </p>

            </div>
            {/*PROJECTS*/}
            <div className=" grid md:grid-cols-2 gap-8">
                {projects.map((project, idx)=> {
                    const isLastAndOdd = idx === projects.length - 1 && projects.length % 2 !== 0;
                    return (
                    <div key={idx} 
                    className={`group glass rounded-2xl overflow-hidden animate-fade-in 
                    ${isLastAndOdd ? "md:col-span-2 md:w-1/2 md:mx-auto" : "md:col-span-1"}
                `}
                    
                    style={{ animationDelay: `${(idx +1)* 100}ms`}}
                    >
                        {/*IMAGE*/}
                        <div className=" relative overflow-hidden h-auto">
                            <img src={project.image}
                             alt={project.title}
                              className=" w-full h-auto block transition-transform duration-600 group-hover:scale-110"
                            />

                            <div
                            className=" absolute inset-0 bg-linear-to-t from-(--color-card) via-(--color-card)/50 to-transparent opacity-60">


                            </div>
                            {/*OVERLAY LINKS*/}
                            <div className=" absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">

                                <a href={project.link} className="p-3 rounded-full glass  hover:text-(--color-primary) transition-all">
                                    <ArrowUpRight className="w-5 h-5"/>
                                </a>

                                <a href={project.github} className="p-3 rounded-full glass  hover:text-(--color-opposite) transition-all">
                                    <Github className="w-5 h-5" />
                                </a>

                            </div>    
                        </div>

                        {/*CONTENT*/}
                        <div className=" p-6 space-y-4">
                            <div className=" flex items-start justify-between">

                                <h3 className=" text-xl font-semibold group-hover:text-(--color-primary) transition-colors">
                                    {project.title}
                                   
                                </h3>
                                 <ArrowUpRight className=" w-5 h-5 text-(--color-muted-foreground) group-hover:text-(--color-primary) group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>

                            </div>
                            <p className=" text-sm text-(--color-muted-foreground)">
                                {project.description}
                            </p>
                            <div className=" flex flex-wrap gap-2">
                               {project.tags.map((tag, tagIdx) =>(
                                <span className=" px-4 py-1.5 rounded-full bg-(--color-surface) text-xs font-medium border border-(--color-border) text-(--color-muted-foreground) hover:border-(--color-primary)/50 hover:text-(--color-primary) transition-all duration-300 "> {tag}</span>
                               ))} 

                            </div>


                        </div>

                    </div>   
                    );
                })}

            </div>

            {/*VIEW ALL PROJECTS*/}
            <div className=" text-center mt-12 animate-fade-in">
                <a href="https://github.com/yadicim" target="_blank" rel="noopener noreferrer">
                <AnimatedBorderButton >
                    View All Projects 
                    <ArrowUpRight className=" w-5 h-5" />

                </AnimatedBorderButton>
                </a>
            </div>

        </div>
    </section> 
    );
}