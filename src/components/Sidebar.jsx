import React from "react";

function Sidebar({ site, onClose }) {
  if (!site) return null;

  const sidebarStyle = {
    width: "380px",
    height: "100vh",
    background: "#fff",
    borderLeft: "1px solid #e0e0e0",
    boxShadow: "-4px 0 15px rgba(0,0,0,0.1)",
    overflowY: "auto",
    position: "relative",
    zIndex: 1000,
    fontFamily: "system-ui, sans-serif"
  };

  const headerStyle = {
    background: "linear-gradient(135deg, #1976d2, #42a5f5)",
    color: "white",
    padding: "1.5rem",
    position: "relative"
  };

  const contentStyle = {
    padding: "1.5rem"
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "rgba(255,255,255,0.2)",
    border: "none",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    fontSize: "20px",
    color: "white",
    cursor: "pointer",
    transition: "background 0.2s"
  };

  const sectionStyle = {
    marginBottom: "1.5rem",
    padding: "1rem",
    background: "#f8f9fa",
    borderRadius: "8px",
    borderLeft: "4px solid #1976d2"
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: "0.5rem 0"
  };

  const listItemStyle = {
    padding: "0.5rem 0",
    borderBottom: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between"
  };

  const getRiskColor = (riskLevel) => {
    const level = riskLevel?.toLowerCase();
    if (level?.includes("critical") || level?.includes("high")) return "#d32f2f";
    if (level?.includes("moderate")) return "#ff6f00";
    return "#388e3c";
  };

  return (
    <div style={sidebarStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <button
          onClick={onClose}
          style={closeButtonStyle}
          onMouseOver={(e) => e.target.style.background = "rgba(255,255,255,0.3)"}
          onMouseOut={(e) => e.target.style.background = "rgba(255,255,255,0.2)"}
          title="Close sidebar"
        >
          ×
        </button>
        <h2 style={{ margin: 0, fontSize: "1.4rem", lineHeight: "1.3" }}>
          {site.name}
        </h2>
      </div>

      {/* Content */}
      <div style={contentStyle}>
        {/* Basic Information */}
        <div style={sectionStyle}>
          <h3 style={{ margin: "0 0 1rem 0", color: "#1976d2", fontSize: "1.1rem" }}>
            Site Information
          </h3>
          <div style={{ display: "grid", gap: "0.5rem" }}>
            <div>
              <strong>Risk Level:</strong>
              <span style={{ 
                color: getRiskColor(site.riskLevel), 
                fontWeight: "bold",
                marginLeft: "0.5rem"
              }}>
                {site.riskLevel}
              </span>
            </div>
            <div><strong>Water Source:</strong> {site.waterSource}</div>
            <div><strong>Population Affected:</strong> {site.populationAffected}</div>
            <div><strong>Last Tested:</strong> {site.lastTested}</div>
          </div>
        </div>

        {/* PFAS Levels */}
        <div style={sectionStyle}>
          <h3 style={{ margin: "0 0 1rem 0", color: "#1976d2", fontSize: "1.1rem" }}>
            PFAS Concentrations (ng/L)
          </h3>
          <ul style={listStyle}>
            {site.pfasLevels && Object.entries(site.pfasLevels).map(([compound, value]) => (
              <li key={compound} style={listItemStyle}>
                <span style={{ fontWeight: "500" }}>{compound}:</span>
                <span style={{ fontWeight: "bold", color: "#d32f2f" }}>{value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* EPA Comparison */}
        {site.epaComparison && (
          <div style={sectionStyle}>
            <h3 style={{ margin: "0 0 1rem 0", color: "#1976d2", fontSize: "1.1rem" }}>
              EPA Safety Comparison
            </h3>
            <ul style={listStyle}>
              {Object.entries(site.epaComparison).map(([compound, value]) =>
                compound !== "status" && (
                  <li key={compound} style={listItemStyle}>
                    <span style={{ fontWeight: "500" }}>{compound}:</span>
                    <span style={{ fontSize: "0.9rem", color: "#d32f2f" }}>{value}</span>
                  </li>
                )
              )}
            </ul>
            <div style={{
              marginTop: "1rem",
              padding: "0.75rem",
              background: "#ffebee",
              borderRadius: "6px",
              border: "1px solid #ffcdd2"
            }}>
              <strong style={{ color: "#d32f2f" }}>Status:</strong>
              <span style={{ marginLeft: "0.5rem", color: "#d32f2f" }}>
                {site.epaComparison.status}
              </span>
            </div>
          </div>
        )}

        {/* Data Source */}
        <div style={{
          marginTop: "1.5rem",
          padding: "1rem",
          background: "#e3f2fd",
          borderRadius: "8px",
          borderLeft: "4px solid #2196f3"
        }}>
          <h4 style={{ margin: "0 0 0.5rem 0", color: "#1976d2", fontSize: "1rem" }}>
            Data Source
          </h4>
          <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.4", color: "#424242" }}>
            {site.source}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
