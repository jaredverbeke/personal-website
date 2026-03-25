
export default function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/profile.jpg"
              alt="Jared Verbeke profile photo"
              className="shadow-dark"
            />
            <h1>Jared Verbeke</h1>
            <p>Business Operations x CLM x AI Systems</p>
            <p>
              I build operational systems that increase speed, reduce risk, and
              keep teams aligned.
            </p>

            <div
              style={{
                marginTop: 25,
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="/services" className="btn">
                Work: AI Projects
              </a>
              <a href="/portfolio" className="btn">
                Fun: AI Projects
              </a>
            </div>

            <div style={{ marginTop: 22 }}>
              <p className="home-section-label">What you will find here</p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  justifyContent: "center",
                }}
              >
                <a href="/about" className="btn btn--ghost">
                  About
                </a>
                <a href="/interests" className="btn btn--ghost">
                  Interests
                </a>
                <a href="/blog" className="btn btn--ghost">
                  Accomplishments
                </a>
                <a href="/contact" className="btn btn--ghost">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
