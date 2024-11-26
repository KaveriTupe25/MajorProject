import React, { useState } from 'react';
import './App.css';
import './Dashboard.css';
import Navbar from './Navbar'; // Import Navbar
import Footer from './Footer'; // Import Footer

const Dashboard = () => {
  const [sugarLevel, setSugarLevel] = useState('');
  const [foodQuantity, setFoodQuantity] = useState('');
  const [totalInsulin, setTotalInsulin] = useState(0);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isImageCaptured, setIsImageCaptured] = useState(false);

  const handleCalculateInsulin = () => {
    const insulin = (parseFloat(sugarLevel) - 100) / 50 + parseFloat(foodQuantity) * 0.1;
    setTotalInsulin(insulin > 0 ? insulin.toFixed(2) : 0);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`File uploaded: ${file.name}`);
    }
  };

  const handleCaptureImage = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      video.play();

      // Delay to allow proper video feed initialization
      setTimeout(() => {
        // Create a canvas to capture the frame
        const canvas = document.createElement('canvas');
        canvas.width = 640;
        canvas.height = 480;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/png');
        setCapturedImage(imageData);
        setIsImageCaptured(true);

        // Stop the video stream after capturing
        stream.getTracks().forEach((track) => track.stop());
        video.remove();
      }, 2000); // Delay of 3 second
    } catch (error) {
      alert('Failed to access camera: ' + error.message);
    }
  };

  const handleConfirmImage = () => {
    alert('Image confirmed!');
    // Add logic for saving or using the captured image
  };

  const handleRetakeImage = () => {
    setCapturedImage(null);
    setIsImageCaptured(false);
  };

  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      <div className="dashboard-container">
        <h1>Insulin Calculator</h1>

        <div className="input-section">
          <label>
            Enter Your Current Sugar Level (mg/dL):
            <input
              type="number"
              value={sugarLevel}
              onChange={(e) => setSugarLevel(e.target.value)}
              placeholder="e.g., 150"
            />
          </label>

          <label className="upload-label">
            Upload File:
            <input type="file" onChange={handleFileUpload} />
          </label>

          <div className="file-section">
            {!isImageCaptured && (
              <button className="capture-button" onClick={handleCaptureImage}>
                Capture Image
              </button>
            )}
          </div>

          <label>
            Enter Quantity of Food Items (in grams):
            <input
              type="number"
              value={foodQuantity}
              onChange={(e) => setFoodQuantity(e.target.value)}
              placeholder="e.g., 50"
            />
          </label>
        </div>

        {capturedImage && isImageCaptured && (
          <div className="captured-image">
            <h3>Captured Image:</h3>
            <img src={capturedImage} alt="Captured" />
            <div className="image-options">
              <button className="confirm-button" onClick={handleConfirmImage}>
                Confirm Image
              </button>
              <button className="retake-button" onClick={handleRetakeImage}>
                Retake Image
              </button>
            </div>
          </div>
        )}

        <div className="output-section">
          <button className="calculate-button" onClick={handleCalculateInsulin}>
            Calculate Insulin
          </button>
          <h2>Total Insulin Required: {totalInsulin} units</h2>
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
};

export default Dashboard;
