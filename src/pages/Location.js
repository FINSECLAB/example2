import React from 'react';

const Location = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">오시는 길</h1>
        
        <div className="subsection">
          <div className="location-info">
            <div className="address">
              <h4>주소</h4>
              <p>서울특별시 강남구 테헤란로 123<br />연구소 빌딩 5층</p>
            </div>
            <div className="contact">
              <h4>연락처</h4>
              <p>전화: 02-1234-5678<br />이메일: research@institute.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>교통편</h3>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">🚇</div>
              <h4>지하철</h4>
              <p>2호선 강남역 3번 출구에서 도보 5분<br />9호선 신논현역 1번 출구에서 도보 3분</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🚌</div>
              <h4>버스</h4>
              <p>간선버스: 146, 740, 341<br />지선버스: 3412, 6411</p>
            </div>
            <div className="research-card">
              <div className="research-icon">🚗</div>
              <h4>자가용</h4>
              <p>지하 주차장 이용 가능<br />주차 요금: 30분당 1,000원</p>
            </div>
            <div className="research-card">
              <div className="research-icon">✈️</div>
              <h4>공항</h4>
              <p>인천공항에서 공항철도 이용 시<br />약 1시간 30분 소요</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3>주변 시설</h3>
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h4>식당</h4>
              <p>연구소 건물 내 카페테리아<br />주변 다양한 식당 및 카페</p>
            </div>
            <div className="mission-card">
              <h4>숙박</h4>
              <p>강남 지역 다양한 호텔<br />연구소에서 도보 10분 이내</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <div className="map-placeholder">
            <h3>지도</h3>
            <p>구글 맵이나 네이버 맵 API를 연동하여 실제 지도를 표시할 수 있습니다.</p>
            <p>위치: 서울특별시 강남구 테헤란로 123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

