import React from 'react';

const History = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">연혁</h1>
        
        <div className="subsection">
          <h3>연구소 연혁</h3>
          <div className="news-list">
            <div className="news-item">
              <div className="news-date">2020</div>
              <h4>연구소 설립</h4>
              <p>정보보호연구소가 정식으로 설립되었습니다.</p>
            </div>
            <div className="news-item">
              <div className="news-date">2021</div>
              <h4>첫 번째 연구 프로젝트</h4>
              <p>국가연구개발과제에 선정되어 연구를 시작했습니다.</p>
            </div>
            <div className="news-item">
              <div className="news-date">2022</div>
              <h4>국제 학술대회 개최</h4>
              <p>첫 번째 국제 학술대회를 성공적으로 개최했습니다.</p>
            </div>
            <div className="news-item">
              <div className="news-date">2023</div>
              <h4>연구실 확장</h4>
              <p>연구 인력 확충 및 연구실 시설을 확장했습니다.</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024</div>
              <h4>현재</h4>
              <p>지속적인 연구 활동과 교육을 진행하고 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;