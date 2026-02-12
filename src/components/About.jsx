import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AvatarUtils from '../utils/AvatarUtils'
import { Separator } from "@/components/ui/separator"
import { 
    User,
    GraduationCap,
    Award,
    Target,
    Code,
    Database,
    Cloud,
    GitBranch,
    Star,
    TrendingUp,
    Briefcase
} from "lucide-react"
import eSutraLogo from "../assets/img/e-sutra-technologies-private-limited.png"

function About() {
    const education = [
        {
            degree: "B.Tech in Electronics & Communication Engineering",
            institution: "Chandigarh Group of Colleges, Landan",
            year: "2022-2026 | 8.02 CGPA",
            icon: <GraduationCap className="h-5 w-5" />,
            color: "bg-blue-500"
        },
        {
            degree: "Kendriya Vidyalaya No. 3, Ambala Cantt, Haryana",
            institution: "12th Grade (CBSE): 89.2% (2022) | 10th Grade (CBSE): 87.4% (2020)",
            year: "High School",
            icon: <GraduationCap className="h-5 w-5" />,
            color: "bg-blue-500"
        }
    ];

    const technicalCompetencies = [
        {
            title: "Languages",
            items: ["C", "C++", "Java", "JavaScript (ES6+)", "C#", "SQL"],
            icon: <Code className="h-5 w-5" />,
            color: "bg-blue-500"
        },
        {
            title: "Frameworks", 
            items: ["React.js", "Node.js", "Express.js", "Next.js", "Tailwind CSS"],
            icon: <Database className="h-5 w-5" />,
            color: "bg-green-500"
        },
        {
            title: "Databases",
            items: ["MongoDB", "PostgreSQL", "SQL", "Firebase"],
            icon: <Cloud className="h-5 w-5" />,
            color: "bg-orange-500"
        },
        {
            title: "Tools & Platforms",
            items: ["Git/GitHub", "Postman", "Cloudinary", "Vercel", "Netlify", "REST APIs", "JWT Auth", "RBAC", "Agile/Scrum", "SDLC", "OOP"],
            icon: <GitBranch className="h-5 w-5" />,
            color: "bg-purple-500"
        }
    ];

    const experience = [
        {
            title: "Full-Stack Developer Intern",
            company: "E-Sutra Technologies Pvt. Ltd.",
            period: "Jan 2026 - Present",
            location: "Remote",
            description: "Developing production-level applications using React & Node.js with focus on scalable solutions and Agile methodologies.",
            achievements: [
                "Developing production-level applications using React & Node.js",
                "Designing and integrating REST APIs",
                "Enhancing UI components and fixing frontend/backend bugs",
                "Working in Agile Scrum environment with Jira updates and sprint collaboration"
            ],
            logo: eSutraLogo,
            color: "bg-blue-500"
        }
    ];

    const projects = [
        {
            title: "Sweet Shop Management System",
            role: "Full Stack Developer",
            techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Google OAuth"],
            description: "Built inventory and user management system with Role-Based Access Control and modern authentication.",
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
            title: "PG Discovery Platform",
            role: "Full Stack Developer",
            techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
            description: "Developed PG accommodation discovery platform with comprehensive admin CMS and authentication.",
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

    const achievements = [
        {
            title: "Web Designing",
            issuer: "W3School",
            year: "2023",
            description: "Complete frontend development including HTML, CSS, JavaScript",
            icon: <Award className="h-5 w-5" />
        },
        {
            title: "React.js",
            issuer: "FreeCodeCamp", 
            year: "2023",
            description: "Comprehensive study of React.js fundamentals",
            icon: <Star className="h-5 w-5" />
        }
    ];

    const missions = [
        {
            title: "Empowering Businesses Through Innovation",
            description: "I strive to empower businesses by crafting innovative web solutions using the MERN stack. My mission is to deliver high-quality, scalable applications that drive growth and enhance user experiences.",
            icon: <TrendingUp className="h-6 w-6" />
        },
        {
            title: "Creating Seamless Digital Experiences",
            description: "My mission is to create seamless digital experiences through expertly crafted web applications. By leveraging the power of MongoDB, Express.js, React.js, and Node.js, I aim to transform ideas into impactful solutions.",
            icon: <Target className="h-6 w-6" />
        },
        {
            title: "Driving Digital Transformation",
            description: "I am dedicated to driving digital transformation through cutting-edge technology and a deep understanding of the MERN stack. My mission is to build robust, scalable applications that streamline processes and propel businesses forward.",
            icon: <Cloud className="h-6 w-6" />
        }
    ];

    return (
        <section name="About" className="min-h-screen bg-gradient-to-br from-background via-background to-muted/5 py-20 dark:from-background dark:via-background dark:to-muted/5">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <AvatarUtils 
                        src="/src/assets/img/portfolio.jpg"
                        alt="Prashant Kumar"
                        fallbackText="PK"
                        size="xl"
                        showStatus={true}
                        statusText="Open to Work"
                        statusColor="green"
                    />
                    
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                        Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-primary-50 bg-clip-text text-transparent font-semibold">Prashant Kumar</span>
                    </h1>
                    
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                        Final-year B.Tech (ECE) student and Full-Stack Developer Intern with hands-on experience in building and deploying production-ready web applications. Strong foundation in OOP, data structures, REST APIs, databases, and Agile SDLC. Seeking a Graduate Development Engineer role to contribute to scalable, enterprise-grade software solutions.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
                    {/* Education Card */}
                    <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-500 bg-white dark:bg-slate-900 shadow-lg">
                        <CardHeader className="pb-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Education</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6 px-6 pb-6">
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className={`p-3 rounded-xl ${edu.color} bg-opacity-20 text-gray-700 dark:text-gray-300 shadow-md`}>
                                                {edu.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-gray-900 dark:text-white text-base mb-3">{edu.degree}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{edu.institution}</p>
                                            <div className="flex items-center gap-3 mt-3">
                                                <Badge className="text-xs px-3 py-1.5 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-medium">{edu.year}</Badge>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Technical Expertise Card */}
                    <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-green-400 dark:border-gray-700 dark:hover:border-green-500 bg-white dark:bg-slate-900 shadow-lg lg:col-span-2">
                        <CardHeader className="pb-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg">
                                    <Code className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Technical Skills</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6 px-6 pb-6">
                            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
                                {technicalCompetencies.map((skillGroup, index) => (
                                    <div key={index} className="space-y-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`p-3 rounded-xl ${skillGroup.color} bg-opacity-20 text-white shadow-md`}>
                                                {skillGroup.icon}
                                            </div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-base">{skillGroup.title}</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill, skillIndex) => (
                                                <Badge key={skillIndex} className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 font-medium border border-gray-300 dark:border-gray-600">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Professional Services Card */}
                    <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-purple-400 dark:border-gray-700 dark:hover:border-purple-500 bg-white dark:bg-slate-900 shadow-lg">
                        <CardHeader className="pb-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg">
                                    <Award className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Achievements</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6 px-6 pb-6">
                            <div className="space-y-6">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="p-3 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300 shadow-md">
                                                {achievement.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2">{achievement.title}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{achievement.description}</p>
                                            <div className="flex items-center gap-3">
                                                <Badge className="text-xs px-3 py-1.5 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 font-medium">{achievement.issuer}</Badge>
                                                <Badge variant="outline" className="text-xs px-3 py-1.5 border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-400">{achievement.year}</Badge>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Experience Section */}
                <div className="mb-12 lg:mb-16">
                    <div className="text-center mb-8 lg:mb-10">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
                        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Hands-on experience building production-ready applications with modern technologies
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8">
                        {experience.map((exp, index) => (
                            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-orange-400 dark:border-gray-700 dark:hover:border-orange-500 bg-white dark:bg-slate-900 shadow-lg">
                                <CardHeader className="pb-4 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-900 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg flex items-center justify-center">
                                            <img src={exp.logo} alt="E-Sutra Technologies" className="w-8 h-8 rounded" />
                                        </div>
                                        <div className="flex-1">
                                            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</CardTitle>
                                            <p className="text-base text-gray-600 dark:text-gray-400 font-medium">{exp.company}</p>
                                            <div className="flex items-center gap-3 mt-2">
                                                <Badge className="text-xs px-3 py-1.5 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 font-medium">{exp.period}</Badge>
                                                <Badge variant="outline" className="text-xs px-3 py-1.5 border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-400">{exp.location}</Badge>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6 px-6 pb-6">
                                    <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                                    <div className="space-y-3">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <div key={achIndex} className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{achievement}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Projects Section */}
                <div className="mb-12 lg:mb-16">
                    <div className="text-center mb-8 lg:mb-10">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Full-stack applications showcasing modern development practices and scalable architecture
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        {projects.map((project, index) => (
                            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-teal-400 dark:border-gray-700 dark:hover:border-teal-500 bg-white dark:bg-slate-900 shadow-lg h-full">
                                <CardHeader className="pb-4 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-start gap-4">
                                        <div className={`p-4 rounded-xl ${project.color} bg-opacity-20 text-white shadow-md`}>
                                            {project.icon}
                                        </div>
                                        <div className="flex-1">
                                            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</CardTitle>
                                            <p className="text-base text-gray-600 dark:text-gray-400 font-medium">{project.role}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6 px-6 pb-6">
                                    <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                                    
                                    <div className="mb-6">
                                        <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-3">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, techIndex) => (
                                                <Badge key={techIndex} className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 font-medium border border-gray-300 dark:border-gray-600">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-3">Key Features</h4>
                                        <div className="space-y-2">
                                            {project.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Mission Section */}
                <div className="mb-12 lg:mb-16">
                    <div className="text-center mb-6 lg:mb-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-3 lg:mb-4">Mission & Vision</h2>
                        <p className="text-sm lg:text-base text-muted-foreground max-w-3xl mx-auto px-4 lg:px-0">
                            My mission is to transform ideas into powerful digital solutions through innovative web development
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                        {missions.map((mission, index) => (
                            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary dark:border-border dark:hover:border-primary dark:bg-card/80 dark:shadow-xl h-full">
                                <CardContent className="p-4 lg:p-6 text-center dark:bg-card/50">
                                    <div className={`inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-3 lg:mb-4 dark:bg-primary/20 dark:text-primary`}>
                                        {mission.icon}
                                    </div>
                                    <CardTitle className="text-lg lg:text-xl mb-2 lg:mb-3 dark:text-black">{mission.title}</CardTitle>
                                    <CardDescription className="text-sm lg:text-base leading-relaxed dark:text-blue-800">
                                        {mission.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <Badge className="px-4 py-2 bg-gradient-to-r from-primary to-primary-50 text-primary-foreground text-sm font-medium shadow-lg">
                        Let's Build Something Amazing Together
                    </Badge>
                </div>
            </div>
        </section>
    )
}

export default About