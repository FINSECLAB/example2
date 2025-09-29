import React from 'react';

const InstituteNews = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">연구소 소식</h1>
        
        <div className="subsection">
          <div className="news-list">
            <div className="news-item">
              <div className="news-date">2024.12.20</div>
              <h4>국제 학술지 논문 게재 성과</h4>
              <p>김교수팀의 연구 논문이 Nature Physics에 게재되었습니다. 이 논문은 양자 컴퓨팅을 활용한 머신러닝 알고리즘의 새로운 접근법을 제시한 연구로, 국제적으로 주목받고 있습니다.</p>
              <p><strong>논문 제목:</strong> "Quantum Computing Applications in Machine Learning"</p>
              <p><strong>게재지:</strong> Nature Physics, 2024</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.18</div>
              <h4>연구비 지원 확정</h4>
              <p>국가 R&D 프로젝트로 5억원의 연구비 지원이 확정되었습니다. 이 연구비는 인공지능 기반 신약 개발 플랫폼 구축 연구에 사용될 예정입니다.</p>
              <p><strong>연구비 규모:</strong> 5억원</p>
              <p><strong>연구 기간:</strong> 2025.01 ~ 2027.12</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.15</div>
              <h4>국제 컨퍼런스 발표</h4>
              <p>연구소 연구진이 국제 학술대회에서 우수 발표상을 수상했습니다. 이번 수상은 연구소의 연구 성과가 국제적으로 인정받고 있음을 보여줍니다.</p>
              <p><strong>수상자:</strong> 박연구원, 최연구원</p>
              <p><strong>학회명:</strong> International Conference on AI 2024</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.10</div>
              <h4>해외 대학과의 협력 연구 시작</h4>
              <p>미국 MIT와의 공동연구 프로젝트가 시작되었습니다. 이 프로젝트는 양자역학과 인공지능의 융합 연구로, 3년간 진행될 예정입니다.</p>
              <p><strong>협력 기관:</strong> MIT (미국)</p>
              <p><strong>연구 주제:</strong> Quantum AI</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.05</div>
              <h4>특허 출원 성과</h4>
              <p>연구소에서 개발한 나노소재 기술에 대한 특허가 출원되었습니다. 이 특허는 환경 정화 기술에 활용될 수 있는 혁신적인 나노소재 개발 기술입니다.</p>
              <p><strong>특허 제목:</strong> "환경 정화용 나노소재 및 제조방법"</p>
              <p><strong>출원 번호:</strong> 10-2024-0123456</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.11.30</div>
              <h4>연구소 확장 계획</h4>
              <p>연구소의 연구 활동 확장에 따라 새로운 연구실과 장비를 추가할 예정입니다. 이를 통해 더 많은 연구자들이 함께 연구할 수 있는 환경이 조성됩니다.</p>
              <p><strong>확장 규모:</strong> 연구실 10개 추가</p>
              <p><strong>완공 예정:</strong> 2025.06</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>연구 성과</h3>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">📊</div>
              <h4>논문 게재</h4>
              <p>2024년 국제 학술지 25편 게재<br />평균 Impact Factor 4.5</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🏆</div>
              <h4>수상 실적</h4>
              <p>국내외 학술상 8회 수상<br />우수 연구자상 3회</p>
            </div>
            <div className="research-card">
              <div className="research-icon">💡</div>
              <h4>특허 출원</h4>
              <p>국내외 특허 15건 출원<br />기술이전 5건 성사</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🤝</div>
              <h4>산학협력</h4>
              <p>기업과의 공동연구 10건<br />기술이전 계약 5건</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>국제 교류</h3>
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h4>해외 협력</h4>
              <p>미국 MIT, 영국 Cambridge 대학<br />일본 Tokyo 대학과의 공동연구</p>
            </div>
            <div className="mission-card">
              <h4>국제 컨퍼런스</h4>
              <p>연간 20회 이상 국제 학회 참여<br />해외 연구자와의 네트워킹</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>연구소 발전 계획</h3>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">🏢</div>
              <h4>시설 확장</h4>
              <p>연구실 10개 추가<br />최신 장비 도입</p>
            </div>
            <div className="research-card">
              <div className="research-icon">👥</div>
              <h4>인력 확충</h4>
              <p>연구원 20명 추가 채용<br />해외 우수 인재 유치</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🌍</div>
              <h4>국제화</h4>
              <p>해외 연구소 설립<br />국제 공동연구 확대</p>
            </div>
            <div className="research-card">
              <div className="research-icon">📈</div>
              <h4>연구 성과</h4>
              <p>논문 게재 목표 50편<br />특허 출원 목표 30건</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteNews;

