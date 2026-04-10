import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <h1 className="hero__title">
          <span className="hero__word" style={{ animationDelay: "0s" }}>
            FREE
          </span>
          <br />
          <span className="hero__word" style={{ animationDelay: "0.3s" }}>
            NEW
          </span>{" "}
          <span className="hero__word" style={{ animationDelay: "0.6s" }}>
            PATH
          </span>
          <br />
          <span className="hero__word" style={{ animationDelay: "1s" }}>
            MAKER
          </span>
        </h1>
        <p className="hero__sub">
          얽매이지 않은 <strong>자유로운 시선</strong>으로 고정관념의 틀을 깨고,
          <br />
          <strong>망설임 없는 실행력</strong>을 바탕으로 다음이 궁금해지는
          디자인을 만듭니다.
        </p>
      </div>

      <div className="hero__contact hero__contact--left">
        <span>+82 010.9098.9474</span>
      </div>
      <div className="hero__contact hero__contact--right">
        <span>zczc203@naver.com</span>
      </div>
    </section>
  );
}
