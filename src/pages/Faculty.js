import React from 'react';
import { Link } from 'react-router-dom';

const faculty = {
  name: '강형우',
  email: 'kanghw@korea.ac.kr',
  office: '정운오IT교양관 315호',
  researchArea: '금융보안, 가상자산보안',
  photo: `${process.env.PUBLIC_URL}/people-photos/강형우 교수님.jpg`,
};

const fullTimeStudents = [
  {
    name: '배준호',
    cohort: '47기',
    major: '융합보안',
    photo: `${process.env.PUBLIC_URL}/people-photos/배준호.png`,
  },
  {
    name: '손예원',
    cohort: '48기',
    major: '정보보안',
    photo: `${process.env.PUBLIC_URL}/people-photos/손예원.jpg`,
  },
  {
    name: '박천호',
    cohort: '50기',
    major: '정보보안',
    photo: `${process.env.PUBLIC_URL}/people-photos/박천호.jpg`,
  },
  {
    name: '임시온',
    cohort: '50기',
    major: '정보보안',
    photo: `${process.env.PUBLIC_URL}/people-photos/임시온.JPG`,
  },
  {
    name: '김준호',
    cohort: '학부연구생',
    major: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/김준호.jpg`,
  },
];

const partTimeStudents = [
  {
    name: '박민주',
    cohort: '47기',
    company: 'UBS 증권',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '이상훈',
    cohort: '47기',
    company: '금융감독원',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '남현수',
    cohort: '47기',
    company: '금융감독원',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '김강철',
    cohort: '47기',
    company: '한국예탁결제원',
    photo: `${process.env.PUBLIC_URL}/people-photos/김강철.png`,
  },
  {
    name: '유범석',
    cohort: '47기',
    company: 'LS증권',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '성호열',
    cohort: '49기',
    company: '우리은행',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '이동운',
    cohort: '49기',
    company: '안랩',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '박성수',
    cohort: '49기',
    company: '농협은행',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '장은지',
    cohort: '49기',
    company: '신한은행',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '이재형',
    cohort: '49기',
    company: '신한투자증권',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '정혜성',
    cohort: '49기',
    company: '금융보안원',
    photo: `${process.env.PUBLIC_URL}/people-photos/정혜성.jpg`,
  },
  {
    name: '유효종',
    cohort: '49기',
    company: '한국산업은행',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '정용준',
    cohort: '49기',
    company: '신한투자증권',
    photo: `${process.env.PUBLIC_URL}/people-photos/정용준.jpg`,
  },
  {
    name: '백승미',
    cohort: '49기',
    company: '삼성 SDS',
    photo: `${process.env.PUBLIC_URL}/people-photos/백승미.jpg`,
  },
  {
    name: '유정재',
    cohort: '49기',
    company: 'IR큐더스',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '류신영',
    cohort: '49기',
    company: '글로벌사이버인재양성 프로그램 참여',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '장세인',
    cohort: '49기',
    company: '토스증권',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '김정훈',
    cohort: '49기',
    company: '넷마블',
    photo: `${process.env.PUBLIC_URL}/people-photos/김정훈.jpg`,
  },
  {
    name: '백하나',
    cohort: '49기',
    company: '한국산업은행',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '양병수',
    cohort: '49기',
    company: '교보증권',
    photo: `${process.env.PUBLIC_URL}/people-photos/양병수.png`,
  },
  {
    name: '박지영',
    cohort: '50기',
    company: '신한카드',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '문요셉',
    cohort: '50기',
    company: '신한라이프',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '김효진',
    cohort: '50기',
    company: '신한DS',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '권성민',
    cohort: '50기',
    company: '기업은행',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '지상희',
    cohort: '50기',
    company: '신한DS',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '강정근',
    cohort: '50기',
    company: '피앤피시큐어',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '어진철',
    cohort: '50기',
    company: '시큐아이',
    photo: `${process.env.PUBLIC_URL}/people-photos/어진철.jpeg`,
  },
];

const Faculty = () => {
  return (
    <div className="page">
      <div className="container members-page">
        <section className="members-section">
          <h2 className="members-heading">Professor</h2>
          <div className="members-card faculty-card">
            <div className="members-photo-wrapper">
              <img
                src={faculty.photo}
                alt={`${faculty.name} 프로필`}
                className="members-photo large"
              />
            </div>
            <div className="members-info">
              <h3 className="members-name">{faculty.name}</h3>
              <ul className="members-meta">
                <li>이메일: <a href={`mailto:${faculty.email}`}>{faculty.email}</a></li>
                <li>연구실: {faculty.office}</li>
                <li>분야: {faculty.researchArea}</li>
                <li>
                  <Link to="/professor-kang" className="homepage-link">homepage</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="members-section">
          <h2 className="members-heading">Full-time</h2>
          <div className="members-grid">
            {fullTimeStudents.map((student) => (
              <div className="members-card" key={student.name}>
                <div className="members-photo-wrapper">
                  <img
                    src={student.photo}
                    alt={`${student.name} 프로필`}
                    className="members-photo"
                  />
                </div>
                <div className="members-info">
                  <h3 className="members-name">{student.name}</h3>
                  {student.major && <p className="members-major">{student.major}</p>}
                  <p className="members-cohort">{student.cohort}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="members-section">
          <h2 className="members-heading">Part-time</h2>
          <div className="members-grid">
            {partTimeStudents.map((student) => (
              <div className="members-card" key={student.name}>
                <div className="members-photo-wrapper">
                  <img
                    src={student.photo}
                    alt={`${student.name} 프로필`}
                    className="members-photo"
                  />
                </div>
                <div className="members-info">
                  <h3 className="members-name">{student.name}</h3>
                  <p className="members-company">{student.company}</p>
                  <p className="members-cohort">{student.cohort}</p>
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