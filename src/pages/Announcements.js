import React from 'react';

const Announcements = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">공지사항</h1>
        
        <div className="subsection">
          <div className="news-list">
            <div className="news-item">
              <div className="news-date">2024.12.20</div>
              <h4>2025년 연구 프로젝트 공모 안내</h4>
              <p>2025년도 연구 프로젝트 공모가 시작됩니다. 자세한 내용은 첨부 파일을 확인해주세요.</p>
              <p><strong>신청 기간:</strong> 2024.12.20 ~ 2025.01.20</p>
              <p><strong>문의:</strong> research@institute.ac.kr</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.15</div>
              <h4>연구소 세미나 일정 변경</h4>
              <p>12월 20일 예정된 세미나가 12월 25일로 변경되었습니다.</p>
              <p><strong>변경 일시:</strong> 2024.12.25 (수) 오후 2시</p>
              <p><strong>장소:</strong> 연구소 대강의실</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.10</div>
              <h4>연구소 휴무일 안내</h4>
              <p>2024년 연말 휴무일 안내드립니다.</p>
              <p><strong>휴무일:</strong> 2024.12.30 ~ 2025.01.02</p>
              <p><strong>정상 운영:</strong> 2025.01.03부터</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.05</div>
              <h4>연구실 안전 교육 실시</h4>
              <p>연구실 안전 교육을 실시합니다. 모든 구성원의 참석을 부탁드립니다.</p>
              <p><strong>일시:</strong> 2024.12.15 (일) 오전 10시</p>
              <p><strong>장소:</strong> 연구소 대강의실</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.11.30</div>
              <h4>연구비 사용 규정 변경</h4>
              <p>연구비 사용 규정이 변경되었습니다. 자세한 내용은 연구비 관리팀에 문의하시기 바랍니다.</p>
              <p><strong>시행일:</strong> 2025.01.01부터</p>
              <p><strong>문의:</strong> budget@institute.ac.kr</p>
            </div>
            <div className="news-item">
              <div className="news-date">2024.11.25</div>
              <h4>연구소 장비 점검 일정</h4>
              <p>연구소 주요 장비의 정기 점검을 실시합니다.</p>
              <p><strong>점검 기간:</strong> 2024.12.01 ~ 2024.12.05</p>
              <p><strong>영향:</strong> 일부 장비 사용 제한</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>중요 공지</h3>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">⚠️</div>
              <h4>보안 정책</h4>
              <p>연구소 보안 정책을 준수해주세요.<br />외부인 출입 시 사전 신고 필수</p>
            </div>
            <div className="research-card">
              <div className="research-icon">📋</div>
              <h4>연구 윤리</h4>
              <p>연구 윤리 규정을 준수해주세요.<br />부정행위 시 엄중한 처벌</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🔒</div>
              <h4>정보 보안</h4>
              <p>개인정보 및 연구정보 보안에 주의해주세요.<br />정기적인 비밀번호 변경</p>
            </div>
            <div className="research-card">
              <div className="research-icon">📞</div>
              <h4>긴급 연락</h4>
              <p>긴급상황 시 연락처<br />연구소장: 010-1234-5678</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>공지사항 안내</h3>
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h4>공지사항 게시</h4>
              <p>중요한 공지사항은 연구소 홈페이지와<br />이메일을 통해 동시에 안내됩니다.</p>
            </div>
            <div className="mission-card">
              <h4>문의사항</h4>
              <p>공지사항에 대한 문의사항이 있으시면<br />연구소 행정팀으로 연락해주세요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;

