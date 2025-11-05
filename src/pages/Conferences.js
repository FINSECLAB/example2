import React from 'react';

const Conferences = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">학술대회</h1>
        
        <div className="subsection">
          <h3>참여 학술대회</h3>
          <div className="news-list">
            <div className="news-item">
              <div className="news-date">2024.12.20</div>
              <h4>국제 정보보안 학술대회</h4>
              <p>연구소에서 국제 정보보안 학술대회에 참여했습니다.</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.15</div>
              <h4>사이버보안 컨퍼런스</h4>
              <p>사이버보안 분야의 최신 동향을 논의했습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conferences;