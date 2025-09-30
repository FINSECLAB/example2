import React from 'react';

const Faculty = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">교수진</h1>
        
        <div className="subsection">
          <h3>연구소 교수진</h3>
          <div className="research-grid">
            <div className="research-card">
              <h4>김교수</h4>
              <p>정보보안 전공<br />네트워크 보안 연구</p>
            </div>
            <div className="research-card">
              <h4>이교수</h4>
              <p>암호학 전공<br />암호 알고리즘 연구</p>
            </div>
            <div className="research-card">
              <h4>박교수</h4>
              <p>시스템 보안 전공<br />모바일 보안 연구</p>
            </div>
            <div className="research-card">
              <h4>최교수</h4>
              <p>응용보안 전공<br />IoT 보안 연구</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;