import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <section className="service section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Fun: AI Projects</h2>
            <p style={{ marginTop: 12, marginBottom: 0, color: "#504e70" }}>
              Creative and technical builds where I explore applied AI, product design, and real-world testing.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <img
                src="/imgs/apple-photos-agent.svg"
                alt="Apple Photos Agent project visual"
                style={{
                  width: "100%",
                  height: 140,
                  objectFit: "contain",
                  marginBottom: 14,
                }}
              />
              <p style={{ fontWeight: 700, color: "#2196f3", margin: 0, marginBottom: 12 }}>
                Computer Vision + Automation
              </p>
              <h4>Apple Photos Agent (OpenClaw)</h4>
              <p>
                Fully shipped to git with supporting project documentation, including a dedicated whitepaper describing architecture, safeguards, and run workflow for large Apple Photos libraries.
              </p>
              <div style={{ marginTop: 12, textAlign: "left", color: "#504e70", lineHeight: "25px" }}>
                <div>Git-complete workflow: indexing, candidate selection, scoring, and album sync</div>
                <div>Includes conservative guardrails for people/pets/favorites and confidence thresholds</div>
                <div>Documented with a project whitepaper for architecture and operating model</div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
                <a
                  href="https://github.com/jaredverbeke/openclaw-apple-photos-cleanup-agent"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#2196f3", fontWeight: 700 }}
                >
                  GitHub (Project Code)
                </a>
                <a
                  href="https://github.com/jaredverbeke/openclaw-apple-photos-cleanup-agent/blob/main/WHITEPAPER.md"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#2196f3", fontWeight: 700 }}
                >
                  Project Whitepaper
                </a>
              </div>
            </div>
          </div>

          <div className="service-item padd-15">
            <div className="service-item-inner">
              <img
                src="/imgs/treadlab.svg"
                alt="TreadLab project visual"
                style={{
                  width: "100%",
                  height: 140,
                  objectFit: "contain",
                  marginBottom: 14,
                }}
              />
              <p style={{ fontWeight: 700, color: "#2196f3", margin: 0, marginBottom: 12 }}>
                Fitness + Product + AI
              </p>
              <h4>TreadLab (TireBot)</h4>
              <p>
                Built a route-aware recommendation app for gravel cycling tire and pressure strategy, balancing speed,
                traction, and puncture risk.
              </p>
              <div style={{ marginTop: 12, textAlign: "left", color: "#504e70", lineHeight: "25px" }}>
                <div>Built with Streamlit + Python scoring models</div>
                <div>Supports route segments, GPX context, and setup recommendations</div>
                <div>Outputs ranked alternatives plus front and rear pressure guidance</div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
                <a
                  href="https://github.com/jaredverbeke/TireBot"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#2196f3", fontWeight: 700 }}
                >
                  GitHub Repo
                </a>
                <a
                  href="https://jaredverbeke.github.io/TireBot/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#2196f3", fontWeight: 700 }}
                >
                  Live App / Whitepaper
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
