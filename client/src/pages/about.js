import React from 'react';
import golfImage from '../images/brandon.jpg';

function About() {
  return (
    <div className="bg-white p-10 md:p-20">
      <div className="max-w-4xl mx-auto">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={golfImage} alt="Golf Course" className="w-full rounded-md shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="mb-4">
              As an aspiring full stack web developer, I have always been passionate about creating web applications that provide value to people. However, when I'm not coding, you can find me out on the golf course, enjoying the memories made with friends and strangers alike.
            </p>
            <p className="mb-4">
              My journey in web development started in April 2022, when I decided to enroll in the University of Arizona Full Stack Coding bootcamp. During the bootcamp, I learned the MERN stack and many other programming technologies that have helped me hone and grow my skills as a developer.
            </p>
            <p>
              With my newfound knowledge and passion for web development, I am excited to create applications that bring people together, whether it's on the golf course or through the power of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;