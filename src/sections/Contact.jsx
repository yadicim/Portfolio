import { Mail, Phone, MapPin , Send} from "lucide-react";
import {Button} from "@/components/Button"
import { useState } from "react";

const cintactInfo = [
    {
        icon:Mail,
        label:"Email",
        value:"yadigar.benli@gmail.com",
        href:"mailto:yadigar.benli@gmail.com",
    },

     {
        icon:Phone,
        label:"Phone",
        value:"+358 46 593 31 54",
        href:"tel:+358465933154",
    },

    {
        icon:MapPin,
        label:"Location",
        value:"Oulu/Finland",
        href:"#"
    },

    
];


export const Contact = ()=>{
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
    }
    return (

    <section id="contact"
        className="py-32 relative overflow-hidden">
        
            <div className=" absolute top-0 left-1/4 w-96 h-96 
                    bg-(--color-primary)/5 rounded-full blur-3xl ">
                    
                    <div className=" absolute bottom-1/4 right-1/4 w-64 h-64 bg(--color-highlight)/5 rounded-full blur-3xl"></div>
            </div>        
            <div className=" container mx-auto px-6 relative z-10 ">
            

                {/*HEADER SECTION*/}
                <div className=" text-center mx-auto max-w-3xl mb-16">
                    <span className=" text-(--color-secondary-foreground) text-sm font-medium tracking-wider uppercase animate-fade-in ">Get In Touch</span>
                    <h2 className=" text-(--color-opposite) text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                    Lets build
                    <span className="font-serif italic font-normal text-white">  something great.
                    </span>
                    </h2>
                    <p className="text-(--color-muted-foreground) animate-fade-in animation-delay-200">
                    Have a project or idea in mind? Feel free to get in touch 
                    — I’m open to learning, collaboration, and potential job opportunities.

                    </p>

                </div>
                <div className=" grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto ">
                    <div className="glass p-8 rounded-3xl border border-(--color-primary)/30 animate-fade-in animation-delay-300">
                        <form className=" space-y-6 ">
                            <div>
                                <label htmlFor="name" className=" block text-sm font-medium mn-2" >Name</label>
                                <input id="name" type="text" 
                                required
                                placeholder="Your name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({...formData, name: e.target.value})

                                }
                                className=" w-full px-4 py-3 bg-(--color-surface) rounded-xl border border-(--color-border) focus:border-(--color-opposite) outline-none transition-all" />
                            </div>

                             <div>
                                <label htmlFor="email" className=" block text-sm font-medium mn-2">Email</label>
                                <input id="email" type="email" 
                                required
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({...formData, email: e.target.value})

                                }
                                className=" w-full px-4 py-3 bg-(--color-surface) rounded-xl border border-(--color-border) focus:border-(--color-opposite) outline-none transition-all"/>
                            </div>

                             <div>
                                <label htmlFor="message" className=" block text-sm font-medium mn-2">Message</label>
                                <textarea id="message" type="text"
                                required                                
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({...formData, message: e.target.value})

                                }
                                
                                className=" w-full px-4 py-3 bg-(--color-surface) rounded-xl border border-(--color-border) focus:border-(--color-opposite) outline-none transition-all"/>
                            </div>
                            <Button className=" w-full" type="submit" >
                                Send Message
                                <Send />

                            </Button>

                        </form>
                    </div>

                </div>
                
                    
            </div>
            
    </section>

    );
};