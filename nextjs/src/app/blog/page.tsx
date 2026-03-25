import type { NextPage } from "next";

const Blog: NextPage = () => {
  return (
    <section className="about section" id="accomplishments">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Accomplishments</h2>
            <p style={{ marginTop: 12, marginBottom: 0, color: "#504e70" }}>
              Examples of execution, ownership, and measurable impact across operations and systems.
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
                    <i className="fa fa-calendar" /> 2026
                  </h6>
                  <h4 className="timeline-title">
                    Improved contract intake and routing consistency
                  </h4>
                  <p className="timeline-text">
                    Standardized intake logic and reduced rework caused by missing or mismatched submission details.
                  </p>
                </div>

                <div className="timeline-item">
                  <div className="circle-dot" />
                  <h6 className="timeline-date">
                    <i className="fa fa-calendar" /> 2025
                  </h6>
                  <h4 className="timeline-title">
                    Built CLM governance standards for scale
                  </h4>
                  <p className="timeline-text">
                    Introduced cleaner templates, naming conventions, and control points to support reliable growth.
                  </p>
                </div>

                <div className="timeline-item">
                  <div className="circle-dot" />
                  <h6 className="timeline-date">
                    <i className="fa fa-calendar" /> 2025
                  </h6>
                  <h4 className="timeline-title">
                    Launched automation pilots for business operations
                  </h4>
                  <p className="timeline-text">
                    Delivered initial agent workflows to remove repetitive tasks and free teams for higher-value work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
