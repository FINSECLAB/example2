import React from 'react';

const History = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">연혁</h1>
        
        <div className="subsection">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h4>연구소 설립</h4>
                <p>혁신적인 연구를 위한 연구소 설립 및 초기 인프라 구축</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h4>첫 번째 연구 프로젝트 시작</h4>
                <p>국가 R&D 프로젝트 수주 및 본격적인 연구 활동 시작</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h4>연구팀 확장</h4>
                <p>박사급 연구원 5명, 석사급 연구원 10명으로 연구팀 확장</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h4>연구 성과 인정</h4>
                <p>국제 학술지 논문 게재 및 특허 출원, 연구 성과 인정</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>국제 협력 확대</h4>
                <p>해외 대학과의 공동연구 프로젝트 시작 및 국제 컨퍼런스 주최</p>
              </div>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>주요 성과</h3>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">📊</div>
              <h4>논문 게재</h4>
              <p>국제 학술지 50편 이상 게재</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🏆</div>
              <h4>수상 실적</h4>
              <p>국내외 학술상 10회 이상 수상</p>
            </div>
            <div className="research-card">
              <div className="research-icon">💡</div>
              <h4>특허 출원</h4>
              <p>국내외 특허 20건 이상 출원</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🤝</div>
              <h4>산학협력</h4>
              <p>기업과의 공동연구 프로젝트 15건 이상</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;

