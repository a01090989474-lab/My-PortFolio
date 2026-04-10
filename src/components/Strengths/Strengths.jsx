import { useEffect, useRef } from "react";
import StrengthsCard from "./StrengthsCard";
import "./Strengths.css";

const values = [
  {
    title: "Action First",
    description: (
      <>
        막막함 앞에서 고민하기보다
        <br />
        해결 방법을 찾으며 첫 발을 내딛습니다.
      </>
    ),
    tags: ["퍼스트펭귄", "이봉주", "하면된다"],
    image: "/images/like_1.gif",
  },
  {
    title: "Positive Flow",
    description: (
      <>
        긍정적인 소통으로
        <br />
        팀에 기분 좋은 활력을 더합니다.
      </>
    ),
    tags: ["노홍철", "웃으면", "복이 와요"],
    image: "/images/like_2.jpg",
  },
  {
    title: "Daily Growth",
    description: (
      <>
        피드백을 동력으로 삼아 <br />
        매일 더 나은 사람으로 발전합니다.
      </>
    ),
    tags: ["성장", "스펀지밥", "오히려 좋아"],
    image: "/images/like_3.jpg",
  },
];

export default function Strengths() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("strengths--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="strengths" className="strengths" ref={sectionRef}>
      <div className="strengths__inner">
        {values.map((v, i) => (
          <StrengthsCard key={i} {...v} />
        ))}
      </div>
    </section>
  );
}
