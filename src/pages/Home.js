import React from 'react';
import '../assets/styles/home.css';
import imageNasa1 from '../assets/img/img-nasa-1.jpeg';
import imageNasa2 from '../assets/img/img-nasa-2.jpeg';
import videoNasa from '../assets/video/video-nasa.mp4';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to <span className='app-name'>Carbon Footprint</span></h1>
      <h2>What is <span className='app-name'>Carbon Footprint</span>?</h2>
      <p>
        <span className='app-name'>Carbon Footprint</span> is your resource for calculating CO2 emissions and environmental impact. We're passionate about the environment and want to help you understand the significance of your actions on our planet's health.
      </p>
      <h2>How does the application work?</h2>
      <p>
        Our application provides you with a simple and intuitive way to calculate CO2 emissions generated by various activities, such as car travel, energy consumption, and more.
      </p>
      <h2>Join the Movement</h2>
      <p>
        By understanding your carbon footprint, you take a step toward a more sustainable lifestyle. Small actions can lead to significant changes. Join us in creating a better future for our planet.
      </p>
      <div>
        <div className='image'>
          <img src={imageNasa1} alt="Concept Art: Orbiting Carbon Observatory"/>
          <p>Artist Concept of the Orbiting Carbon Observatory</p>
        </div>
        <div className='image'>
          <img src={imageNasa2} alt="Carbon Processes on Mars"/>
          <p>
            Global atmospheric carbon dioxide concentrations as recorded by NASA's Orbiting Carbon Observatory-2 from October 1 to November 11. The measurements reveal the dynamic behavior of carbon dioxide in Earth's atmosphere, offering insights into its distribution and variation.
          </p>
        </div>
        <div className='video'>
          <video controls>
            <source src={videoNasa} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>
            Carbon dioxide plays a crucial role in the Earth's climate system, contributing to the retention of heat in the atmosphere. This gas is released from various human activities, such as the burning of fossil fuels, and its concentrations fluctuate seasonally.

            Using data collected from NASA's Orbiting Carbon Observatory (OCO-2) satellite, scientists have developed a model that simulates the behavior of carbon in the atmosphere between September 1, 2014, and August 31, 2015.

            These models enhance our understanding of carbon dynamics and enable predictions about regions with high or low carbon dioxide concentrations based on terrestrial activities.
          </p>
        </div>
      </div>
      <p className="conclusion">
        We believe that understanding the impact of our actions is the first step toward a sustainable future. We're here to support you in your journey toward a more eco-friendly life. Thank you for being part of the change! 
        Sources: <a href="https://img.nasa.gov" target="_blank" rel="noopener noreferrer">img.nasa.gov</a>. 
        Inspired by NASA's images and mission, we hope this application serves as a source of inspiration to make a positive impact on our environment.
      </p>
    </div>
  );
}

export default Home;