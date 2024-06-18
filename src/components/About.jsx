import React from 'react'

function About() {
  return (
    <>
        <div name="About" className="about max-w-screen-2xl container mx-auto px-4 md:px-20 my-12 z-10">
            <h1 className='font-bold text-2xl mb-5'>Abo<span className='text-red-600'>ut.</span></h1>
            <p>
            Hello, I'm Prashant Kumar, a passionate web developer, a very good experince in the MERN (MongoDB, Express.js, React.js, Node.js) stack. With a robust portfolio showcasing 1.5 years of experience, I've crafted dynamic and responsive websites that blend creativity with seamless functionality.
            <br />
            From e-commerce platforms to interactive web applications, my journey in web development has been marked by creating engaging user interfaces with React.js. Each project reflects my dedication to delivering clean code and intuitive user experiences.
            </p>
            <div className="education mt-5">
                <h2 className='text-red-500 font-semibold text-xl'>Education & Training</h2>
                <span>
                    ~ Btech Electronics and Communication Engineering, Chandigargh Engineering College, 2026 <br /> ~ High School, Kendriya Vidyalaya No. 3 , Ambala Cantt, Haryana, 2022.
                </span>
            </div>
            <div className="skills mt-5">
                <h2 className='text-red-500 font-semibold text-xl'>Skills & Experties</h2>
                <div className='mb-4 mt-2'>
                    <h3 className='font-semibold'>Front-End Development:</h3>
                    <ul>
                        <li className='list-item list-disc ml-7'>Proficient in HTML5, CSS3, JavaScript (ES6+)</li>
                        <li className='list-item list-disc ml-7'>Expertise in React.js for building dynamic and responsive user interfaces</li>
                        <li className='list-item list-disc ml-7'>Experience with Redux for state management in large-scale applications</li>
                        <li className='list-item list-disc ml-7'>Responsive design principles using frameworks like Bootstrap or Material-UI</li>
                    </ul>
                </div>
                <div className='mb-4'>
                    <h3 className='font-semibold'>Database Management:</h3>
                    <ul>
                        <li className='list-item list-disc ml-7'>Solid understanding of MongoDB for NoSQL database solutions</li>
                        <li className='list-item list-disc ml-7'>Experience in schema design, querying, and indexing for performance optimization</li>
                    </ul>
                </div>
                <div className='mb-4'>
                    <h3 className='font-semibold'>Additional Skills:</h3>
                    <ul>
                        <li className='list-item list-disc ml-7'>Version control with Git and GitHub for collaborative development</li>
                        <li className='list-item list-disc ml-7'>Deployment and hosting on platforms like AWS, Heroku, or Netlify</li>
                    </ul>
                </div>
                <div className='mb-4'>
                    <h3 className='font-semibold'>Industry Knowledge:</h3>
                    <ul>
                        <li className='list-item list-disc ml-7'>E-commerce platforms</li>
                        <li className='list-item list-disc ml-7'>Content management systems</li>
                        <li className='list-item list-disc ml-7'>Custom web applications tailored to specific business needs</li>
                    </ul>
                </div>
            </div>
            <div className="professional mt-5">
                <h2 className='text-red-500 font-semibold text-xl'>Professional Experience</h2>
                <div>
                    ~ Student.
                </div>
            </div>
            <div className="education mt-5">
                <h2 className='text-red-500 font-semibold text-xl'>Achivement & Awords</h2>
                <div>
                    <h3 className='font-semibold'>Technical Certifications</h3>
                    <ul>
                        <li className='list-item list-disc ml-7'><span className='font-bold'>Web Designing</span> | W3School | 2023: whole frontend including HTML, CSS, JavaScript.</li>
                        <li className='list-item list-disc ml-7'><span className='font-semibold'>ReactJs</span> | FreeCodeCamp | Year: Brief study of ReactJs.</li>
                    </ul>



                </div>
            </div>
            <div className="education mt-5">
                <h2 className='text-red-500 font-semibold text-xl'>Mission Statements</h2>
                <div>
                    <ol>
                        <li className='list-decimal ml-4 font-semibold'>Empowering Businesses Through Innovative Web Solutions
                            <ul>
                                <li className='ml-4 font-normal'>"I strive to empower businesses by crafting innovative web solutions using the MERN stack. My mission is to deliver high-quality, scalable applications that drive growth and enhance user experiences."</li>
                            </ul>
                        </li>
                        <li className='list-decimal ml-4 font-semibold'>Creating Seamless Digital Experiences
                            <ul>
                                <li className='ml-4 font-normal'>"My mission is to create seamless digital experiences through expertly crafted web applications. By leveraging the power of MongoDB, Express.js, React.js, and Node.js, I aim to transform ideas into impactful solutions that exceed client expectations."</li>
                            </ul>
                        </li>
                        <li className='list-decimal ml-4 font-semibold'>Driving Digital Transformation with Cutting-Edge Technology
                            <ul>
                                <li className='ml-4 font-normal'>"I am dedicated to driving digital transformation through cutting-edge technology and a deep understanding of the MERN stack. My mission is to build robust, scalable applications that streamline processes, optimize performance, and propel businesses forward."</li>
                            </ul>
                        </li>
                        <li className='list-decimal ml-4 font-semibold'>Building Tomorrow's Web Today
                            <ul>
                                <li className='ml-4 font-normal'>"With a passion for innovation and a commitment to excellence, my mission is to build tomorrow's web today. I embrace challenges, harnessing the full potential of MongoDB, Express.js, React.js, and Node.js to create dynamic and future-proof web solutions."</li>
                            </ul>
                        </li>
                        <li className='list-decimal ml-4 font-semibold'>Crafting User-Centric Applications for Every Need
                            <ul>
                                <li className='ml-4 font-normal'>"My mission is to craft user-centric applications tailored to meet diverse business needs. By combining creativity with technical expertise in the MERN stack, I aim to deliver intuitive, responsive, and impactful digital solutions."</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </>
  )
}

export default About