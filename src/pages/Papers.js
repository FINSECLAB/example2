import React from 'react';

const Papers = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">논문</h1>
        
        <div className="subsection">
          <h3>최근 발표 논문</h3>
          <div className="news-list">
            <div className="news-item">
              <div className="news-date">2024.12.20</div>
              <h4>네트워크 보안 기법 연구</h4>
              <p>IEEE Transactions on Information Forensics and Security</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.15</div>
              <h4>모바일 보안 프레임워크</h4>
              <p>ACM Computing Surveys</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.10</div>
              <h4>암호 알고리즘 최적화</h4>
              <p>Journal of Cryptology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Papers;