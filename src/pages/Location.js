import React from 'react';

const Location = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">위치 안내</h1>
        
        <div className="subsection">
          <h3>연구소 위치</h3>
          <div className="research-grid">
            <div className="research-card">
              <h4>주소</h4>
              <p>서울특별시 성북구 안암동 5가 1<br />고려대학교 정보보호연구소</p>
            </div>
            <div className="research-card">
              <h4>교통편</h4>
              <p>지하철 6호선 고려대역<br />버스 273, 1017, 1213</p>
            </div>
            <div className="research-card">
              <h4>주차</h4>
              <p>연구소 지하 주차장 이용 가능<br />주차 공간 제한 있음</p>
            </div>
            <div className="research-card">
              <h4>건물 안내</h4>
              <p>공과대학 본관 3층<br />연구소 사무실 및 실험실</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;