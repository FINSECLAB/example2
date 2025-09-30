import React from 'react';

const ResearchAreas = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">연구 분야</h1>
        
        <div className="subsection">
          <h3>주요 연구 분야</h3>
          <div className="research-grid">
            <div className="research-card">
              <h4>네트워크 보안</h4>
              <p>네트워크 보안 기술 및 프로토콜 연구</p>
            </div>
            <div className="research-card">
              <h4>암호학</h4>
              <p>암호 알고리즘 및 프로토콜 연구</p>
            </div>
            <div className="research-card">
              <h4>시스템 보안</h4>
              <p>운영체제 및 시스템 보안 연구</p>
            </div>
            <div className="research-card">
              <h4>응용 보안</h4>
              <p>웹 보안 및 모바일 보안 연구</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchAreas;