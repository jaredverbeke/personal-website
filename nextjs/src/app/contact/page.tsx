import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <section className="section" id="resume">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Resume Snapshot</h2>
            <p style={{ marginTop: 12, marginBottom: 0, color: "#504e70" }}>
              Highlights from my background in CLM operations, systems, and delivery.
            </p>
          </div>
        </div>

        <div
          className="row"
          style={{
            padding: "0 15px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              width: "100%",
            }}
          >
            <div className="shadow-dark" style={{ background: "#fff", borderRadius: 12, padding: 18 }}>
              <h3 style={{ margin: "0 0 10px", color: "#302e4d" }}>Core Strengths</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "#504e70", lineHeight: "25px" }}>
                <li>DocuSign CLM administration and process architecture</li>
                <li>Business operations strategy and cross-functional execution</li>
                <li>Workflow design, automation, and process governance</li>
                <li>Stakeholder communication and change enablement</li>
              </ul>
            </div>

            <div className="shadow-dark" style={{ background: "#fff", borderRadius: 12, padding: 18 }}>
              <h3 style={{ margin: "0 0 10px", color: "#302e4d" }}>Tools and Platforms</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "#504e70", lineHeight: "25px" }}>
                <li>DocuSign CLM</li>
                <li>Salesforce ecosystem and adjacent tooling</li>
                <li>Workflow orchestration and analytics tools</li>
                <li>AI-assisted operations tooling</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 18 }}>
          <a
            href="mailto:jaredverbeke@gmail.com?subject=Resume%20Request"
            className="btn"
          >
            Request Resume
          </a>
          <a href="mailto:jaredverbeke@gmail.com" className="btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
