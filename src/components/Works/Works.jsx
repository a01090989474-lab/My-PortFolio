import ProjectCard from "./ProjectCard";
import "./Works.css";

const teamProjects = [
  {
    type: "TEAM PROJECT",
    title: "Aesop",
    subtitle: "Website Renewal",
    titleColor: "#603B2D",
    description: (
      <>
        오프라인 매장은 이솝만의 감성이 살아있지만 온라인에서는 브랜드 경험이
        <br />
        단절된다는 문제를 발견해 이솝의 미니멀하고 철학적인 감성을 온라인에서도
        <br /> 온전히 전달 받을 수 있도록 쇼핑몰 리뉴얼 프로젝트입니다.
      </>
    ),
    image: "/images/aesop.png",
    imageAlt: "이솝 리뉴얼 프로젝트",
    imageStyle: { marginLeft: "60px" },
    period: "2026.02.20 – 03.25",
    role: "기획(30%) / 디자인(40%) / 개발(60%)",
    tools: [
      { name: "Figma", icon: "/images/figma.png" },
      { name: "Ps", icon: "/images/ps.png" },
      { name: "React", icon: "/images/react.png" },
      { name: "JS", icon: "/images/js.png" },
      { name: "Github", icon: "/images/github.png" },
      { name: "scss", icon: "/images/scss.png" },
      { name: "claude", icon: "/images/claude.png" },
    ],
    figmaLink: "https://buly.kr/3YFKiCj",
    siteLink: "https://giiit.vercel.app/",
  },
  {
    image: "/images/ascend.png",
    imageAlt: "다이어트의 모든 것을 한 번에 끝내는 ALL-IN-ONE OTT",
    imageStyle: { width: "100%" },
    type: "TEAM PROJECT",
    title: "ASCEND",
    titleColor: "#E84700",
    subtitle: "ALL-IN-ONE OTT",
    description: (
      <>
        ASCEND는 사용자 데이터를 분석해 AI 기반의 맞춤 식단과 운동 커리큘럼을
        <br />
        제공하는 차세대 다이어트 OTT입니다. 모든 영상에 상세한 운동 설명을
        <br />
        포함하고, 시청 중 관심 있는 운동 장비나 식품을 즉시 구매할 수 있는
        <br />
        커머스 UI를 통해 '다이어트 성공'에 필요한 모든 것을 제공합니다.
      </>
    ),
    period: "2025.12.01 – 2026.01.05",
    role: "기획(30%) / 디자인(45%) / 개발(25%)",
    tools: [
      { name: "Figma", icon: "/images/figma.png" },
      { name: "Ps", icon: "/images/ps.png" },
      { name: "Ai", icon: "/images/Ai.png" },
      { name: "React", icon: "/images/react.png" },
      { name: "JS", icon: "/images/js.png" },
      { name: "gpt", icon: "/images/gpt.png" },
      { name: "gemini", icon: "/images/gemini.png" },
      { name: "notion", icon: "/images/notion.png" },
      { name: "Github", icon: "/images/github.png" },
    ],
    figmaLink: "https://buly.kr/FAfLReS",
    siteLink: "https://ascend-ott.vercel.app/",
    reverse: true,
  },
];

const workImages = [null, null, null];

export default function Works() {
  return (
    <section id="works" className="works">
      <div className="works__inner">
        <div className="works__projects">
          {teamProjects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
          <div className="works__personal-label">
            <span>PERSONAL PROJECT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
