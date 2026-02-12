import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Play, Database, Cloud, Monitor, ShoppingBag, Home } from "lucide-react"
import pic_7 from "../assets/img/sweet.png";
import pic_8 from "../assets/img/Dictionary.png";

// Custom SVG placeholders for each project (no external image dependencies)
const sweet_placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310b981;stop-opacity:0.1' /%3E%3Cstop offset='100%25' style='stop-color:%23059669;stop-opacity:0.2' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad)' /%3E%3Crect x='50' y='50' width='300' height='200' rx='8' fill='white' opacity='0.9' /%3E%3Crect x='70' y='70' width='260' height='20' rx='4' fill='%23e5e7eb' /%3E%3Crect x='70' y='100' width='200' height='15' rx='3' fill='%23f3f4f6' /%3E%3Crect x='70' y='125' width='180' height='15' rx='3' fill='%23f3f4f6' /%3E%3Crect x='70' y='150' width='220' height='15' rx='3' fill='%23f3f4f6' /%3E%3Ccircle cx='85' cy='190' r='8' fill='%2310b981' /%3E%3Crect x='100' y='185' width='80' height='10' rx='2' fill='%2310b981' /%3E%3Crect x='190' y='185' width='60' height='10' rx='2' fill='%236b7280' /%3E%3Ctext x='200' y='35' font-family='Arial, sans-serif' font-size='18' font-weight='bold' text-anchor='middle' fill='%2310b981'%3ESweet Shop Management%3C/text%3E%3C/svg%3E";

const pg_placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%237c3aed;stop-opacity:0.1' /%3E%3Cstop offset='100%25' style='stop-color:%236d28d9;stop-opacity:0.2' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad2)' /%3E%3Crect x='50' y='50' width='300' height='200' rx='8' fill='white' opacity='0.9' /%3E%3Crect x='70' y='70' width='260' height='20' rx='4' fill='%23e5e7eb' /%3E%3Crect x='70' y='100' width='200' height='15' rx='3' fill='%23f3f4f6' /%3E%3Crect x='70' y='125' width='180' height='15' rx='3' fill='%23f3f4f6' /%3E%3Crect x='70' y='150' width='220' height='15' rx='3' fill='%23f3f4f6' /%3E%3Ccircle cx='85' cy='190' r='8' fill='%237c3aed' /%3E%3Crect x='100' y='185' width='80' height='10' rx='2' fill='%237c3aed' /%3E%3Crect x='190' y='185' width='60' height='10' rx='2' fill='%236b7280' /%3E%3Ctext x='200' y='35' font-family='Arial, sans-serif' font-size='18' font-weight='bold' text-anchor='middle' fill='%237c3aed'%3EPG Discovery Platform%3C/text%3E%3C/svg%3E";

function Projects() {
    const professionalProjects = [
        {
            id: 1,
            logo: pic_7,
            preview: sweet_placeholder, // Use SVG placeholder directly
            name: "Sweet Shop Management System",
            category: "Full Stack",
            role: "Full Stack Developer",
            tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Google OAuth"],
            link: "https://my-sweet-shop.netlify.app/",
            source: "https://github.com/Prashant29062003/sweet-shop-management-system",
            desc: "Built inventory and user management system with Role-Based Access Control and modern authentication.",
            features: [
                "JWT & Google OAuth 2.0 authentication",
                "Role-Based Access Control (RBAC)",
                "Admin dashboards with analytics",
                "Separate frontend/backend deployment"
            ],
            icon: <Database className="h-6 w-6" />,
            color: "bg-green-500"
        },
        {
            id: 2,
            logo: pic_8,
            preview: pg_placeholder, // Use SVG placeholder directly
            name: "PG Discovery Platform",
            category: "Full Stack",
            role: "Full Stack Developer",
            tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
            link: "https://pg-discovery-platform.vercel.app/",
            source: "https://github.com/Prashant29062003/pg-discovery-platform",
            desc: "Developed PG accommodation discovery platform with comprehensive admin CMS and authentication.",
            features: [
                "Admin Content Management System",
                "JWT authentication and CRUD workflows",
                "Modular backend architecture",
                "Deployed on Vercel platform"
            ],
            icon: <Cloud className="h-6 w-6" />,
            color: "bg-purple-500"
        }
    ];

    return (
        <section name="Projects" className="min-h-screen bg-gradient-to-br from-background via-background to-muted/5 py-20 dark:from-background dark:via-background dark:to-muted/5">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Professional <span className="text-indigo-600 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent font-semibold">Projects</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Full-stack applications showcasing modern development practices and scalable architecture
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {professionalProjects.map((project) => (
                        <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-indigo-400 dark:border-gray-700 dark:hover:border-indigo-500 bg-white dark:bg-slate-900 shadow-lg h-full overflow-hidden">
                            {/* Project Preview Image */}
                            <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-slate-800">
                                <img 
                                    src={project.preview} 
                                    alt={`${project.name} preview`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-3 right-3">
                                    <Badge className="text-xs px-2 py-1 bg-white/90 text-gray-800 dark:bg-slate-900/90 dark:text-gray-200 font-medium backdrop-blur-sm">
                                        {project.category}
                                    </Badge>
                                </div>
                                {/* Enhanced fallback overlay for missing images */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800 opacity-0 pointer-events-none transition-opacity duration-300" id={`fallback-${project.id}`}>
                                    <div className="text-center p-4">
                                        <div className={`p-4 rounded-xl ${project.color} bg-opacity-20 text-white mb-3 mx-auto`}>
                                            {project.id === 1 ? <ShoppingBag className="w-8 h-8" /> : <Home className="w-8 h-8" />}
                                        </div>
                                        <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">{project.name}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Preview Available Soon</p>
                                        <div className="mt-3 flex flex-wrap gap-1 justify-center">
                                            {project.tech.slice(0, 3).map((tech, index) => (
                                                <span key={index} className="text-xs px-2 py-1 bg-gray-600 text-white rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <CardHeader className="pb-4 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl ${project.color} bg-opacity-20 text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                                        {project.icon}
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                            {project.name}
                                        </CardTitle>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">{project.role}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6 px-6 pb-6">
                                <CardDescription className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {project.desc}
                                </CardDescription>
                                
                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, index) => (
                                            <Badge key={index} className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 font-medium border border-gray-300 dark:border-gray-600">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div className="mb-6">
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-3">Key Features</h4>
                                    <div className="space-y-2">
                                        {project.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                                    >
                                        <Play className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                    <a 
                                        href={project.source} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                                    >
                                        <Github className="w-4 h-4" />
                                        Source
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12 lg:mt-16">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        These projects demonstrate my full-stack development capabilities and enterprise-level problem-solving skills.
                    </p>
                    <Badge className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-medium shadow-lg">
                        Production-Ready Applications
                    </Badge>
                </div>
            </div>
        </section>
    )
}

export default Projects
