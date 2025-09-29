import React from 'react';

const Papers = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">논문</h1>
        
        <div className="subsection">
          <h3>2024년 논문</h3>
          <div className="publications-list">
            <div className="publication-item">
              <h4>Quantum Computing Applications in Machine Learning</h4>
              <p className="authors">김교수, 이교수, 박연구원</p>
              <p className="journal">Nature Physics, 2024</p>
              <p className="description">양자 컴퓨팅을 활용한 머신러닝 알고리즘의 새로운 접근법을 제시한 연구</p>
            </div>
            <div className="publication-item">
              <h4>Advanced Materials for Sustainable Energy</h4>
              <p className="authors">이교수, 김연구원</p>
              <p className="journal">Science, 2024</p>
              <p className="description">지속가능한 에너지 생산을 위한 새로운 소재 개발 연구</p>
            </div>
            <div className="publication-item">
              <h4>Deep Learning Approaches to Climate Modeling</h4>
              <p className="authors">박연구원, 최연구원</p>
              <p className="journal">Nature Machine Intelligence, 2024</p>
              <p className="description">딥러닝을 활용한 기후 모델링의 정확도 향상 연구</p>
            </div>
            <div className="publication-item">
              <h4>Biomolecular Engineering for Therapeutic Applications</h4>
              <p className="authors">최연구원, 한연구원</p>
              <p className="journal">Nature Biotechnology, 2024</p>
              <p className="description">치료용 생체분자 공학 기술 개발 연구</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>2023년 논문</h3>
          <div className="publications-list">
            <div className="publication-item">
              <h4>Nanomaterials for Environmental Remediation</h4>
              <p className="authors">정연구원, 한연구원</p>
              <p className="journal">Environmental Science & Technology, 2023</p>
              <p className="description">환경 정화를 위한 나노소재 개발 및 응용 연구</p>
            </div>
            <div className="publication-item">
              <h4>Quantum Entanglement in Biological Systems</h4>
              <p className="authors">김교수, 최연구원</p>
              <p className="journal">Physical Review Letters, 2023</p>
              <p className="description">생물학적 시스템에서의 양자 얽힘 현상 연구</p>
            </div>
            <div className="publication-item">
              <h4>AI-Driven Drug Discovery Platform</h4>
              <p className="authors">박연구원, 최연구원</p>
              <p className="journal">Nature Medicine, 2023</p>
              <p className="description">인공지능 기반 신약 개발 플랫폼 구축 연구</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>논문 통계</h3>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">📊</div>
              <h4>총 논문 수</h4>
              <p>국제 학술지 150편 이상<br />국내 학술지 80편 이상</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🏆</div>
              <h4>Impact Factor</h4>
              <p>평균 Impact Factor 4.2<br />최고 Impact Factor 15.8</p>
            </div>
            <div className="research-card">
              <div className="research-icon">📈</div>
              <h4>인용 횟수</h4>
              <p>총 인용 횟수 2,500회 이상<br />연평균 인용 횟수 500회</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🔬</div>
              <h4>연구 분야</h4>
              <p>다양한 분야의 융합 연구<br />학제간 협력 연구 활발</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>주요 저널</h3>
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h4>자연과학</h4>
              <p>Nature, Science, Physical Review Letters<br />Nature Physics, Nature Chemistry</p>
            </div>
            <div className="mission-card">
              <h4>공학 및 기술</h4>
              <p>Nature Machine Intelligence, Nature Biotechnology<br />Environmental Science & Technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Papers;

