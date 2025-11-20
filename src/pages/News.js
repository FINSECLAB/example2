import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {
  return (
    <div className="page news-page">
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: 'var(--space-8)',
          marginTop: 'var(--space-8)'
        }}>
          <div className="home-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
              <h2 className="section-title small" style={{ marginBottom: 0 }}>Latest Activities</h2>
              <Link to="/announcements" className="text-link" style={{ fontSize: '0.9rem' }}>more</Link>
            </div>
            <div className="news-list">
              <div className="news-item">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. (09/2025)</p>
              </div>
              <div className="news-item">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. (09/2025)</p>
              </div>
              <div className="news-item">
                <p>When an unknown printer took a galley of type and scrambled it. (06/2025)</p>
              </div>
              <div className="news-item">
                <p>It has survived not only five centuries, but also the leap into electronic typesetting. (05/2025)</p>
              </div>
              <div className="news-item">
                <p>It was popularised in the 1960s with the release of Letraset sheets. (04/2025)</p>
              </div>
            </div>
          </div>
          <div className="home-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
              <h2 className="section-title small" style={{ marginBottom: 0 }}>NetLab News</h2>
              <Link to="/institute-news" className="text-link" style={{ fontSize: '0.9rem' }}>more</Link>
            </div>
            <div className="news-list">
              <div className="news-item">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. (04/2024)</p>
              </div>
              <div className="news-item">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. (05/2023)</p>
              </div>
              <div className="news-item">
                <p>When an unknown printer took a galley of type and scrambled it. (04/2023)</p>
              </div>
              <div className="news-item">
                <p>It has survived not only five centuries, but also the leap into electronic typesetting. (04/2023)</p>
              </div>
              <div className="news-item">
                <p>It was popularised in the 1960s with the release of Letraset sheets. (04/2023)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

