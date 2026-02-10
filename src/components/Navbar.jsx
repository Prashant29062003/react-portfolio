import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menu, Moon, Sun } from "lucide-react"
import pic from "../assets/img/portfolio.jpg"

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or default to dark mode
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' : true; // Default to dark mode
    }
    return true; // Default to dark mode for SSR
  });

  const navItems = [
    { id: 1, navItem: "Home" },
    { id: 2, navItem: "About" },
    { id: 3, navItem: "Projects" },
    { id: 4, navItem: "Experience" },
    { id: 5, navItem: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save theme preference
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const NavItems = ({ mobile = false, onItemClick }) => (
    <>
      {navItems.map(({ id, navItem }) => (
        <Link
          key={id}
          to={navItem}
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          cursor="pointer"
          onSetActive={() => setActiveSection(navItem)}
          onClick={onItemClick}
          className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:text-primary hover:bg-primary/10 ${
            activeSection === navItem 
              ? 'text-primary bg-primary/10' 
              : 'text-muted-foreground'
          } ${mobile ? 'block w-full text-left' : 'inline-flex items-center'}`}
        >
          {navItem}
          {activeSection === navItem && !mobile && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
          )}
        </Link>
      ))}
    </>
  );

  return (
    <>
      <header className={`fixed left-0 top-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b' 
          : 'bg-background/80 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center gap-4 group cursor-pointer">
              <Avatar className="h-14 w-14 ring-4 ring-border group-hover:ring-primary transition-all duration-300 group-hover:scale-105 shadow-lg">
                <AvatarImage src={pic} alt="Prashant Kumar" />
                <AvatarFallback className="text-lg font-bold bg-primary text-primary-foreground">PK</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h1 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  Prashant<span className="text-primary">.</span>
                </h1>
                <p className="text-sm text-muted-foreground font-medium">Full Stack Developer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              <NavItems />
              <Button size="lg" className="ml-8 px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link to="Contact" smooth={true} duration={500} offset={-70}>
                  Get in Touch
                </Link>
              </Button>
              
              {/* Dark Mode Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 h-10 w-10 rounded-full border-2 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 transition-transform duration-300 rotate-180" />
                ) : (
                  <Moon className="h-5 w-5 transition-transform duration-300" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon" className="h-12 w-12 shadow-md z-50 relative">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[350px] sm:w-[400px] z-50">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center gap-4 pb-6 border-b">
                    <Avatar className="h-14 w-14 ring-4 ring-border shadow-lg">
                      <AvatarImage src={pic} alt="Prashant Kumar" />
                      <AvatarFallback className="text-lg font-bold bg-primary text-primary-foreground">PK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="font-semibold text-xl text-foreground">Prashant.</h2>
                      <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                    </div>
                  </div>
                  <nav className="flex flex-col space-y-3">
                    <NavItems mobile onItemClick={() => {}} />
                  </nav>
                  <div className="pt-6 border-t">
                    <Button size="lg" className="w-full py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                      <Link to="Contact" smooth={true} duration={500} offset={-70}>
                        Get in Touch
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar