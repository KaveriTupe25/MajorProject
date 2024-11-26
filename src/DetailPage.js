import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  1: {
    title: 'Insulin Pens',
    description: 'Insulin pens are user-friendly devices for injecting insulin conveniently.',
    image: 'https://via.placeholder.com/300',
  },
  2: {
    title: 'Blood Sugar Monitoring',
    description: 'Regular blood sugar monitoring helps in effective diabetes management.',
    image: 'https://via.placeholder.com/300',
  },
  3: {
    title: 'Healthy Diet Tips',
    description: 'Maintain a balanced diet to help manage diabetes.',
    image: 'https://via.placeholder.com/300',
  },
  4: {
    title: 'Fitness for Diabetics',
    description: 'Regular exercise helps stabilize blood sugar levels.',
    image: 'https://via.placeholder.com/300',
  },
};

const DetailPage = () => {
  const { id } = useParams();
  const info = data[id];

  if (!info) {
    return <p>Information not available.</p>;
  }

  return (
    <div style={{ display: 'flex', padding: '20px', gap: '20px' }}>
      <img src={info.image} alt={info.title} style={{ width: '300px', height: 'auto' }} />
      <div>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
      </div>
    </div>
  );
};

export default DetailPage;
