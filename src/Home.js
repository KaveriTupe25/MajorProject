import React from 'react';
import { useNavigate } from 'react-router-dom';
import insulin from './InsulinPen.jpg';
import sugar from './Blood Sugar Monitoring.jpg';
import health from './Healthy Diet Tips.jpg';
import fitness from './Fitness for Diabetics.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

const Home = () => {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div>
      {/* Centered Welcome Message */}
      <Navbar />
      <div className="welcome-section">
        <h1>Welcome to the Smart Insulin Calculator !!</h1>
      </div>

      {/* Expanded Informational Paragraph below the Welcome Message */}
      <div className="intro-section">
        <p>
          Our platform is designed to be a comprehensive resource for individuals managing diabetes, offering valuable insights and tools to make everyday health management simpler and more effective. Diabetes is a lifelong condition that requires careful monitoring of blood sugar levels, insulin doses, and dietary choices. With the right support, individuals can lead a healthy, fulfilling life.
        </p>
        <p>
          Our goal is to empower you with the knowledge and tools you need for optimal diabetes care. The Smart Insulin Calculator helps you calculate precise insulin doses based on your blood sugar levels and carb intake, reducing the guesswork in managing your condition. Additionally, our platform offers educational resources on the latest practices in diabetes management, from using insulin pens effectively to monitoring blood sugar levels and maintaining a balanced diet.
        </p>
        <p>
          Beyond calculations, we provide insights into healthy lifestyle choices tailored specifically for those with diabetes. You’ll find tips on creating a diabetes-friendly diet, fitness recommendations, and guidance on how to balance physical activity with medication for optimal control of your blood glucose levels. With our interactive tools and expert advice, we’re here to support you every step of the way on your journey to better health.
        </p>

        <div className="start-button-container">
          <button className="start-button" onClick={() => navigate('/dashboard')}>
            Start
          </button>
        </div>
        
      </div>
      
      {/* Additional Information Section */}
      <div className="info-section">
        <h2>Learn More About Diabetes Management</h2>
        <div className="info-cards">
          {/* Info Cards */}
          <div className="info-card">
            <img src={insulin} alt="Insulin Pen Icon" className="info-icon" />
            <h3>Insulin Pens</h3>
            <p>Insulin pens are a convenient and easy-to-use tool for delivering insulin. They help users maintain precise control over their insulin doses, which is critical for managing blood sugar levels effectively.</p>
          </div>
          <div className="info-card">
            <img src={sugar} alt="Blood Sugar Icon" className="info-icon" />
            <h3>Blood Sugar Monitoring</h3>
            <p>Regular monitoring of blood sugar is essential for individuals with diabetes. Accurate tracking enables timely adjustments in medication, diet, and lifestyle, reducing complications and improving quality of life.</p>
          </div>
          <div className="info-card">
            <img src={health} alt="Diet Icon" className="info-icon" />
            <h3>Healthy Diet Tips</h3>
            <p>Following a balanced and diabetes-friendly diet is important. Our guide offers meal planning ideas, food recommendations, and recipes that help manage blood glucose levels effectively.</p>
          </div>
          <div className="info-card">
            <img src={fitness} alt="Fitness Icon" className="info-icon" />
            <h3>Fitness for Diabetics</h3>
            <p>Exercise is key to managing diabetes. Our fitness recommendations are tailored to support physical activity safely, helping control blood sugar and maintain a healthy weight.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Home;
