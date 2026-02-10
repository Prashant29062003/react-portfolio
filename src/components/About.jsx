import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
    TrendingUp
} from "lucide-react"
import pic from "../assets/img/portfolio.jpg"

function About() {
    const education = [
        {
            degree: "B.Tech in Electronics & Communication Engineering",
            institution: "Chandigarh Engineering College",
                    year: "2026",
            icon: <GraduationCap className="h-5 w-5" />,
            color: "bg-blue-500"
        },
        {
            degree: "High School",
            institution: "Kendriya Vidyalaya No. 3, Ambala Cantt",
                    year: "2022",
            icon: <GraduationCap className="h-5 w-5" />,
            color: "bg-blue-500"
        }
    ];

    const skills = [
        {
            title: "Frontend Development",
            items: ["React.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
            icon: <Code className="h-5 w-5" />,
            color: "bg-blue-500"
        },
        {
            title: "Backend Development", 
            items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
            icon: <Database className="h-5 w-5" />,
            color: "bg-green-500"
        },
        {
            title: "DevOps & Tools",
            items: ["Git", "GitHub", "Docker", "AWS"],
            icon: <Cloud className="h-5 w-5" />,
            color: "bg-orange-500"
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
                    <div className="relative inline-block">
                        <Avatar className="h-20 w-20 sm:h-24 sm:w-24 ring-4 ring-border/20 shadow-xl mb-4 sm:mb-6">
                            <AvatarImage src={pic} alt="Prashant Kumar" className="object-cover" />
                            <AvatarFallback className="text-lg sm:text-xl sm:text-2xl font-bold bg-gradient-to-br from-primary to-primary-50 text-primary-foreground">PK</AvatarFallback>
                        </Avatar>
                        <Badge className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs sm:text-xs font-medium shadow-md">
                            Open to Work
                        </Badge>
                    </div>
                    
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                        Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-primary-50 bg-clip-text text-transparent font-semibold">Prashant Kumar</span>
                    </h1>
                    
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                        Passionate web developer with 1.5+ years of experience in the MERN stack. 
                        I specialize in building dynamic, responsive applications that blend creativity with seamless functionality.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
                    {/* Education Card */}
                    <Card className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary dark:border-border dark:hover:border-primary">
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary">
                                    <GraduationCap className="h-5 w-5" />
                                </div>
                                <CardTitle className="text-lg text-foreground dark:text-green-500">Education</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 dark:bg-muted/20">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className={`p-2 rounded-lg ${edu.color} bg-opacity-20 text-muted-foreground dark:text-muted-foreground`}>
                                                {edu.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-foreground text-sm mb-2 dark:text-black">{edu.degree}</h4>
                                            <p className="text-xs text-muted-foreground dark:text-blue-800 mb-3">{edu.institution}</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <Badge variant="secondary" className="text-xs dark:bg-secondary dark:text-secondary-foreground px-3 py-1">{edu.year}</Badge>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Skills Grid */}
                    <Card className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary dark:border-border dark:hover:border-primary lg:col-span-2">
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary">
                                    <Code className="h-5 w-5" />
                                </div>
                                <CardTitle className="text-lg text-foreground dark:text-foreground">Technical Skills</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                                {skills.map((skillGroup, index) => (
                                    <div key={index} className="space-y-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className={`p-1.5 rounded ${skillGroup.color} bg-opacity-20 text-white dark:bg-opacity-30`}>
                                                {skillGroup.icon}
                                            </div>
                                            <h4 className="font-semibold text-foreground text-sm dark:text-foreground">{skillGroup.title}</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {skillGroup.items.map((skill, skillIndex) => (
                                                <Badge key={skillIndex} variant="secondary" className="text-xs dark:bg-secondary dark:text-secondary-foreground">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Achievements Card */}
                    <Card className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary dark:border-border dark:hover:border-primary">
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary">
                                    <Award className="h-5 w-5" />
                                </div>
                                <CardTitle className="text-lg">Achievements</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="space-y-4">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 dark:bg-muted/20">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="p-1.5 rounded bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary">
                                                {achievement.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-foreground text-sm mb-1 dark:text-foreground">{achievement.title}</h4>
                                            <p className="text-xs text-muted-foreground mb-2 dark:text-muted-foreground">{achievement.description}</p>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="secondary" className="text-xs dark:bg-secondary dark:text-secondary-foreground">{achievement.issuer}</Badge>
                                                <Badge variant="outline" className="text-xs dark:border-border dark:text-border">{achievement.year}</Badge>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
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
                            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary dark:border-border dark:hover:border-primary h-full">
                                <CardContent className="p-4 lg:p-6 text-center">
                                    <div className={`inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-3 lg:mb-4 dark:bg-primary/20 dark:text-primary`}>
                                        {mission.icon}
                                    </div>
                                    <CardTitle className="text-lg lg:text-xl mb-2 lg:mb-3">{mission.title}</CardTitle>
                                    <CardDescription className="text-sm lg:text-base leading-relaxed dark:text-muted-foreground">
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