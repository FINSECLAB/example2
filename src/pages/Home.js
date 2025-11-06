import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [fixedBlur, setFixedBlur] = useState(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const heroHeight = window.innerHeight; // hero 섹션 높이 (100vh)
          const scrollDownThreshold = heroHeight * 0.8; // SCROLL DOWN이 사라지는 시점
          
          setScrollY(currentScroll);
          
          // SCROLL DOWN이 사라지는 시점에 도달했으면 블러 고정
          if (currentScroll >= scrollDownThreshold && fixedBlur === null) {
            const blurAtThreshold = Math.min(scrollDownThreshold / 150, 5); // 최대 5px
            setFixedBlur(blurAtThreshold);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 초기 계산
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixedBlur]);

  // 블러 강도 계산
  let blurAmount;
  if (fixedBlur !== null) {
    // SCROLL DOWN이 사라진 후에는 고정된 블러 값 사용
    blurAmount = fixedBlur;
  } else {
    // SCROLL DOWN이 보이는 동안만 블러 증가 (더 약하게)
    blurAmount = Math.min(scrollY / 150, 5); // 최대 5px, 더 천천히 증가
  }

  useEffect(() => {
    // 배경 이미지만 블러 처리하기 위해 CSS 변수 설정
    document.documentElement.style.setProperty('--bg-blur', `${blurAmount}px`);
    
    return () => {
      document.documentElement.style.setProperty('--bg-blur', '0px');
    };
  }, [blurAmount]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content animate-slide-up">
          <h1 className="hero-title">연구소</h1>
          <p className="hero-subtitle">Research Institute</p>
          <p className="hero-description">혁신적인 연구를 통해 미래를 선도하는 연구소</p>
        </div>
        <div className="scroll-hint">
          scroll down
        </div>
      </section>

      {/* Row 1: 연구소 소개 (한 줄, 박스 안에 글) */}
      <section id="about" className="section intro-section">
        <div className="container">
          <div className="home-row one-col">
            <div className="home-card">
              <h2 className="section-title small">연구소 소개</h2>
              <div className="intro-text">
                <p>우리 연구소는 혁신적인 연구를 통해 미래를 선도하는 연구기관입니다. 세계 최고 수준의 연구 성과로 인류 발전에 기여하고, 창의적·혁신적 연구를 통해 새로운 지식 창출 및 사회 기여를 목표로 합니다.</p>
                <p>다양한 연구 분야에서 우수한 연구진들이 협력하여 최첨단 연구를 수행하고 있으며, 국내외 학술 교류와 산업체와의 협력을 통해 연구 성과를 사회에 환원하고 있습니다.</p>
                <p>지속적인 연구 개발과 혁신을 통해 미래 기술의 선도자 역할을 하며, 글로벌 경쟁력을 갖춘 연구 성과를 창출해 나가고 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2: 주요 연구 분야 (한 줄, 더보기 없음) */}
      <section className="section research-section">
        <div className="container">
          <div className="home-row one-col">
            <div className="home-card">
              <h2 className="section-title small">주요 연구 분야</h2>
              <div className="research-grid compact">
                <div className="research-card">
                  <h4>기초과학</h4>
                </div>
                <div className="research-card">
                  <h4>인공지능</h4>
                </div>
                <div className="research-card">
                  <h4>환경과학</h4>
                </div>
                <div className="research-card">
                  <h4>생명과학</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 3: 공지사항 & 연구소 소식 (한 줄, 사진 형식) */}
      <section className="section news-section">
        <div className="container">
          <div className="home-row two-col">
            <div className="home-card">
              <h2 className="section-title small">공지사항</h2>
              <div className="news-list">
                <div className="news-item">
                  <div className="news-date">2024.12.20</div>
                  <h4>2025년 연구 프로젝트 공모 안내</h4>
                  <p>새로운 연구 프로젝트 공모가 시작됩니다. 많은 참여 부탁드립니다.</p>
                </div>
                <div className="news-item">
                  <div className="news-date">2024.12.15</div>
                  <h4>연구소 세미나 일정 변경</h4>
                  <p>12월 세미나 일정이 변경되었습니다. 자세한 내용은 공지사항을 확인해주세요.</p>
                </div>
              </div>
              <div className="home-actions">
                <Link to="/announcements" className="text-link">더보기 →</Link>
              </div>
            </div>
            <div className="home-card">
              <h2 className="section-title small">연구소 소식</h2>
              <div className="news-list">
                <div className="news-item">
                  <div className="news-date">2024.12.20</div>
                  <h4>국제 학술지 논문 게재 성과</h4>
                  <p>우리 연구소의 연구 성과가 국제 학술지에 게재되었습니다.</p>
                </div>
                <div className="news-item">
                  <div className="news-date">2024.12.18</div>
                  <h4>연구비 지원 확정</h4>
                  <p>정부 연구비 지원이 확정되어 새로운 연구 프로젝트를 진행할 예정입니다.</p>
                </div>
              </div>
              <div className="home-actions">
                <Link to="/institute-news" className="text-link">더보기 →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Box */}
      <section className="section footer-section">
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
          </div>
          <div className="footer-copyright">
            <p>&copy; 2019-2025 연구소. All Rights Reserved.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
