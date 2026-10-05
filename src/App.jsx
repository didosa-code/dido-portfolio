import { useState } from "react";
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Code2,
  FileText,
  Gamepad2,
  Globe,
  Mail,
  Menu,
  MessageCircle,
  PenTool,
  Server,
  Shield,
  Sparkles,
  Users,
  X,
} from "lucide-react";

/* =========================================================
   EXPERIENCE
========================================================= */

const experiences = [
  {
    year: "2025.08 ~ 현재",
    title: "개인 개발 및 주문제작",
    company: "박디도 / hhiskda",
    role: "개발 및 제작",
    desc: "Discord Bot 개발을 중심으로 코딩을 공부하고 다양한 봇을 직접 제작 및 배포했습니다. 필요한 기능을 직접 구현하거나 요청에 맞춰 주문제작도 진행하고 있습니다.",
    tags: ["Bot 개발", "코딩", "배포", "주문제작"],
  },

  {
    year: "2026.08 ~ 2026.09",
    title: "동굴부대 커뮤니티",
    company: "동굴부대 커뮤니티",
    role: "육군주임원사",
    desc: "대규모 커뮤니티의 서버 운영과 관리 업무를 담당했습니다. 보직별 수뇌부의 활동을 관리하고 동기부여했으며, 서버 운영에 필요한 Discord Bot을 개발하고 실행했습니다.",
    tags: ["서버 관리", "인원 관리", "봇 개발", "조직 운영"],
  },
];

/* =========================================================
   DISCORD EXPERIENCE
========================================================= */

const discordExperience = [
  "동굴부대",
  "창조대 훈련소",
  "산맥",
];

/* =========================================================
   DOCUMENTS
========================================================= */

const documents = [
  {
    icon: FileText,
    title: "공문",
    desc: "조직과 커뮤니티에서 사용할 수 있는 공식 문서를 깔끔하게 제작합니다.",
  },
  {
    icon: FileText,
    title: "보고서",
    desc: "업무 내용과 활동 결과를 보기 쉽도록 정리한 보고서를 제작합니다.",
  },
  {
    icon: PenTool,
    title: "공지문",
    desc: "서버 구성원이 내용을 쉽게 이해할 수 있도록 공지사항을 작성합니다.",
  },
  {
    icon: Shield,
    title: "규정집",
    desc: "서버와 조직 운영에 필요한 규정과 기준을 체계적으로 정리합니다.",
  },
  {
    icon: BriefcaseBusiness,
    title: "경력서",
    desc: "활동 경력과 담당 업무를 한눈에 확인할 수 있도록 구성합니다.",
  },
  {
    icon: FileText,
    title: "교육자료",
    desc: "신규 인원이나 교육 대상자를 위한 자료를 제작합니다.",
  },
  {
    icon: FileText,
    title: "인사발령문",
    desc: "조직에서 사용할 수 있는 인사 관련 문서를 제작합니다.",
  },
  {
    icon: Users,
    title: "모집공고",
    desc: "인원 모집에 필요한 안내문과 홍보용 모집공고를 제작합니다.",
  },
  {
    icon: Sparkles,
    title: "기타 문서",
    desc: "정해진 양식 외에도 필요한 문서를 요청에 맞춰 제작할 수 있습니다.",
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    icon: Gamepad2,
    category: "ROBLOX",
    title: "부대게임 제작",
    desc: "Roblox 기반 부대게임을 제작하고 운영했습니다. 제작한 게임은 동시 접속자 500명을 돌파한 경험이 있습니다.",
  },
  {
    icon: Gamepad2,
    category: "ROBLOX",
    title: "어드민 점프맵",
    desc: "Roblox에서 어드민 기능과 점프맵 요소를 활용한 게임을 개발했습니다.",
  },
  {
    icon: Server,
    category: "DISCORD",
    title: "Discord 커뮤니티 운영",
    desc: "동굴부대, 창조대 훈련소, 산맥 등의 Discord 서버를 관리하고 운영했습니다.",
  },
  {
    icon: Bot,
    category: "DISCORD BOT",
    title: "Discord Bot 제작",
    desc: "보직별 소개 봇, 서버 관리봇, 이벤트 봇, 룰렛 봇, 로그 봇, 게임 봇 등을 제작했습니다.",
  },
  {
    icon: Globe,
    category: "WEB",
    title: "웹사이트 제작",
    desc: "React와 Vite를 사용하여 포트폴리오 및 팀 소개 등의 웹사이트를 제작했습니다.",
  },
  {
    icon: PenTool,
    category: "DESIGN",
    title: "디자인 및 선전물",
    desc: "시트지, 로고, 배너, Discord 서버 디자인, Roblox 디자인 등의 작업을 진행했습니다.",
  },
];

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  {
    icon: Bot,
    title: "Discord Bot",
    desc: "Node.js와 discord.js를 활용한 Bot 제작 및 활용",
  },
  {
    icon: Server,
    title: "Discord Server",
    desc: "서버 관리, 제작, 설정 및 커뮤니티 운영",
  },
  {
    icon: Gamepad2,
    title: "Roblox",
    desc: "게임 제작, 빌드 및 커뮤니티 운영",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "HTML, CSS, JavaScript, React, Vite",
  },
  {
    icon: FileText,
    title: "Documents",
    desc: "공문, 보고서, 규정집, 교육자료 등",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "시트지, 로고, 배너 및 서버 디자인",
  },
];

/* =========================================================
   QUALIFICATIONS
========================================================= */

const qualifications = [
  "ITQ 파워포인트 A",
  "ITQ 한글 A",
  "ITQ 경진대회 참여",
];

/* =========================================================
   ADDITIONAL SKILLS
========================================================= */

const additionalSkills = [
  "구글 시트 제작",
  "구글 시트 함수 활용",
  "구글 독스 제작",
  "Roblox 빌드",
  "선전물 제작",
  "Discord 서버 관리 및 제작",
  "서버 기획 및 운영",
  "Discord Bot 제작 및 활용",
  "Discord Bot 설정",
];

/* =========================================================
   APP
========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="navbar">
        <div className="nav-inner">
          <button
            className="logo"
            onClick={() => goTo("home")}
          >
            DIDO<span>.</span>
          </button>

          <nav
            className={
              menuOpen
                ? "nav-links open"
                : "nav-links"
            }
          >
            <button onClick={() => goTo("about")}>
              ABOUT
            </button>

            <button onClick={() => goTo("experience")}>
              EXPERIENCE
            </button>

            <button onClick={() => goTo("documents")}>
              DOCUMENTS
            </button>

            <button onClick={() => goTo("projects")}>
              PROJECTS
            </button>

            <button onClick={() => goTo("contact")}>
              CONTACT
            </button>
          </nav>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </header>

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section id="home" className="hero">
          <div className="hero-bg"></div>

          <div className="hero-content">
            <div className="eyebrow">
              <span></span>
              PERSONAL PORTFOLIO
            </div>

            <h1>
              I CREATE.
              <br />
              <strong>I MANAGE.</strong>
              <br />
              I BUILD.
            </h1>

            <p>
              Bot · Web · Documents
              <br />
              직접 제작하고 운영하는 개인 포트폴리오입니다.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => goTo("experience")}
              >
                경력 보기
              </button>

              <button
                className="secondary-btn"
                onClick={() => goTo("contact")}
              >
                연락하기
              </button>
            </div>
          </div>

          <div className="scroll-indicator">
            <span></span>
            SCROLL TO EXPLORE
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ====================================================== */}

        <section
          id="about"
          className="section about"
        >
          <div className="section-label">
            01 / ABOUT ME
          </div>

          <div className="about-grid">
            <div>
              <h2>
                박디도
                <br />
                <span>hhiskda.</span>
              </h2>
            </div>

            <div className="about-text">
              <p className="large">
                Bot · Web · 문서를 직접 제작하고
                운영합니다.
              </p>

              <p>
                Discord 커뮤니티를 중심으로 활동하며
                서버에서 필요한 Bot을 직접 제작하거나
                운영하고 있습니다.
              </p>

              <p>
                Discord 서버 운영뿐만 아니라 Roblox
                게임 제작, 웹사이트 개발, 문서 제작,
                디자인 등 다양한 분야를 직접 경험하고
                있습니다.
              </p>

              <p>
                필요한 것을 빠르게 실행하고, 요청이나
                의견을 적극적으로 받아 실제 결과물로
                만들어내는 것을 중요하게 생각합니다.
              </p>

              <div className="info-grid">
                <div>
                  <span>NAME</span>
                  <b>박디도 / hhiskda</b>
                </div>

                <div>
                  <span>MAIN FIELD</span>
                  <b>Bot · Web · Documents</b>
                </div>

                <div>
                  <span>DISCORD</span>
                  <b>w5do_</b>
                </div>

                <div>
                  <span>EMAIL</span>
                  <b>hox.d.w00@gmail.com</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SKILLS
        ====================================================== */}

        <section className="section">
          <div className="section-label">
            02 / SKILLS
          </div>

          <div className="section-heading">
            <h2>
              WHAT I
              <br />
              <span>CAN DO.</span>
            </h2>

            <p>
              지금까지 경험을 바탕으로
              <br />
              다양한 작업이 가능합니다.
            </p>
          </div>

          <div className="document-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <article
                  className="document-card"
                  key={skill.title}
                >
                  <div className="card-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{skill.title}</h3>

                  <p>{skill.desc}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            EXPERIENCE
        ====================================================== */}

        <section
          id="experience"
          className="section dark-section"
        >
          <div className="section-label">
            03 / EXPERIENCE
          </div>

          <div className="section-heading">
            <h2>
              EXPERIENCE
              <br />
              <span>&amp; WORK.</span>
            </h2>

            <p>
              지금까지 경험한 활동과
              <br />
              주요 업무를 정리했습니다.
            </p>
          </div>

          <div className="timeline">
            {experiences.map((item, index) => (
              <article
                className="timeline-item"
                key={index}
              >
                <div className="timeline-year">
                  {item.year}
                </div>

                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <h3>{item.title}</h3>

                  <p>
                    <b>{item.company}</b>
                    <br />
                    {item.role}
                  </p>

                  <p
                    style={{
                      marginTop: "12px",
                    }}
                  >
                    {item.desc}
                  </p>

                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            DISCORD
        ====================================================== */}

        <section className="section">
          <div className="section-label">
            04 / DISCORD
          </div>

          <div className="section-heading">
            <h2>
              DISCORD
              <br />
              <span>OPERATION.</span>
            </h2>

            <p>
              Discord 커뮤니티 운영 및 관리
              <br />
              경험을 보유하고 있습니다.
            </p>
          </div>

          <div className="about-grid">
            <div>
              <h2
                style={{
                  fontSize: "clamp(45px, 5vw, 70px)",
                }}
              >
                최대 규모
                <br />
                <span>70,000명</span>
              </h2>
            </div>

            <div className="about-text">
              <p className="large">
                서버 운영부터 Bot 개발까지
              </p>

              <p>
                여러 Discord 커뮤니티의 서버 관리와
                운영을 경험했으며 역할, 채널, 공지,
                이벤트, 인원, 교육 등의 업무를
                진행했습니다.
              </p>

              <div className="tags">
                {discordExperience.map((server) => (
                  <span key={server}>
                    {server}
                  </span>
                ))}
              </div>

              <div className="info-grid">
                <div>
                  <span>SERVER MANAGEMENT</span>
                  <b>O</b>
                </div>

                <div>
                  <span>ROLE MANAGEMENT</span>
                  <b>O</b>
                </div>

                <div>
                  <span>EVENT OPERATION</span>
                  <b>O</b>
                </div>

                <div>
                  <span>BOT DEVELOPMENT</span>
                  <b>O</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DOCUMENTS
        ====================================================== */}

        <section
          id="documents"
          className="section"
        >
          <div className="section-label">
            05 / DOCUMENTS
          </div>

          <div className="section-heading">
            <h2>
              DOCUMENT
              <br />
              <span>WORK.</span>
            </h2>

            <p>
              깔끔하고 이해하기 쉬운
              <br />
              다양한 문서를 제작합니다.
            </p>
          </div>

          <div className="document-grid">
            {documents.map((doc) => {
              const Icon = doc.icon;

              return (
                <article
                  className="document-card"
                  key={doc.title}
                >
                  <div className="card-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{doc.title}</h3>

                  <p>{doc.desc}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ====================================================== */}

        <section
          id="projects"
          className="section project-section"
        >
          <div className="section-label">
            06 / PROJECTS
          </div>

          <div className="section-heading">
            <h2>
              MY
              <br />
              <span>PROJECTS.</span>
            </h2>

            <p>
              직접 제작하거나 운영한
              <br />
              프로젝트들을 소개합니다.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  className="project-card"
                  key={project.title}
                >
                  <div className="project-top">
                    <div className="project-icon">
                      <Icon size={25} />
                    </div>
                  </div>

                  <span>
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.desc}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            QUALIFICATIONS
        ====================================================== */}

        <section className="section">
          <div className="section-label">
            07 / QUALIFICATIONS
          </div>

          <div className="section-heading">
            <h2>
              QUALI
              <br />
              <span>FICATIONS.</span>
            </h2>

            <p>
              보유 자격 및
              <br />
              추가적인 역량입니다.
            </p>
          </div>

          <div className="about-grid">
            <div>
              <h2
                style={{
                  fontSize: "clamp(42px, 5vw, 70px)",
                }}
              >
                CERTIFICATE
                <br />
                <span>&amp; MORE.</span>
              </h2>
            </div>

            <div className="about-text">
              <div className="info-grid">
                {qualifications.map((item) => (
                  <div key={item}>
                    <span>QUALIFICATION</span>
                    <b>{item}</b>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "35px",
                }}
              >
                <p
                  className="large"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  추가 가능 작업
                </p>

                <div className="tags">
                  {additionalSkills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ====================================================== */}

        <section
          id="contact"
          className="contact-section"
        >
          <div className="contact-inner">
            <div className="section-label">
              08 / CONTACT
            </div>

            <h2>
              LET&apos;S
              <br />
              <span>WORK TOGETHER.</span>
            </h2>

            <p>
              제작 문의, 협업 및 기타 문의사항이 있다면
              <br />
              아래 연락처를 이용해주세요.
            </p>

            <div className="contact-list">
              {/* EMAIL */}

              <a href="mailto:hox.d.w00@gmail.com">
                <Mail size={20} />

                <div>
                  <span>BUSINESS EMAIL</span>

                  <b>
                    hox.d.w00@gmail.com
                  </b>
                </div>

                <ArrowUpRight size={18} />
              </a>

              {/* DISCORD */}

              <a
                className="contact-item"
                href="https://discord.com/users/1528764167727743226"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />

                <div>
                  <span>DISCORD</span>

                  <b>w5do_</b>
                </div>

                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer>
        <div>
          <b>DIDO.</b>

          <span>
            PARK DIDO / HHISKDA
          </span>
        </div>

        <p>
          © 2026 PARK DIDO. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}

export default App;