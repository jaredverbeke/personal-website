export default function ApplePhotosWhitepaper() {
  return (
    <main>
      <section
        className="about section"
        id="apple-photos-agent-whitepaper"
      >
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Apple Photos Agent Whitepaper</h2>
              <p style={{ marginTop: 12, marginBottom: 0, color: "#504e70" }}>
                OpenClaw architecture, workflow, and safety model.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="about-content padd-15">
              <div className="timeline-box padd-15">
                <div className="timeline shadow-dark">
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h6 className="timeline-date">
                      <i className="fa fa-book" /> Goal
                    </h6>
                    <h4 className="timeline-title">Goal</h4>
                    <p className="timeline-text">
                      Build an incremental Apple Photos cleanup agent that helps review large personal libraries while keeping a
                      conservative, human-in-the-loop approach.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h6 className="timeline-date">
                      <i className="fa fa-cog" /> System Design
                    </h6>
                    <h4 className="timeline-title">System Design</h4>
                    <p className="timeline-text">
                      The workflow combines photo indexing, candidate selection, cloud-assisted scoring, deferred sync, and
                      album-based review. Core scripts are written in Python with AppleScript integration for Photos.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h6 className="timeline-date">
                      <i className="fa fa-shield-alt" /> Safety and Guardrails
                    </h6>
                    <h4 className="timeline-title">Safety and Guardrails</h4>
                    <p className="timeline-text">
                      The agent uses confidence thresholds and protections for sensitive classes such as people, pets, and
                      favorites. The output is a likely-delete review queue, not automatic deletion.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h6 className="timeline-date">
                      <i className="fa fa-repeat" /> Operational Model
                    </h6>
                    <h4 className="timeline-title">Operational Model</h4>
                    <p className="timeline-text">
                      Designed for repeatable operation with launchd scheduling, batch controls, and persistent state artifacts
                      to support reliable incremental runs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 18 }}>
            <a href="/portfolio" className="btn">
              Back to Fun: AI Projects
            </a>
            <a
              href="https://github.com/jaredverbeke/openclaw-apple-photos-cleanup-agent"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#2196f3", fontWeight: 700, alignSelf: "center" }}
            >
              View Project Repo
            </a>
            <a
              href="https://github.com/jaredverbeke/openclaw-apple-photos-cleanup-agent/blob/main/WHITEPAPER.md"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#2196f3", fontWeight: 700, alignSelf: "center" }}
            >
              View Whitepaper on GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

