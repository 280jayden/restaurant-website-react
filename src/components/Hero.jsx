import { useState, useEffect, useCallback } from 'react';
import { slides } from '../data';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // wrap around at both ends so prev on slide 0 jumps to the last one
  const goTo = useCallback((idx) => {
    setCurrent((idx + slides.length) % slides.length);
  }, []);

  // auto-advance every 5s, reset whenever the slide changes
  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slide ${i === current ? 'active' : ''}`}
            style={{ backgroundImage: `url('${slide.bg}')` }}
          >
            <div className="slide-content container">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <a href="#menu" className="btn btn-primary">{slide.cta}</a>
            </div>
          </div>
        ))}
      </div>

      {/* dots double as clickable jump-to-slide buttons */}
      <div className="slider-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <button className="slider-arrow prev" aria-label="Previous slide" onClick={() => goTo(current - 1)}>
        <i className="fas fa-chevron-left" />
      </button>
      <button className="slider-arrow next" aria-label="Next slide" onClick={() => goTo(current + 1)}>
        <i className="fas fa-chevron-right" />
      </button>
    </section>
  );
}
