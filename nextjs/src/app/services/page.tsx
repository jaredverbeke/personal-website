import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <section className="service section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Work: AI Projects</h2>
            <p style={{ marginTop: 12, marginBottom: 0, color: "#504e70" }}>
              Business-first systems built to improve CLM reliability, approval velocity, and operating consistency.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <p style={{ fontWeight: 700, color: "#2196f3", margin: 0, marginBottom: 12 }}>
                AI + CLM
              </p>
              <h4>Clause Risk Agent</h4>
              <p>
                Identifies risky contract language and routes agreements to legal reviewers based on policy thresholds.
              </p>
              <div style={{ marginTop: 12, textAlign: "left", color: "#504e70", lineHeight: "25px" }}>
                <div>
                  <strong>Business problem:</strong> inconsistent risk triage
                </div>
                <div>
                  <strong>Approach:</strong> rule-backed extraction and scoring
                </div>
                <div>
                  <strong>Outcome:</strong> faster legal escalation readiness
                </div>
              </div>
            </div>
          </div>

          <div className="service-item padd-15">
            <div className="service-item-inner">
              <p style={{ fontWeight: 700, color: "#2196f3", margin: 0, marginBottom: 12 }}>
                Operations
              </p>
              <h4>Workflow Optimizer</h4>
              <p>
                Maps bottlenecks across approval chains and recommends process simplification opportunities by stage.
              </p>
              <div style={{ marginTop: 12, textAlign: "left", color: "#504e70", lineHeight: "25px" }}>
                <div>
                  <strong>Business problem:</strong> avoidable handoff delays
                </div>
                <div>
                  <strong>Approach:</strong> stage-level throughput analysis
                </div>
                <div>
                  <strong>Outcome:</strong> cleaner ownership and faster movement
                </div>
              </div>
            </div>
          </div>

          <div className="service-item padd-15">
            <div className="service-item-inner">
              <p style={{ fontWeight: 700, color: "#2196f3", margin: 0, marginBottom: 12 }}>
                Revenue Ops
              </p>
              <h4>Deal Desk Copilot</h4>
              <p>
                Supports pricing and policy checks so complex deals move forward with less manual back-and-forth.
              </p>
              <div style={{ marginTop: 12, textAlign: "left", color: "#504e70", lineHeight: "25px" }}>
                <div>
                  <strong>Business problem:</strong> fragmented approval logic
                </div>
                <div>
                  <strong>Approach:</strong> guided decision support flow
                </div>
                <div>
                  <strong>Outcome:</strong> improved seller response time
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
