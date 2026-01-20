export const Hero = ()=>{
    return ( <section className="relative min-h-screen flex items-center overflow-hidden">
        {/*Background*/}
        <div className=" absolute inset-0">
            <img 
            src="projects/hero-bg3.png" 
            alt="Hero image" 
            className="w-full h-full object-cover opacity-40"/>

            <div className=" absolute inset-0  bg-linear-to-b from-background/20 via-background/80 to-background"></div>
        </div>
    {/*Green Dots*/}
   <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(30)].map((_, i) => (
    <div
      key={i}
      className="absolute text-xs font-mono opacity-60"
      style={{
        color: "#6BFFB3",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `vertical-scroll ${
            15 + Math.random() *20
        }s ease-in-out infinite `,
        animationDelay: `${Math.random()*5}s`,
      }}
    >
      {Math.round(Math.random())}
    </div>
     ))}
    </div>

    </section>
    );
};