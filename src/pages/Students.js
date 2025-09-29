import React from 'react';

const Students = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">대학원생</h1>
        
        <div className="subsection">
          <h3>박사과정</h3>
          <div className="students-list">
            <div className="student-item">
              <h4>박철수</h4>
              <p>박사과정 - 물리학</p>
              <p>연구분야: 양자역학 및 고체물리학</p>
              <p>지도교수: 김교수</p>
            </div>
            <div className="student-item">
              <h4>김영희</h4>
              <p>박사과정 - 화학</p>
              <p>연구분야: 유기화학 및 나노소재</p>
              <p>지도교수: 이교수</p>
            </div>
            <div className="student-item">
              <h4>이민수</h4>
              <p>박사과정 - 인공지능</p>
              <p>연구분야: 머신러닝 및 딥러닝</p>
              <p>지도교수: 박연구원</p>
            </div>
            <div className="student-item">
              <h4>최지영</h4>
              <p>박사과정 - 생명과학</p>
              <p>연구분야: 분자생물학 및 바이오테크</p>
              <p>지도교수: 최연구원</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>석사과정</h3>
          <div className="students-list">
            <div className="student-item">
              <h4>정현우</h4>
              <p>석사과정 - 물리학</p>
              <p>연구분야: 양자역학</p>
              <p>지도교수: 김교수</p>
            </div>
            <div className="student-item">
              <h4>한소영</h4>
              <p>석사과정 - 화학</p>
              <p>연구분야: 나노소재</p>
              <p>지도교수: 이교수</p>
            </div>
            <div className="student-item">
              <h4>강태현</h4>
              <p>석사과정 - 인공지능</p>
              <p>연구분야: 자연어처리</p>
              <p>지도교수: 박연구원</p>
            </div>
            <div className="student-item">
              <h4>윤서연</h4>
              <p>석사과정 - 생명과학</p>
              <p>연구분야: 분자생물학</p>
              <p>지도교수: 최연구원</p>
            </div>
            <div className="student-item">
              <h4>임동현</h4>
              <p>석사과정 - 환경과학</p>
              <p>연구분야: 환경공학</p>
              <p>지도교수: 정연구원</p>
            </div>
            <div className="student-item">
              <h4>송미래</h4>
              <p>석사과정 - 나노기술</p>
              <p>연구분야: 나노소재</p>
              <p>지도교수: 한연구원</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>연구 활동</h3>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">📚</div>
              <h4>학술 활동</h4>
              <p>정기 세미나 및 학술 발표회 참여<br />국내외 학회 발표 및 논문 게재</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🤝</div>
              <h4>협력 연구</h4>
              <p>교수진과의 공동연구 프로젝트<br />산학협력 프로젝트 참여</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🏆</div>
              <h4>성과</h4>
              <p>학술지 논문 게재 및 특허 출원<br />연구 성과 발표 및 수상</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🌍</div>
              <h4>국제 교류</h4>
              <p>해외 대학과의 교환 연구<br />국제 컨퍼런스 참여</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>지원 프로그램</h3>
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h4>장학금</h4>
              <p>연구 활동에 전념할 수 있도록<br />충분한 장학금 지원</p>
            </div>
            <div className="mission-card">
              <h4>연구비</h4>
              <p>연구에 필요한 장비 및<br />재료비 지원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;

