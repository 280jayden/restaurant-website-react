export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600" alt="Restaurant exterior at night" loading="lazy" />
        </div>
        <div className="about-content">
          <h2 className="section-title left">Our Story</h2>
          <p>Founded in 2010, <strong>Feane</strong> began as a small roadside stand with one mission: serve honest, delicious fast food made with real ingredients. What started as a single grill and a dream has grown into a beloved neighborhood destination.</p>
          <p>Our founder, Chef Marco Reyes, believed that fast food didn't have to mean compromising on quality. Every burger is hand-pressed, every sauce is house-made, and every bun is baked fresh each morning.</p>
          <p>Over the years, we've expanded our menu to include stone-baked pizzas, crispy sides, and hand-spun milkshakes — but our commitment to fresh, flavorful food has never changed.</p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years of Service</span>
            </div>
            <div className="stat">
              <span className="stat-number">50k+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Menu Items</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
