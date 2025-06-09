import React from "react";

function LandingPage({ onExploreMap }) {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem", minHeight: "100vh" }}>
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#1976d2", marginBottom: "1rem" }}>
          PFAS in India: Understanding Forever Chemicals
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Exploring contamination, health risks, and environmental impact across Indian water sources
        </p>
      </header>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ color: "#1976d2", borderBottom: "2px solid #1976d2", paddingBottom: "0.5rem" }}>
          What are PFAS?
        </h2>
        <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          <strong>PFAS</strong> (Per- and polyfluoroalkyl substances) are a group of synthetic chemicals known as 
          "forever chemicals" because they do not break down easily in the environment or the human body [7]. 
          They contain strong carbon-fluorine bonds that make them extremely persistent and resistant to degradation [7].
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ color: "#1976d2", borderBottom: "2px solid #1976d2", paddingBottom: "0.5rem" }}>
          History & Origins
        </h2>
        <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          PFAS were first developed in the 1940s by companies like DuPont and 3M for their unique properties 
          of resistance to heat, water, and oil [7]. The discovery began accidentally in 1938 when Roy Plunkett 
          discovered PTFE (Teflon) [7]. Since then, thousands of PFAS compounds have been developed for various 
          industrial and consumer applications [7].
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ color: "#1976d2", borderBottom: "2px solid #1976d2", paddingBottom: "0.5rem" }}>
          Common Uses
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
          <ul style={{ fontSize: "1.1rem" }}>
            <li style={{ margin: "0.5rem 0" }}>Non-stick cookware (Teflon)</li>
            <li style={{ margin: "0.5rem 0" }}>Water-resistant clothing</li>
            <li style={{ margin: "0.5rem 0" }}>Firefighting foams (AFFF)</li>
            <li style={{ margin: "0.5rem 0" }}>Food packaging materials</li>
          </ul>
          <ul style={{ fontSize: "1.1rem" }}>
            <li style={{ margin: "0.5rem 0" }}>Cosmetics and personal care</li>
            <li style={{ margin: "0.5rem 0" }}>Electronics manufacturing</li>
            <li style={{ margin: "0.5rem 0" }}>Aerospace applications</li>
            <li style={{ margin: "0.5rem 0" }}>Industrial lubricants</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ color: "#d32f2f", borderBottom: "2px solid #d32f2f", paddingBottom: "0.5rem" }}>
          Health Risks & Side Effects
        </h2>
        <div style={{ backgroundColor: "#ffebee", padding: "1.5rem", borderRadius: "8px", marginTop: "1rem" }}>
          <ul style={{ fontSize: "1.1rem" }}>
            <li style={{ margin: "0.7rem 0" }}>
              <strong>Cancer:</strong> Linked to liver, kidney, and testicular cancers
            </li>
            <li style={{ margin: "0.7rem 0" }}>
              <strong>Immune System:</strong> Suppression and reduced vaccine efficacy
            </li>
            <li style={{ margin: "0.7rem 0" }}>
              <strong>Liver Damage:</strong> Including nonalcoholic fatty liver disease
            </li>
            <li style={{ margin: "0.7rem 0" }}>
              <strong>Hormonal Disruption:</strong> Affects thyroid and reproductive health
            </li>
            <li style={{ margin: "0.7rem 0" }}>
              <strong>Developmental Effects:</strong> Impacts on children and prenatal development
            </li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ color: "#ff6f00", borderBottom: "2px solid #ff6f00", paddingBottom: "0.5rem" }}>
          PFAS Contamination in India
        </h2>
        <div style={{ backgroundColor: "#fff3e0", padding: "1.5rem", borderRadius: "8px", marginTop: "1rem" }}>
          <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
            Recent studies have revealed alarming levels of PFAS contamination across major Indian water sources [7]:
          </p>
          <ul style={{ fontSize: "1.1rem" }}>
            <li style={{ margin: "0.7rem 0" }}>
              <strong>Chennai:</strong> PFAS levels up to 19,400 times higher than EPA safety standards
            </li>
            <li style={{ margin: "0.7rem 0" }}>
              <strong>Ganges River:</strong> Contamination detected across multiple states
            </li>
            <li style={{ margin: "0.7rem 0" }}>
              <strong>Groundwater:</strong> Deep aquifer contamination in Assam and West Bengal
            </li>
            <li style={{ margin: "0.7rem 0" }}>
              <strong>Urban Areas:</strong> Mumbai, Bengaluru, and Delhi showing significant contamination
            </li>
          </ul>
          <p style={{ fontSize: "1.1rem", marginTop: "1rem", fontStyle: "italic" }}>
            Currently, India lacks comprehensive PFAS regulations, making public awareness and monitoring crucial [7].
          </p>
        </div>
      </section>

      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <button
          onClick={onExploreMap}
          style={{
            background: "linear-gradient(135deg, #1976d2, #42a5f5)",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "1rem 3rem",
            fontSize: "1.3rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(25, 118, 210, 0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
            transform: "translateY(0)"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 25px rgba(25, 118, 210, 0.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 20px rgba(25, 118, 210, 0.3)";
          }}
        >
          🗺️ Explore Interactive Map
        </button>
        <p style={{ marginTop: "1rem", color: "#666", fontSize: "1rem" }}>
          Click to view contamination data across Indian water sources
        </p>
      </section>
    </div>
  );
}

export default LandingPage;
