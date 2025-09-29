import React from 'react';

const Vision = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">비전 및 미션</h1>
        
        <div className="subsection">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h4>비전</h4>
              <p>세계 최고 수준의 연구 성과를 통해 인류의 발전에 기여하는 연구소</p>
            </div>
            <div className="mission-card">
              <h4>미션</h4>
              <p>창의적이고 혁신적인 연구를 통해 새로운 지식을 창출하고, 이를 사회에 기여</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>핵심 가치</h3>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">🔬</div>
              <h4>창의성</h4>
              <p>기존의 틀을 벗어나 새로운 아이디어와 혁신적인 접근법을 추구합니다.</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🤝</div>
              <h4>협력</h4>
              <p>다양한 분야의 전문가들과의 협력을 통해 시너지를 창출합니다.</p>
            </div>
            <div className="research-card">
              <div className="research-icon">📈</div>
              <h4>성장</h4>
              <p>지속적인 학습과 발전을 통해 연구 역량을 향상시킵니다.</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🌍</div>
              <h4>사회 기여</h4>
              <p>연구 성과를 통해 인류의 복지와 사회 발전에 기여합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;

