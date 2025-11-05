import React from 'react';

const Students = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">학생</h1>
        
        <div className="subsection">
          <h3>연구소 학생</h3>
          <div className="research-grid">
            <div className="research-card">
              <h4>박사과정</h4>
              <p>김철수, 이영희, 박민수</p>
            </div>
            <div className="research-card">
              <h4>석사과정</h4>
              <p>최지영, 정수현, 강민호</p>
            </div>
            <div className="research-card">
              <h4>학부연구생</h4>
              <p>조현우, 송지은, 윤태준</p>
            </div>
            <div className="research-card">
              <h4>졸업생</h4>
              <p>이전 졸업생들의 연구 성과</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;