import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { setupPageAnimations } from '../utils/scrollAnimation';
import { getLatestNews } from '../data/newsData';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [fixedBlur, setFixedBlur] = useState(null);

  // 컴포넌트 마운트 시 초기화
  useEffect(() => {
    // 스크롤 위치를 맨 위로 리셋
    window.scrollTo(0, 0);
    
    // 블러 상태 리셋
    setFixedBlur(null);
    setScrollY(0);
    
    // 스크롤 애니메이션 초기화
    setTimeout(() => {
      setupPageAnimations();
    }, 100);
  }, []);

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
          <h1 className="hero-title">금융보안 연구실</h1>
          <p className="hero-subtitle">Financial Security Lab</p>
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
                <p>금융회사들은 지속적으로 발생하는 해킹 및 개인정보 유출 사고로 인해 정보보안을 강화하고 있습니다. 금융보안 연구실은 금융권 정보보안 법규, 정책, 기술에 대한 전문 연구를 수행합니다.</p>
                <p>금융회사 보안 점검 방법론, 금융망 분리 규정, 전자금융시스템 보안 검증, 전자금융 인증기술 등에 대한 연구를 통해 전자금융거래법, 개인정보보호법, 신용정보보호법 등 관련 법규를 준수할 수 있도록 지원합니다.</p>
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
                  <h4>금융보안 정책 및 법규 연구</h4>
                </div>
                <div className="research-card">
                  <h4>금융권 해킹방지 연구</h4>
                </div>
                <div className="research-card">
                  <h4>전자금융 인증기법 연구</h4>
                </div>
                <div className="research-card">
                  <h4>전자금융기반시설 취약점 분석 및 모의해킹 연구</h4>
                </div>
                <div className="research-card">
                  <h4>디지털자산 보안기술 연구</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 3: 최근 소식 (통합, 최근 5개) */}
      <section className="section news-section">
        <div className="container">
          <div className="home-row one-col">
            <div className="home-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                <h2 className="section-title small" style={{ marginBottom: 0 }}>최근 소식</h2>
                <Link to="/news" className="text-link" style={{ fontSize: '0.9rem' }}>more</Link>
              </div>
              <div className="news-list" style={{ overflow: 'hidden' }}>
                {getLatestNews(5).map((news) => (
                  <div key={news.id} className="news-item">
                    <p>[{news.date}] {news.title}</p>
                  </div>
                ))}
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
                연구실 위치
              </h4>
              <p>서울 성북구 안암로 145<br />고려대학교 안암캠퍼스<br />로봇융합관 204호</p>
            </div>
            <div className="footer-box-section">
              <h4 className="footer-box-title">
                연락처
              </h4>
              <p>02-3290-5944</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
