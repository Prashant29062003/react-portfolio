import React, { useState } from 'react'
import { Link } from "react-scroll"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
    Github,
    Linkedin,
    Mail,
    Download,
    Code,
    Briefcase,
    Users,
    Zap,
    ArrowRight,
    CheckCircle
} from "lucide-react"
import { ReactTyped } from "react-typed"
import pic from "../assets/img/portfolio.jpg"

function Home() {
    const [activeServiceFilter, setActiveServiceFilter] = useState('all');
    const [activeSkillFilter, setActiveSkillFilter] = useState('all');
    
    const services = [
        {
            icon: <Code className="h-6 w-6" />,
            title: "Full-Stack Development",
            description: "End-to-end web applications using modern MERN stack technologies",
            category: "development"
        },
        {
            icon: <Briefcase className="h-6 w-6" />,
            title: "UI/UX Design",
            description: "Creating intuitive, responsive interfaces with exceptional user experience",
            category: "design"
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: "API Integration",
            description: "Building robust RESTful APIs and seamless third-party integrations",
            category: "development"
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: "Performance Optimization",
            description: "Optimizing applications for speed, scalability, and user engagement",
            category: "optimization"
        }
    ];

    const skills = [
        { name: "React.js", level: 90, category: "Frontend", type: "frontend" },
        { name: "Node.js", level: 85, category: "Backend", type: "backend" },
        { name: "TypeScript", level: 80, category: "Language", type: "language" },
        { name: "MongoDB", level: 75, category: "Database", type: "database" },
        { name: "Tailwind CSS", level: 88, category: "Styling", type: "frontend" },
        { name: "Express.js", level: 82, category: "Backend", type: "backend" },
        { name: "PostgreSQL", level: 70, category: "Database", type: "database" },
        { name: "Docker", level: 65, category: "DevOps", type: "devops" }
    ];

    const filters = [
        { id: 'all', label: 'All', color: 'bg-gray-400' },
        { id: 'frontend', label: 'Frontend', color: 'bg-blue-400' },
        { id: 'backend', label: 'Backend', color: 'bg-green-400' },
        { id: 'database', label: 'Database', color: 'bg-purple-400' },
        { id: 'devops', label: 'DevOps', color: 'bg-orange-400' },
        { id: 'language', label: 'Language', color: 'bg-red-400' },
        { id: 'design', label: 'Design', color: 'bg-pink-400' },
        { id: 'development', label: 'Development', color: 'bg-indigo-400' },
        { id: 'optimization', label: 'Optimization', color: 'bg-yellow-400' }
    ];

    const getCombinedFilter = (filterType) => {
        const relatedCategories = {
            'frontend': ['frontend', 'development'],
            'backend': ['backend', 'development'], 
            'database': ['database'],
            'devops': ['devops'],
            'language': ['language'],
            'design': ['design'],
            'development': ['development'],
            'optimization': ['optimization']
        };
        
        return relatedCategories[filterType] || [];
    };

    const handleServiceFilterClick = (filterId) => {
        setActiveServiceFilter(filterId);
        // Update skills filter to match related categories
        const relatedCategories = getCombinedFilter(filterId);
        setActiveSkillFilter(relatedCategories.length > 0 ? relatedCategories[0] : 'all');
    };

    const handleSkillFilterClick = (filterId) => {
        setActiveSkillFilter(filterId);
        // Update services filter to match related categories
        const relatedCategories = getCombinedFilter(filterId);
        setActiveServiceFilter(relatedCategories.length > 0 ? relatedCategories[0] : 'all');
    };

    const filteredServices = activeServiceFilter === 'all' 
        ? services 
        : services.filter(service => getCombinedFilter(activeServiceFilter).includes(service.category));

    const filteredSkills = activeSkillFilter === 'all' 
        ? skills 
        : skills.filter(skill => getCombinedFilter(activeSkillFilter).includes(skill.type));

    return (
        <section name="Home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/5 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative z-10">
                {/* Profile Section - Top */}
                <div className="flex justify-center mb-12 lg:mb-16">
                    <div className="relative group">
                        {/* Profile Card */}
                        <Avatar className="relative h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 ring-4 ring-border/20 shadow-xl group-hover:shadow-primary/20 transition-all duration-300 group-hover:scale-105">
                            <AvatarImage src={pic} alt="Prashant Kumar" className="object-cover" />
                            <AvatarFallback className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-br from-primary to-primary-50 text-primary-foreground">PK</AvatarFallback>
                        </Avatar>
                        
                        {/* Status Badge */}
                        <div className="absolute -bottom-1 -right-1">
                            <Badge className="px-2 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-medium shadow-md border-green-400">
                                Open to Work
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto">
                    {/* Main Heading */}
                    <div className="space-y-4 mb-8">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                            Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-primary-50 bg-clip-text text-transparent font-semibold">Prashant Kumar</span>
                        </h1>
                        
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-muted-foreground mb-4">
                            <span className="text-primary">Full-Stack Developer</span>
                        </h2>
                        
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Passionate about building scalable web applications with exceptional user experiences. 
                            Specialized in React.js, Node.js, and modern web technologies.
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button size="lg" className="px-6 py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-primary-50 hover:from-primary-600 hover:to-primary-400" asChild>
                            <Link to="Contact" smooth={true} duration={800} offset={-70}>
                                <Mail className="mr-2 h-4 w-4" />
                                Start a Project
                            </Link>
                        </Button>
                        
                        <Button variant="outline" size="lg" className="px-6 py-3 text-base font-semibold border border-border/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-md" asChild>
                            <Link to="Projects" smooth={true} duration={800} offset={-70}>
                                <Download className="mr-2 h-4 w-4" />
                                View Portfolio
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Services and Skills Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
                    {/* Services Section */}
                    <div className="text-left lg:text-left">
                        <div className="flex items-center justify-between mb-6 pb-3 border-b border-border">
                            <h3 className="text-xl font-bold text-foreground">
                                Professional Services
                            </h3>
                            {/* Filter Dots */}
                            <TooltipProvider>
                                <div className="flex items-center gap-2">
                                    {filters.map((filter) => (
                                        <Tooltip key={filter.id}>
                                            <TooltipTrigger asChild>
                                                <button
                                                    key={filter.id}
                                                    onClick={() => handleServiceFilterClick(filter.id)}
                                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                        activeServiceFilter === filter.id 
                                                            ? `${filter.color} ring-2 ring-offset-2 ring-offset-background` 
                                                            : 'bg-gray-300 hover:bg-gray-400'
                                                    }`}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="text-sm font-medium">{filter.label}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </div>
                            </TooltipProvider>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {filteredServices.map((service, index) => (
                                <div key={index} className="group p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 dark:bg-card dark:border-border dark:hover:border-primary">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300 dark:bg-primary/20 dark:text-primary">
                                            {service.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-foreground text-base mb-2 dark:text-green-500">{service.title}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed dark:text-muted-foreground">{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ArrowRight className="h-5 w-5 text-primary dark:text-primary" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="text-left lg:text-left">
                        <div className="flex items-center justify-between mb-6 pb-3 border-b border-border">
                            <h3 className="text-xl font-bold text-foreground dark:text-foreground">
                                Technical Expertise
                            </h3>
                            {/* Filter Dots */}
                            <TooltipProvider>
                                <div className="flex items-center gap-2">
                                    {filters.map((filter) => (
                                        <Tooltip key={filter.id}>
                                            <TooltipTrigger asChild>
                                                <button
                                                    key={filter.id}
                                                    onClick={() => handleSkillFilterClick(filter.id)}
                                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                        activeSkillFilter === filter.id 
                                                            ? `${filter.color} ring-2 ring-offset-2 ring-offset-background` 
                                                            : 'bg-gray-300 hover:bg-gray-400'
                                                    }`}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="text-sm font-medium">{filter.label}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </div>
                            </TooltipProvider>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {filteredSkills.map((skill, index) => (
                                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 dark:bg-card dark:border-border dark:hover:border-primary">
                                    <div className="flex items-center gap-2 flex-1">
                                        <span className="text-sm font-medium text-foreground dark:text-green-500">{skill.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden dark:bg-muted">
                                            <div 
                                                className="h-full bg-gradient-to-r from-primary to-primary rounded-full transition-all duration-500 dark:from-primary dark:to-primary"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-semibold text-primary min-w-[2.5rem] text-right dark:text-primary">{skill.level}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home