import React from 'react';

const advisor = {
  name: '강형우',
  title: 'Professor',
  email: 'kanghw@korea.ac.kr',
  office: '정운오IT교양관 313호',
  researchAreas: '금융보안, 가상자산보안',
  photo: '/KakaoTalk_20251111_155756293.jpg',
};

const fullTimeStudents = [
  {
    name: '배준호',
    cohort: '석사 47기',
    major: '융합보안',
    detailMajor: '디지털금융보안',
    university: '한림대/컴퓨터공학',
    photo: 'https://via.placeholder.com/180x220?text=배준호',
  },
  {
    name: '손예원',
    cohort: '석사 48기',
    major: '정보보안',
    detailMajor: '금융보안',
    university: '학점은행제',
    photo: 'https://via.placeholder.com/180x220?text=손예원',
  },
  {
    name: '박천호',
    cohort: '석사 50기',
    major: '정보보안',
    detailMajor: '정보보안정책',
    university: '동서울대/사이버보안학',
    photo: 'https://via.placeholder.com/180x220?text=박천호',
  },
  {
    name: '임시온',
    cohort: '석사 50기',
    major: '정보보안',
    detailMajor: '정보보안정책',
    university: '덕성여대/사이버보안전공',
    photo: 'https://via.placeholder.com/180x220?text=임시온',
  },
  {
    name: '김준호',
    cohort: '학부생',
    major: '-',
    detailMajor: '심화전공',
    university: '고려대/컴퓨터',
    photo: 'https://via.placeholder.com/180x220?text=김준호',
  },
];

const partTimeStudents = [
  {
    name: '박민주',
    cohort: '석사 47기',
    company: 'UBS 증권',
    photo: 'https://via.placeholder.com/180x220?text=박민주',
  },
  {
    name: '이상훈',
    cohort: '석사 47기',
    company: '금융감독원',
    photo: 'https://via.placeholder.com/180x220?text=이상훈',
  },
  {
    name: '남현수',
    cohort: '석사 47기',
    company: '금융감독원',
    photo: 'https://via.placeholder.com/180x220?text=남현수',
  },
  {
    name: '김강철',
    cohort: '석사 47기',
    company: '한국예탁결제원',
    photo: 'https://via.placeholder.com/180x220?text=김강철',
  },
  {
    name: '유범석',
    cohort: '석사 47기',
    company: 'LS증권',
    photo: 'https://via.placeholder.com/180x220?text=유범석',
  },
  {
    name: '성호열',
    cohort: '석사 49기',
    company: '우리은행',
    photo: 'https://via.placeholder.com/180x220?text=성호열',
  },
  {
    name: '이동운',
    cohort: '석사 49기',
    company: '안랩',
    photo: 'https://via.placeholder.com/180x220?text=이동운',
  },
  {
    name: '박성수',
    cohort: '석사 49기',
    company: '농협은행',
    photo: 'https://via.placeholder.com/180x220?text=박성수',
  },
  {
    name: '장은지',
    cohort: '석사 49기',
    company: '신한은행',
    photo: 'https://via.placeholder.com/180x220?text=장은지',
  },
  {
    name: '이재형',
    cohort: '석사 49기',
    company: '신한투자증권',
    photo: 'https://via.placeholder.com/180x220?text=이재형',
  },
  {
    name: '정혜성',
    cohort: '석사 49기',
    company: '금융보안원',
    photo: 'https://via.placeholder.com/180x220?text=정혜성',
  },
  {
    name: '유효종',
    cohort: '석사 49기',
    company: '한국산업은행',
    photo: 'https://via.placeholder.com/180x220?text=유효종',
  },
  {
    name: '정용준',
    cohort: '석사 49기',
    company: '신한투자증권',
    photo: 'https://via.placeholder.com/180x220?text=정용준',
  },
  {
    name: '백승미',
    cohort: '석사 49기',
    company: '삼성 SDS',
    photo: 'https://via.placeholder.com/180x220?text=백승미',
  },
  {
    name: '유정재',
    cohort: '석사 49기',
    company: 'IR큐더스',
    photo: 'https://via.placeholder.com/180x220?text=유정재',
  },
  {
    name: '류신영',
    cohort: '석사 49기',
    company: '글로벌사이버인재양성 프로그램 참여',
    photo: 'https://via.placeholder.com/180x220?text=류신영',
  },
  {
    name: '장세인',
    cohort: '석사 49기',
    company: '토스증권',
    photo: 'https://via.placeholder.com/180x220?text=장세인',
  },
  {
    name: '김정훈',
    cohort: '석사 49기',
    company: '넷마블',
    photo: 'https://via.placeholder.com/180x220?text=김정훈',
  },
  {
    name: '백하나',
    cohort: '석사 49기',
    company: '한국산업은행',
    photo: 'https://via.placeholder.com/180x220?text=백하나',
  },
  {
    name: '양병수',
    cohort: '석사 49기',
    company: '교보증권',
    photo: 'https://via.placeholder.com/180x220?text=양병수',
  },
  {
    name: '박지영',
    cohort: '석사 50기',
    company: '신한카드',
    photo: 'https://via.placeholder.com/180x220?text=박지영',
  },
  {
    name: '문요셉',
    cohort: '석사 50기',
    company: '신한라이프',
    photo: 'https://via.placeholder.com/180x220?text=문요셉',
  },
  {
    name: '김효진',
    cohort: '석사 50기',
    company: '신한DS',
    photo: 'https://via.placeholder.com/180x220?text=김효진',
  },
  {
    name: '권성민',
    cohort: '석사 50기',
    company: '기업은행',
    photo: 'https://via.placeholder.com/180x220?text=권성민',
  },
  {
    name: '지상희',
    cohort: '석사 50기',
    company: '신한DS',
    photo: 'https://via.placeholder.com/180x220?text=지상희',
  },
  {
    name: '강정근',
    cohort: '석사 50기',
    company: '피앤피시큐어',
    photo: 'https://via.placeholder.com/180x220?text=강정근',
  },
  {
    name: '어진철',
    cohort: '석사 50기',
    company: '시큐아이',
    photo: 'https://via.placeholder.com/180x220?text=어진철',
  },
];

const Faculty = () => {
  return (
    <div className="page">
      <div className="container people-page">
        <h1 className="page-title">People</h1>

        <section className="people-section">
          <h2 className="people-heading">Advisor</h2>
          <div className="people-card advisor-card">
            <div className="people-photo-wrapper">
              <img
                src={advisor.photo}
                alt={`${advisor.name} 프로필`}
                className="people-photo large"
              />
            </div>
            <div className="people-info">
              <h3 className="people-name">{advisor.name}</h3>
              <p className="people-role">{advisor.title}</p>
              <ul className="people-meta">
                <li>이메일: <a href={`mailto:${advisor.email}`}>{advisor.email}</a></li>
                <li>연구실: {advisor.office}</li>
                <li>분야: {advisor.researchAreas}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="people-section">
          <h2 className="people-heading">Full-time Students</h2>
          <div className="people-grid">
            {fullTimeStudents.map((student) => (
              <div className="people-card" key={student.name}>
                <div className="people-photo-wrapper">
                  <img
                    src={student.photo}
                    alt={`${student.name} 프로필`}
                    className="people-photo"
                  />
                </div>
                <div className="people-info">
                  <h3 className="people-name">{student.name}</h3>
                  <p className="people-major">{student.major}</p>
                  <p className="people-detail-major">{student.detailMajor}</p>
                  <p className="people-cohort">{student.cohort}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="people-section">
          <h2 className="people-heading">Part-time Students</h2>
          <div className="people-grid">
            {partTimeStudents.map((student) => (
              <div className="people-card" key={student.name}>
                <div className="people-photo-wrapper">
                  <img
                    src={student.photo}
                    alt={`${student.name} 프로필`}
                    className="people-photo"
                  />
                </div>
                <div className="people-info">
                  <h3 className="people-name">{student.name}</h3>
                  <p className="people-cohort">{student.cohort}</p>
                  <p className="people-company">{student.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faculty;