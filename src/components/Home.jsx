import React from 'react'

import profilebg from '../images/profile-bg.png';
import perc from '../images/perc.webp';
import cryptox from '../images/coinx.webp';
import ecomdj from '../images/ecom_dj.webp';

const Home = () => {
  return (
    <>
        <div className='home' id="home">
            <div className="headings">
                <div className="heading-name">
                    <h1>Hi, I'm Mithun</h1>
                    <p>Software Developer</p>
                </div>
                <div className="heading-img">
                    <img src={profilebg} alt="Mithun" />
                </div>
            </div>
        </div>
        <div className="about" id="about">
            <div className="about-heading">
                <h2>About Me</h2>
            </div>
            <p className='about-desc'>
                &emsp; Hi, I am Mithun Rathod, a software developer at Prisms Communications. 
                I have a passion for creating innovative solutions that improve the lives of others. 
                I have strong knowledge of PHP and MySQL, 
                along with experience working on a school ERP project 
                and currently developing an Event Management Project using PHP CodeIgniter4. 
                I am also exploring ReactJS to expand my skill set. 
                I graduated in 2023 from Dr. D. Y. Patil Institute of Technology, Pimpri, with a CGPA of 7.25. 
                I enjoy creating efficient and innovative solutions to solve real-world challenges.
            </p>
            <div className="about-resume">
                <a href="/files/Mithun%20R.pdf" download>
                    <button>Download Resume</button>
                </a>
            </div>
        </div>
        <div className="skills" id="skills">
            <div className="skills-heading">
                <h2>Skills</h2>
            </div>
            <div className="skills-div">
                <div className="html">
                    <img src="https://img.icons8.com/color/144/react-native.png" alt="" />
                    <p>React</p>
                </div>
                <div className="html">
                    <img src="https://img.icons8.com/fluency/500/mysql-logo.png" alt="" />
                    <p>MySQL</p>
                </div>
                <div className="html">
                    <img src="https://img.icons8.com/color/144/python.png" alt="" />
                    <p>Python</p>
                </div>
                <div className="html">
                    <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-color-tal-revivo.png" alt="" />
                    <p>JQuery</p>
                </div>
                <div className="html">
                    <img src="https://img.icons8.com/color/500/html-5--v1.png" alt="" />
                    <p>HTML</p>
                </div>
                <div className="html">
                    <img src="https://img.icons8.com/color/500/css3.png" alt="" />
                    <p>CSS</p>
                </div>
                <div className="html">
                    <img src="https://img.icons8.com/color/144/javascript.png" alt="" />
                    <p>JavaScript</p>
                </div>
                <div className="html">
                    <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-shadow-tal-revivo.png" alt="" />
                    <p>CodeIgniter</p>
                </div>
                <div className="html">
                    <img src="https://img.icons8.com/officel/500/php-logo.png" alt="" />
                    <p>PHP</p>
                </div>
                <div className="html">
                    <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-color-tal-revivo.png" alt="" />
                    <p>Django</p>
                </div>
                <div className="html">
                    <img src="https://img.icons8.com/color/144/joomla.png" alt="" />
                    <p>Joomla</p>
                </div>
            </div>
        </div>
        <div className="projects" id="projects">
            <div className="projects-heading">
                <h2>Projects</h2>
            </div>
            <div className="projects-div">
                <div className="project">
                    <a href="https://crypnext.netlify.app/" target='blank'>
                        <img src={cryptox} alt="" />
                        <p>CryptoInfo API <img src="https://img.icons8.com/ios-glyphs/30/react.png" alt="" /></p>
                    </a>
                </div>
                <div className="project">
                    <a href="https://mithunrr.github.io/cgpa-percentage/" target='blank'>
                        <img src={perc} alt="" />
                        <p>CGPA-Percentage <img src="https://img.icons8.com/ios/100/javascript-logo.png" alt="" /></p>
                    </a>
                </div>
                <div className="project">
                    <a href="https://github.com/MithunRR/eBhandar" target='blank'>
                        <img src={ecomdj} alt="" />
                        <p>Grocery Store <img src="https://img.icons8.com/material-outlined/24/django.png" alt="" /></p>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
