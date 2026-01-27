const experiences = [

    {
  period: "Apr 2025 – Jun 2025",
  role: "Coding Instructor Intern",
  company: "Kodarit, Koodikaverit Oy",
  description:
    "Completed an internship focused on teaching children coding using various programming tools, including Unity, Scratch, JavaScript, and Python. Worked as an assistant instructor, supporting children in completing programming tasks. Gained hands-on experience in programming education, interacting with children of different age groups, and applying versatile programming tools in an educational setting.",
  current: false
    },

    {
    period: "Apr 2023 – Jun 2023",
    role: "Programming Intern",
    company: "TrialDiginikkari, Business Asema, Oulu",
    description:
        "Completed a practical internship introducing the Python programming language through various programming exercises. Gained experience in 3D printing and laser cutting, combining software skills with hands-on digital fabrication techniques.",
    current: false
    },


    {
  period: "Mar 2018 – Apr 2019",
  role: "Patent Infringement Legal Advisor",
  company: "Yalciner Patent, Turkey",
  description:
    "Provided legal advice and guidance on patent infringement investigations. Core competencies included strong knowledge of legislation and legal substance, leadership skills, analytical thinking, motivating and inspiring others, and demonstrating high-level initiative and creativity in challenging legal cases.",
  current: false
    },

    {
    period: "Jul 2016 – Feb 2017",
    role: "Investigating Judge",
    company: "4th Civil Law Chamber of the Supreme Court, Turkey",
    description:
        "Conducted investigations into civil law compensation cases, including damages related to physical and psychological injuries, and prepared recommendations for the deciding higher court. Investigations were carried out through interviews with involved parties and by retrieving information from judicial information systems. Key competencies included effective time management to meet strict deadlines, strong analytical and problem-solving skills, excellent communication abilities, developing effective solutions in complex situations, and a strong commitment to continuous learning and improvement.",
    current: false
    },
        {
    period: "Mar 2015 – Jul 2016",
    role: "Judge",
    company: "Hendek Court, Turkey",
    description:
        "Served as a civil law judge handling cases such as compensation claims, divorce proceedings, real estate disputes, and debt-related matters. Reviewed preliminary investigation legal documents, prior memoranda, and court decisions. Prepared written legal justifications, issued judicial decisions, and communicated rulings to the involved parties. Key competencies included effective time management to meet strict deadlines, strong analytical and problem-solving skills, excellent interpersonal abilities, and developing effective solutions in challenging situations.",
    current: false
    },

    {
    period: "Nov 2013 – Mar 2015",
    role: "Judicial Trainee",
    company: "Ankara Court, Turkey",
    description:
        "Completed a comprehensive judicial traineeship covering all core areas of the judiciary, including criminal law and civil law. Worked across different shifts and times of day, gaining broad practical exposure to court operations. Key competencies included analytical thinking, strong organizational skills, effective communication, and a high level of attention to detail.",
    current: false
    },
    {
    period: "Research Assistant",
    role: "Research Assistant",
    company: "Afyon Kocatepe University, Faculty of Law, Turkey",
    description:
        "Assisted legal researchers by conducting statistical, qualitative, and quantitative analyses. Collected, verified, processed, corrected, and visualized research data to support academic publications and reports through written analysis, charts, figures, and trend visualizations. Key competencies included research skills, analytical thinking, precision, self-direction, and strong knowledge of legislation.",
    current: false
    },
    
    ];

    export const Experience = () => {
         return (
             <section
             id="experience "
             className="py-32 relative overflow-hidden">
                <div className=" absolute TOP-1/2 left-1/4 w-96 h-96 
                  bg-(--color-primary)/5 rounded-full blur-3xl -translate-y-1/2">
                    
                </div>

                <div className=" container mx-auto px-6 relative z-10">
                    {/*SECTION HEADER*/}
                    <div className=" max-w-3xl mb-16">
                        <span className="text-(--color-primary) text-sm font-medium tracking-wider uppercase animate-fade-in "> Career Journey</span>
                        <h2 className=" text-(--color-opposite) text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                            Experience that<span className="font-serif italic font-normal text-white"> speaks volumes. </span>
                        </h2>
                        <p className="text-(--color-muted-foreground) animate-fade-in animation-delay-200">
                            A timeline of my interdisciplinary professional journey, combining law and software development.
                        </p>

                    </div>

                    {/*TIMELINE*/}
                    <div className=" relative">
                        <div className=" timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bh-linear-to-b from-(--color-primary)/70 via-(--color-primary)/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(76,255,154,0.8)]">
                        
                        {/*EXPERIENCE ITEMS*/}
                        <div className=" space-y-12">
                            {experiences.map((exp, idx) =>(
                                <div key={idx}>

                                    {/*TIMELINE DOT */}
                                    <div>

                                    </div>

                                    {/*CONTENT*/}
                                    <div>
                                        <div>
                                            <span>{exp.period}</span>

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


   
