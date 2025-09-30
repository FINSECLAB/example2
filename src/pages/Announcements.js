import React from 'react';

const Announcements = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">공지사항</h1>
        
        <div className="subsection">
          <h3>최신 공지</h3>
          <div className="news-list">
            <div className="news-item">
              <div className="news-date">2024.12.20</div>
              <h4>연구 프로젝트 공모 안내</h4>
              <p>2025년도 연구 프로젝트 공모가 시작됩니다.</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.15</div>
              <h4>세미나 일정 변경</h4>
              <p>12월 20일 예정된 세미나가 12월 25일로 변경되었습니다.</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.10</div>
              <h4>연구소 휴무일 안내</h4>
              <p>2024년 연말 휴무일 안내드립니다.</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>중요 공지</h3>
          <div className="research-grid">
            <div className="research-card">
              <h4>보안 정책</h4>
              <p>연구소 보안 정책을 준수해주세요.</p>
            </div>
            <div className="research-card">
              <h4>연구 윤리</h4>
              <p>연구 윤리 규정을 준수해주세요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;