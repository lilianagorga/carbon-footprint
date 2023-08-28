import React from 'react';
import '../assets/styles/home.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to <span className='app-name'>Carbon Footprint</span></h1>
      <h2>your resource for calculating CO2 emissions and environmental impact. We're passionate about the environment and want to help you understand the significance of your actions on our planet's health.</h2>

      <h2>Why Should You Calculate CO2 Emissions?</h2>
      <p>Reducing CO2 emissions is crucial for slowing down climate change and preserving the environment for future generations. Here are some key statistics:</p>
        <ul>
          <li>CO2 emissions contribute to global warming and climate change.</li>
          <li>Transportation and energy consumption are major sources of emissions.</li>
          <li>By reducing emissions, we can enjoy cleaner air, a more stable climate, and healthier ecosystems.</li>
        </ul>
    </div>
  );
}

export default Home;