import React from "react";

const Hero = () => {
  return (
    <div className="outer">
      <div className="capsule">
        <button className="btn1"><span>
          Are we your regular agency?</span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M5 12h12" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13 5l7 7-7 7" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg></button>
      </div>
      <div className="header">
        <h1>
          Karm karo,
          <br />
          fal ki maa ki aankh, bazaar se le aayenge.
        </h1>
      </div>
      <div className="description">
        <p>
          We don’t chase outcomes; we chase moments, ideas, and the kind of
          madness that turns work into something unforgettable.
        </p>
      </div>
      <div className="lower">
        <button className="btn">
          Start Free Trial
        </button>
        <button className="btn1" id="price"> Pricing </button>
      </div>
      <div className="under">
        Currently in India only.
      </div>
    </div>
  );
};

export default Hero;
