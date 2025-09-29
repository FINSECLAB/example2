import React from 'react';

const Conferences = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">학회 발표</h1>
        
        <div className="subsection">
          <h3>2024년 학회 발표</h3>
          <div className="conferences-list">
            <div className="conference-item">
              <h4>International Conference on Artificial Intelligence 2024</h4>
              <p className="presentation-title">"Novel Approaches to Quantum Machine Learning"</p>
              <p className="presenters">김교수, 박연구원</p>
              <p className="conference-info">2024년 6월, 서울, 한국</p>
            </div>
            <div className="conference-item">
              <h4>Materials Science Conference 2024</h4>
              <p className="presentation-title">"Sustainable Materials for Next-Generation Electronics"</p>
              <p className="presenters">이교수, 김연구원</p>
              <p className="conference-info">2024년 7월, 도쿄, 일본</p>
            </div>
            <div className="conference-item">
              <h4>Biotechnology World Congress 2024</h4>
              <p className="presentation-title">"Biomolecular Engineering for Therapeutic Applications"</p>
              <p className="presenters">최연구원, 한연구원</p>
              <p className="conference-info">2024년 8월, 보스턴, 미국</p>
            </div>
            <div className="conference-item">
              <h4>Environmental Science Summit 2024</h4>
              <p className="presentation-title">"Nanomaterials for Environmental Remediation"</p>
              <p className="presenters">정연구원, 한연구원</p>
              <p className="conference-info">2024년 9월, 베를린, 독일</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>2023년 학회 발표</h3>
          <div className="conferences-list">
            <div className="conference-item">
              <h4>Quantum Physics International Symposium 2023</h4>
              <p className="presentation-title">"Quantum Entanglement in Biological Systems"</p>
              <p className="presenters">김교수, 최연구원</p>
              <p className="conference-info">2023년 5월, 제네바, 스위스</p>
            </div>
            <div className="conference-item">
              <h4>AI and Machine Learning Conference 2023</h4>
              <p className="presentation-title">"AI-Driven Drug Discovery Platform"</p>
              <p className="presenters">박연구원, 최연구원</p>
              <p className="conference-info">2023년 10월, 런던, 영국</p>
            </div>
            <div className="conference-item">
              <h4>Nano Technology World Congress 2023</h4>
              <p className="presentation-title">"Advanced Nanomaterials for Energy Applications"</p>
              <p className="presenters">한연구원, 정연구원</p>
              <p className="conference-info">2023년 11월, 싱가포르</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>발표 통계</h3>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">🌍</div>
              <h4>국제 학회</h4>
              <p>국제 학회 발표 50회 이상<br />해외 학회 발표 30회 이상</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🏆</div>
              <h4>수상 실적</h4>
              <p>우수 발표상 15회 이상<br />최우수 논문상 5회 이상</p>
            </div>
            <div className="research-card">
              <div className="research-icon">📊</div>
              <h4>초청 발표</h4>
              <p>초청 발표 20회 이상<br />키노트 스피커 5회 이상</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🤝</div>
              <h4>협력 연구</h4>
              <p>공동 발표 30회 이상<br />국제 공동연구 15건 이상</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>주요 학회</h3>
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h4>자연과학</h4>
              <p>American Physical Society (APS)<br />International Union of Pure and Applied Chemistry (IUPAC)</p>
            </div>
            <div className="mission-card">
              <h4>공학 및 기술</h4>
              <p>Institute of Electrical and Electronics Engineers (IEEE)<br />International Conference on Machine Learning (ICML)</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>학회 주최</h3>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">🏢</div>
              <h4>국제 컨퍼런스</h4>
              <p>연간 2회 이상 국제 컨퍼런스 주최<br />전 세계 연구자 500명 이상 참여</p>
            </div>
            <div className="research-card">
              <div className="research-icon">📚</div>
              <h4>워크샵</h4>
              <p>분야별 전문 워크샵 개최<br />연구자 간 네트워킹 활성화</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🎓</div>
              <h4>교육 프로그램</h4>
              <p>대학원생 대상 교육 프로그램<br />연구 방법론 및 논문 작성법 교육</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🌐</div>
              <h4>온라인 세미나</h4>
              <p>월간 온라인 세미나 개최<br />해외 연구자와의 실시간 교류</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conferences;

