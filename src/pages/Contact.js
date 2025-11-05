import React from 'react';

const Contact = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">연락처</h1>
        
        <div className="subsection">
          <h3>연구소 정보</h3>
          <div className="research-grid">
            <div className="research-card">
              <h4>주소</h4>
              <p>서울특별시 성북구 안암동 5가 1<br />고려대학교 정보보호연구소</p>
            </div>
            <div className="research-card">
              <h4>전화</h4>
              <p>02-3290-1234</p>
            </div>
            <div className="research-card">
              <h4>이메일</h4>
              <p>info@security.korea.ac.kr</p>
            </div>
            <div className="research-card">
              <h4>운영시간</h4>
              <p>평일 09:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;