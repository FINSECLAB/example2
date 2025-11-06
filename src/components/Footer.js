import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 메인 푸터 상자 */}
        <div className="footer-box">
          <div className="footer-box-content">
            <div className="footer-box-section">
              <h4 className="footer-box-title">
                <span className="footer-icon">📍</span>
                사무소 위치
              </h4>
              <p>서울특별시 강남구 테헤란로 123<br />연구소 빌딩 5층</p>
            </div>
            <div className="footer-box-section">
              <h4 className="footer-box-title">
                <span className="footer-icon">📞</span>
                연락처
              </h4>
              <p>전화: 02-1234-5678<br />이메일: research@institute.ac.kr</p>
            </div>
          </div>
        </div>
        
        {/* 하단 스트립 */}
        <div className="footer-bottom-strip">
          <div className="footer-links">
            <Link to="/location">사무소위치</Link>
            <Link to="/contact">연락처</Link>
            <a href="#legal">법적고지</a>
            <a href="#privacy">개인정보처리방침</a>
            <a href="#accessibility">웹접근성</a>
            <span className="footer-ad">광고책임변호사 : 황광연</span>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2019-2025 연구소. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

