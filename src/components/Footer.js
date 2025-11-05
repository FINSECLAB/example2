import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section logo-section">
            <div className="logo-placeholder">
              {/* 로고 공간 */}
            </div>
          </div>
          <div className="footer-section">
            <h4>연락처</h4>
            <p>전화: 02-1234-5678</p>
            <p>이메일: research@institute.ac.kr</p>
          </div>
          <div className="footer-section">
            <h4>주소</h4>
            <p>서울특별시 강남구 테헤란로 123<br />연구소 빌딩 5층</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 연구소. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

