import React from 'react';

const ResearchAreas = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">주요 연구 분야</h1>
        
        <div className="subsection">
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">🔬</div>
              <h4>기초과학 연구</h4>
              <p>물리학, 화학, 생물학 등 기초과학 분야의 혁신적 연구를 통해 새로운 과학적 지식을 창출합니다.</p>
            </div>
            <div className="research-card">
              <div className="research-icon">💻</div>
              <h4>인공지능</h4>
              <p>머신러닝, 딥러닝, 자연어처리 등 AI 기술을 연구하여 실생활에 적용 가능한 솔루션을 개발합니다.</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🌱</div>
              <h4>환경과학</h4>
              <p>지속가능한 발전을 위한 환경 기술 연구를 통해 미래 세대를 위한 깨끗한 환경을 조성합니다.</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🧬</div>
              <h4>생명과학</h4>
              <p>바이오테크놀로지 및 의생명과학 연구를 통해 인간의 건강과 삶의 질 향상에 기여합니다.</p>
            </div>
            <div className="research-card">
              <div className="research-icon">⚡</div>
              <h4>에너지 기술</h4>
              <p>신재생 에너지 및 에너지 효율성 향상 기술을 연구하여 지속가능한 에너지 시스템을 구축합니다.</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🔬</div>
              <h4>나노기술</h4>
              <p>나노 소재 및 나노 기술을 활용한 혁신적인 제품 개발과 응용 기술을 연구합니다.</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>연구 방법론</h3>
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h4>실험적 접근</h4>
              <p>체계적인 실험을 통해 가설을 검증하고 새로운 발견을 도출합니다.</p>
            </div>
            <div className="mission-card">
              <h4>이론적 분석</h4>
              <p>수학적 모델링과 이론적 분석을 통해 복잡한 현상을 이해하고 설명합니다.</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>연구 시설</h3>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">🏢</div>
              <h4>연구실</h4>
              <p>최신 장비를 갖춘 전문 연구실 20개 이상 운영</p>
            </div>
            <div className="research-card">
              <div className="research-icon">💻</div>
              <h4>컴퓨팅 센터</h4>
              <p>고성능 컴퓨팅 시스템을 통한 대용량 데이터 처리</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🔬</div>
              <h4>분석 장비</h4>
              <p>최첨단 분석 장비를 통한 정밀 측정 및 분석</p>
            </div>
            <div className="research-card">
              <div className="research-icon">📚</div>
              <h4>도서관</h4>
              <p>전문 서적과 데이터베이스를 갖춘 연구 지원 시설</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchAreas;

