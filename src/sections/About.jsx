import { Code2Icon, LightbulbIcon, PuzzleIcon, UsersIcon } from "lucide-react";

const highlights =[
    {
        icon: Code2Icon,
        title : "Well-Structured Code",
        description: "Code that follows a logical structure, improves readability, and supports long-term maintainability."

    },

    {
        icon: LightbulbIcon,
        title : "Simple & Effective Solutions",
        description: "A structured and analytical approach to breaking down complex problems and finding practical, effective solutions."

    },

    {
        icon: PuzzleIcon,
        title : "Problem-Solving Mindset",
        description: "A structured and analytical approach to breaking down complex problems and finding practical, effective solutions."

    },

    {
        icon: UsersIcon,
        title : "Effective Collaboration",
        description: "An organized and respectful approach to teamwork, supported by clear communication and mutual understanding."

    },

]

export const About = ()=>{
    return (
    <section id="about" className="py-32 relative overflow-hidden" >
        <div>
            <div>
                {/*LEFT COLUMN*/}
                <div>
                    <span>About Me</span>
                </div>
                <h2>
                    Bridging Law and Technology 
                    <span>
                        Through Code.
                    </span>
                </h2>

            </div>
        </div>
    </section>
    );
};
