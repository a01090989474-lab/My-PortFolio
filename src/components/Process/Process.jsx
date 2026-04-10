import "./Process.css";

function Process() {
  return (
    <section id="process" className="process">
      <div className="process__bg-images">
        <img
          src="/images/process_1.png"
          alt=""
          className="process__bg-img process__bg-img--1"
          aria-hidden="true"
        />
        <img
          src="/images/process_2.png"
          alt=""
          className="process__bg-img process__bg-img--2"
          aria-hidden="true"
        />
        <img
          src="/images/process_3.png"
          alt=""
          className="process__bg-img process__bg-img--3"
          aria-hidden="true"
        />
      </div>

      <div className="process__content">
        {/* <h2 className="process__title">Process</h2> */}
        <p className="process__desc">
          기획부터 디자인, 구현까지 전 과정을 진행했습니다.
          <br />
          <br />
          <strong>문제를 정의하고</strong> 우선순위를 좁혀가며 디자인을
          구체화했고
          <br />
          구현 과정에서 기존과 달라지는 부분의
          <strong> 이유를 생각</strong>하며 진행했습니다.
        </p>
      </div>
    </section>
  );
}

export default Process;
