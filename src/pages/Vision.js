import React from 'react';

const Vision = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">비전</h1>
        
        <div className="subsection">
          <h3>연구소 비전</h3>
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h4>비전</h4>
              <p>정보보안 분야의 세계적 연구소로 성장하여<br />국가 정보보안 기술 발전에 기여</p>
            </div>
            <div className="mission-card">
              <h4>미션</h4>
              <p>창의적이고 실용적인 보안 기술 연구를 통해<br />안전한 디지털 사회 구현</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>핵심 가치</h3>
          <div className="research-grid">
            <div className="research-card">
              <h4>창의성</h4>
              <p>혁신적인 연구 아이디어 개발</p>
            </div>
            <div className="research-card">
              <h4>우수성</h4>
              <p>최고 수준의 연구 품질 추구</p>
            </div>
            <div className="research-card">
              <h4>협력</h4>
              <p>국내외 연구기관과의 협력</p>
            </div>
            <div className="research-card">
              <h4>실용성</h4>
              <p>실제 적용 가능한 연구 성과</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;