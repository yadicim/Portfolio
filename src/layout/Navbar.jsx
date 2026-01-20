import { Button } from "@/components/Button";
import {Menu , X} from "lucide-react"; 
import { useState } from "react";

const navLinks=[
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "Testimonials"},

];
export const Navbar = ()=>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50 ">
        <nav className="container mx-auto px-6 flex items-center justify-between">

            {/* Logo*/}
            <a href="#" className="text-xl font-bold tracking-tight hover:text-(--color-primary)">
                Yadigar Arslan <span className="text-primary">.</span>
            </a>

            {/* Navigation Links */}
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
        {/* BUTTON */}
        <div className="hidden md:block ">
            <Button size="sm" className="text-black">
                Contact Me

            </Button>
        </div>

        {/* Mobile Menu Botton */}
        <button className="md:hidden p-2 text-[var(--color-foreground) cursor-pointer"
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
                        className=" text-lg px-4 py-2 text-(--color-muted-foreground) hover:text-(--color-foreground) rounded-full hover:bg-(--color-surface)"
                        >{link.label}
                        </a>
                    ))}

                    <Button >Contact Me</Button>

            </div>

        </div>
        )}
    </header>
    );
};