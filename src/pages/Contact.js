import React from 'react';

const Contact = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Contact</h1>
        <div className="location-info" style={{marginTop: '1rem'}}>
          <div className="contact">
            <h4>연락처</h4>
            <p>전화: 02-1234-5678</p>
            <p>이메일: research@institute.ac.kr</p>
          </div>
          <div className="address">
            <h4>주소</h4>
            <p>서울특별시 강남구 테헤란로 123<br />연구소 빌딩 5층</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



