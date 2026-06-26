import { useState, useEffect, useCallback } from 'react';
import { galleryImages } from '../data';

// show 3 images on desktop, 2 on tablet, 1 on phone
function getSlidesPerView() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 992) return 2;
  return 3;
}

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(getSlidesPerView);

  useEffect(() => {
    const onResize = () => setPerView(getSlidesPerView());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // don't let the track scroll past the last full set of images
  const maxIndex = galleryImages.length - perView;
  const clampedIndex = Math.min(Math.max(index, 0), maxIndex);
  const offset = -(clampedIndex * (100 / perView));

  const prev = useCallback(() => setIndex(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex(i => Math.min(maxIndex, i + 1)), [maxIndex]);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">A taste of what we offer</p>

        <div className="gallery-slider">
          <div className="gallery-track" style={{ transform: `translateX(${offset}%)` }}>
            {galleryImages.map((img, i) => (
              <div className="gallery-slide" key={i}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <button className="gallery-arrow gallery-prev" aria-label="Previous image" onClick={prev}>
            <i className="fas fa-chevron-left" />
          </button>
          <button className="gallery-arrow gallery-next" aria-label="Next image" onClick={next}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
