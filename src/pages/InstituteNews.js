import React from 'react';

const InstituteNews = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">연구소 소식</h1>
        
        <div className="subsection">
          <h3>최신 소식</h3>
          <div className="news-list">
            <div className="news-item">
              <div className="news-date">2024.12.20</div>
              <h4>연구 성과 발표</h4>
              <p>최신 연구 성과를 국제 학술지에 발표했습니다.</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.15</div>
              <h4>신입 연구원 합류</h4>
              <p>박사과정 신입 연구원이 연구소에 합류했습니다.</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.10</div>
              <h4>산학협력 프로젝트</h4>
              <p>기업과의 산학협력 프로젝트를 시작했습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteNews;