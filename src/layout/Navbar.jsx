import { Button } from "@/components/Button";
import {Menu , X} from "lucide-react"; 
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 




const navLinks=[
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "Testimonials"},

];
export const Navbar = ()=>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=> {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >50)
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.addEventListener("scroll", handleScroll);

    },[]);

    return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
    isScrolled ? "glass-strong py-3" : " bg-transparent py-5 "  } z-50 `}>
        <nav className="container mx-auto px-6 flex items-center justify-between">

            {/* LOGO*/}
            <a href="#" className="ml-10 text-xl font-bold tracking-tight hover:text-(--color-primary)">
                Yadigar Arslan <span className="text-primary"></span>
            </a>

            {/* NAVIGATION LINKS */}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link, index) => (
                        <a href={link.href} 
                        key={index}
                        className="px-4 py-2 text-sm text-(--color-muted-foreground) hover:text-(--color-foreground) rounded-full hover:bg-(--color-surface)"
                        >{link.label}</a>
                    ))}

                </div>

            </div>


        {/* BUTTONS */}

        <div  className=" flex items-center space-x-8">

            {/*SEARCH AREA */}

            <div>
                <form>
                    <div className=" hidden md:flex group border-r px-4 mx-4 py-1 border-(--color-primary) ">
                        <input type="text" className=" opacity-0 group-hover:opacity-100 bg-transparent border-b border-(--color-primary) focus:outline-none w-16 lg:w-24 transition duration-500 " />
                        <button className="group -ml-4 transition duration-500">
                <FontAwesomeIcon 
                className="group-hover:text-(--color-opposite) transation duration-500" 
                icon={faMagnifyingGlass} 
                />
    </button>
                    </div>
                </form>
            </div>

            <div className="mr-8 hidden md:block">
        <Button 
        size="sm" 
        className="bg-linear-to-r from-[#4CFF9A] to-[#ff0088] text-black font-bold hover:opacity-90 transition-opacity border-none"
        >
        Contact Me
        </Button>
        </div>

        </div>

        {/* Mobile Menu Botton */}
        <button className="md:hidden p-2 text-[var(--color-foreground) cursor-pointer "
         onClick={()=> setIsMobileMenuOpen((prev)=>!prev)}>
           {isMobileMenuOpen ? < X size={24} />  : <Menu  size={24} /> }

        </button>


        

        </nav>

        {/*Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                 {navLinks.map((link, index) => (
                        <a href={link.href} 
                        key={index}
                        onClick={()=>setIsMobileMenuOpen(false)}
                        className=" text-lg px-4 py-2 text-(--color-muted-foreground) hover:text-(--color-foreground) rounded-full hover:bg-(--color-surface)"
                        >{link.label}
                        </a>
                    ))}

                    <Button onClick={()=>setIsMobileMenuOpen(false)} className="bg-linear-to-r from-[#4CFF9A] to-[#ff0088] text-black font-bold hover:opacity-90 transition-opacity border-none">Contact Me</Button>

            </div>

        </div>
        )}
    </header>
    );
};