import React from 'react';

const Faculty = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">교수진/연구원</h1>
        
        <div className="subsection">
          <div className="members-grid">
            <div className="member-card">
              <div className="member-photo">
                <div className="photo-placeholder">👨‍🔬</div>
              </div>
              <h4>김교수</h4>
              <p className="member-title">연구소장</p>
              <p className="member-field">물리학</p>
              <p className="member-description">양자역학 및 고체물리학 전문가</p>
            </div>
            <div className="member-card">
              <div className="member-photo">
                <div className="photo-placeholder">👩‍🔬</div>
              </div>
              <h4>이교수</h4>
              <p className="member-title">부연구소장</p>
              <p className="member-field">화학</p>
              <p className="member-description">유기화학 및 나노소재 전문가</p>
            </div>
            <div className="member-card">
              <div className="member-photo">
                <div className="photo-placeholder">👨‍💻</div>
              </div>
              <h4>박연구원</h4>
              <p className="member-title">선임연구원</p>
              <p className="member-field">인공지능</p>
              <p className="member-description">머신러닝 및 딥러닝 전문가</p>
            </div>
            <div className="member-card">
              <div className="member-photo">
                <div className="photo-placeholder">👩‍💻</div>
              </div>
              <h4>최연구원</h4>
              <p className="member-title">연구원</p>
              <p className="member-field">생명과학</p>
              <p className="member-description">분자생물학 및 바이오테크 전문가</p>
            </div>
            <div className="member-card">
              <div className="member-photo">
                <div className="photo-placeholder">👨‍🔬</div>
              </div>
              <h4>정연구원</h4>
              <p className="member-title">연구원</p>
              <p className="member-field">환경과학</p>
              <p className="member-description">환경공학 및 지속가능성 전문가</p>
            </div>
            <div className="member-card">
              <div className="member-photo">
                <div className="photo-placeholder">👩‍🔬</div>
              </div>
              <h4>한연구원</h4>
              <p className="member-title">연구원</p>
              <p className="member-field">나노기술</p>
              <p className="member-description">나노소재 및 나노공학 전문가</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>연구 분야별 구성</h3>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">🔬</div>
              <h4>기초과학</h4>
              <p>물리학, 화학, 생물학 분야 연구진 8명</p>
            </div>
            <div className="research-card">
              <div className="research-icon">💻</div>
              <h4>인공지능</h4>
              <p>AI 및 데이터사이언스 분야 연구진 6명</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🌱</div>
              <h4>환경과학</h4>
              <p>환경공학 및 지속가능성 분야 연구진 4명</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🧬</div>
              <h4>생명과학</h4>
              <p>바이오테크 및 의생명과학 분야 연구진 5명</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>주요 성과</h3>
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h4>논문 게재</h4>
              <p>국제 학술지 100편 이상 게재<br />평균 Impact Factor 3.5 이상</p>
            </div>
            <div className="mission-card">
              <h4>특허 출원</h4>
              <p>국내외 특허 50건 이상 출원<br />기술이전 10건 이상</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;

