function Sidebar({ site, onClose }) {
  if (!site) return null;

  return (
    <div
      style={{
        width: 320,
        background: "#fff",
        borderLeft: "1px solid #eee",
        overflowY: "auto",
        boxShadow: "-2px 0 8px rgba(0,0,0,0.05)",
        height: "100vh",
        padding: 16,
        position: "relative",
        zIndex: 1000,
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          background: "#eee",
          border: "none",
          borderRadius: "50%",
          width: 32,
          height: 32,
          fontSize: 18,
          cursor: "pointer"
        }}
        title="Close"
      >
        ×
      </button>
      <h2>{site.name}</h2>
      <div><b>Risk Level:</b> {site.riskLevel}</div>
      <div><b>Water Source:</b> {site.waterSource}</div>
      <div><b>Population Affected:</b> {site.populationAffected}</div>
      <div><b>Last Tested:</b> {site.lastTested}</div>
      <h3>PFAS Levels (ng/L)</h3>
      <ul>
        {Object.entries(site.pfasLevels).map(([compound, value]) => (
          <li key={compound}>{compound}: {value}</li>
        ))}
      </ul>
      {site.epaComparison && (
        <>
          <h4>EPA Comparison</h4>
          <ul>
            {Object.entries(site.epaComparison).map(([compound, value]) =>
              compound !== "status" && <li key={compound}>{compound}: {value}</li>
            )}
          </ul>
          <div><b>Status:</b> {site.epaComparison.status}</div>
        </>
      )}
      <div style={{ marginTop: 16, fontSize: "0.9em" }}>
        <b>Source:</b> {site.source}
      </div>
    </div>
  );
}

export default Sidebar;
