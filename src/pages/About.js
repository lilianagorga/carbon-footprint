import React from 'react';
import imageNasa1 from '../assets/img&video/img-nasa-1.jpeg';
import imageNasa2 from '../assets/img&video/img-nasa-2.jpeg';
import imageNasa3 from '../assets/img&video/img-nasa-3.jpeg';
import videoNasa1 from '../assets/img&video/video-nasa-1.mp4';
import '../assets/styles/about.css';

const About = () => {
  return (
    <div className='about-container'>
      <h1>Welcome to <span className='app-name'>Carbon Footprint</span></h1>
      <h2>Who We Are</h2>
      <p>
        Welcome to <span className='app-name'>Carbon Footprint</span>, your resource for calculating CO2 emissions and environmental impact. We're passionate about the environment and want to help you understand the significance of your actions on our planet's health.
      </p>

      <h2>Why Should You Calculate CO2 Emissions?</h2>
      <h3>General Questions</h3>
      <p>
        <strong>1. What is CO2 emissions calculation?</strong><br />
        CO2 emissions calculation is a process that allows you to assess your contribution to carbon dioxide emissions in the atmosphere through your daily activities.
      </p>
      <p>
        <strong>2. How does the application work?</strong><br />
        Our application provides you with a simple and intuitive way to calculate CO2 emissions generated by various activities, such as car travel, energy consumption, and more.
      </p>
      <p>
        <strong>3. What benefits does emissions reduction offer?</strong><br />
        Reducing CO2 emissions helps slow down climate change and preserve the environment for future generations. It can lead to cleaner air, a more stable climate, and healthier ecosystems.
      </p>
      <p>
        <strong>4. How can I contribute?</strong><br />
        By using the application, you can estimate your emissions and discover ways to make small changes to reduce them. Even small actions, when collective, make a significant difference.
      </p>
        <img src={imageNasa1} alt="" className='about-image'/>
        <img src={imageNasa2} alt="" className='about-image'/>
        <img src={imageNasa3} alt="" className='about-image'/>
      <video controls>
        <source src={videoNasa1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>Conclusion</h2>
      <p>
        We believe that understanding the impact of our actions is the first step toward a sustainable future. We're here to support you in your journey toward a more eco-friendly life. Thank you for being part of the change!
      </p>
    </div>
  )
}

export default About;