import React from 'react';
import imageNasa3 from '../assets/img/img-nasa-3.jpeg';
import imageNasa4 from '../assets/img/img-nasa-4.jpeg';
import videoNasa2 from '../assets/video/video-nasa-2.mp4';
import '../assets/styles/faq.scss';

const Faq = () => {
  return (
    <div className='faq-container'>
      <h3>General Questions</h3>
      <p>
        <strong>1. What is CO2 emissions calculation?</strong><br />
        CO2 emissions calculation is a process that allows you to assess your contribution to carbon dioxide emissions in the atmosphere through your daily activities.
      </p>
      <p>
        <strong>2. Why Should You Calculate CO2 Emissions?</strong><br />
        Reducing CO2 emissions is crucial for slowing down climate change and preserving the environment for future generations. Here are some key statistics:
      </p>
      <ul>
        <li>CO2 emissions contribute to global warming and climate change.</li>
        <li>Transportation and energy consumption are major sources of emissions.</li>
        <li>By reducing emissions, we can enjoy cleaner air, a more stable climate, and healthier ecosystems.</li>
      </ul>
      <p>
        <strong>3. What benefits does emissions reduction offer?</strong><br />
        Reducing CO2 emissions helps slow down climate change and preserve the environment for future generations. It can lead to cleaner air, a more stable climate, and healthier ecosystems.
      </p>
      <p>
        <strong>4. How can I contribute?</strong><br />
        By using the application, you can estimate your emissions and discover ways to make small changes to reduce them. Even small actions, when collective, make a significant difference.
      </p>
      <p>
        <strong>5. How Can <span className='app-name'>Carbon Footprint</span> Help You?</strong><br />
          Our application is designed to provide practical solutions for a more sustainable lifestyle:
      </p>
      <ul>
        <li>Plan eco-friendly travel by calculating the emissions of your trips.</li>
        <li>Understand your carbon footprint and discover ways to reduce it.</li>
        <li>Explore scenarios to see the impact of lifestyle changes on emissions.</li>
      </ul>
      <div>
        <div className='image'>
          <img src={imageNasa3} alt="NASA's Carbon Sleuth Mission" />
          <p>
          Global average carbon dioxide concentrations observed by NASA's Orbiting Carbon Observatory-2 (OCO-2) mission, collecting data from June 1st to June 15th, 2015. The comprehensive measurements of OCO-2 extend from Earth's surface to the upper atmosphere, shedding light on intricate patterns of carbon dioxide distribution. The data assist scientists in uncovering crucial insights into the terrestrial carbon cycle, providing answers to key questions about atmospheric carbon dioxide.
          </p>
        </div>
        <div className='image'>
          <img src={imageNasa4} alt="Global CO2 Levels" />
          <p>
          This illustration depicts how carbon is exchanged within Mars, involving its interior, surface rocks, polar caps, waters, and atmosphere. It also highlights a mechanism through which carbon is lost from the Martian atmosphere, affecting the isotopic ratio.

          Carbon dioxide (CO2) in Mars' atmosphere originates from the planet's mantle, released through volcanic activity or trapped in rocks crystallized from magma and later released. Upon entering the atmosphere, CO2 interacts with polar caps, transitioning from a gaseous to solid state. It can also dissolve in Martian waters, forming solid carbonates. The illustration portrays the loss of CO2 into space, mainly through ultraviolet photodissociation. This process breaks down CO2 molecules, releasing carbon atoms and influencing isotopic ratios. These complex interactions provide insights into the atmospheric dynamics of Mars.
          </p>
        </div>
        <div className='video'>
          <video controls>
            <source src={videoNasa2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>
            The oceans absorb greenhouse gases and heat from the atmosphere, mitigating the effects of human emissions of carbon dioxide. The Atlantic Meridional Overturning Circulation moves water from the Atlantic, absorbing greenhouse gases along the way and burying them deep near Greenland.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Faq;