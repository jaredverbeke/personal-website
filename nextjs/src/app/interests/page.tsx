export default function Interests() {
  return (
    <main>
      <section className="section" id="interests">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Interests and Writing</h2>
              <p style={{ marginTop: 12, marginBottom: 0, color: "#504e70" }}>
                Topics I am actively learning, testing, and writing about.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              padding: "0 15px",
              marginTop: 20,
            }}
          >
            <div className="shadow-dark" style={{ background: "#fff", borderRadius: 12, padding: 18 }}>
              <h3 style={{ margin: "0 0 10px", color: "#302e4d" }}>Current Interests</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "#504e70", lineHeight: "25px" }}>
                <li>AI for contract lifecycle optimization</li>
                <li>Operational design for high-growth teams</li>
                <li>Decision frameworks for cross-functional execution</li>
              </ul>
            </div>

            <div className="shadow-dark" style={{ background: "#fff", borderRadius: 12, padding: 18 }}>
              <h3 style={{ margin: "0 0 10px", color: "#302e4d" }}>Recent Posts</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "#504e70", lineHeight: "25px" }}>
                <li>
                  Designing CLM Workflows That Scale <span style={{ color: "#7d7d7d" }}>- Mar 2026</span>
                </li>
                <li>
                  Where AI Agents Fit in RevOps <span style={{ color: "#7d7d7d" }}>- Feb 2026</span>
                </li>
                <li>
                  Building Trust in Automation Rollouts <span style={{ color: "#7d7d7d" }}>- Jan 2026</span>
                </li>
              </ul>
            </div>

            <div className="shadow-dark" style={{ background: "#fff", borderRadius: 12, padding: 18 }}>
              <h3 style={{ margin: "0 0 10px", color: "#302e4d" }}>Books</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "#504e70", lineHeight: "25px" }}>
                <li>Thinking in Systems by Donella H. Meadows</li>
                <li>Measure What Matters by John Doerr</li>
                <li>High Output Management by Andrew S. Grove</li>
              </ul>
            </div>
          </div>

          <div
            className="shadow-dark"
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: 18,
              marginTop: 16,
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            <h3 style={{ margin: "0 0 10px", color: "#302e4d" }}>Hobbies</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: "#504e70", lineHeight: "25px" }}>
              <li>Competitive cycling and endurance training</li>
              <li>Gravel route planning and pacing strategy</li>
              <li>Data-driven performance tracking</li>
            </ul>

            <div style={{ marginTop: 16 }}>
              <p style={{ fontWeight: 700, color: "#302e4d", marginBottom: 10 }}>Strava Overview</p>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                <iframe
                  height="454"
                  width="300"
                  frameBorder="0"
                  allowTransparency={true}
                  scrolling="no"
                  title="Strava latest rides"
                  src="https://www.strava.com/athletes/1764516/latest-rides/f0979d88644cc49997edb9b0f26f4a62f33bf73f"
                ></iframe>

                <iframe
                  height="160"
                  width="300"
                  frameBorder="0"
                  allowTransparency={true}
                  scrolling="no"
                  title="Strava activity summary"
                  src="https://www.strava.com/athletes/1764516/activity-summary/f0979d88644cc49997edb9b0f26f4a62f33bf73f"
                ></iframe>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14, justifyContent: "center" }}>
                <a
                  href="https://www.strava.com/athletes/1764516"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#2196f3", fontWeight: 700 }}
                >
                  View Strava Profile
                </a>
                <a
                  href="https://www.strava.com/athletes/1764516#interval?interval=recently-active"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#2196f3", fontWeight: 700 }}
                >
                  Recent Activity
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

