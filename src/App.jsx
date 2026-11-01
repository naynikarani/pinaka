import { useState } from "react";
import "./App.css";

const findings = [
  { name: "Public storage bucket", resource: "storage-prod-01", severity: "Critical", status: "Open" },
  { name: "Over-permissive IAM role", resource: "admin-role-dev", severity: "High", status: "Open" },
  { name: "Unencrypted database", resource: "customer-db", severity: "Medium", status: "Review" },
  { name: "Unrestricted network access", resource: "web-server-02", severity: "High", status: "Open" },
];

const navigation = ["Overview", "Findings", "Attack Paths", "AI Recommendations", "Fix Simulation"];

function App() {
  const [active, setActive] = useState("Overview");

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">C</div>
          <div>
            <h2>CloudGuard<span> AI</span></h2>
            <small>SECURITY INTELLIGENCE</small>
          </div>
        </div>

        <div className="workspace">
          <small>WORKSPACE</small>
          <div className="workspace-name">◈  Demo Cloud Environment</div>
        </div>

        <p className="nav-label">MAIN MENU</p>
        <nav>
          {navigation.map((item, index) => (
            <button
              key={item}
              className={active === item ? "nav-item active" : "nav-item"}
              onClick={() => setActive(item)}
            >
              <span>{["▦", "⚑", "⌘", "✧", "◉"][index]}</span>
              {item}
              {item === "Findings" && <b>4</b>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="online-dot"></div>
          <span>Analysis engine ready</span>
          <small>Prototype environment</small>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <span className="breadcrumb">Workspace /</span> {active}
          </div>
          <div className="top-right">
            <span className="environment">● DEMO ENVIRONMENT</span>
            <div className="avatar">CG</div>
          </div>
        </header>

        <section className="content">
          <div className="welcome">
            <div>
              <p className="eyebrow">CLOUD SECURITY POSTURE MANAGEMENT</p>
              <h1>{active === "Overview" ? "Security Overview" : active}</h1>
              <p className="subtitle">
                Monitor risks, understand attack paths, and prioritize remediation.
              </p>
            </div>
            <button className="scan-button" onClick={() => alert("Demo scan started!")}>
              ↻ &nbsp; Run Security Scan
            </button>
          </div>

          {active === "Overview" && (
            <>
              <div className="stats">
                <Stat label="Security Score" value="72" suffix="/100" note="Needs improvement" icon="◈" />
                <Stat label="Total Findings" value="24" note="Across demo resources" icon="⚑" />
                <Stat label="Critical Risks" value="03" note="Immediate attention" icon="!" />
                <Stat label="Attack Paths" value="08" note="Potential risk chains" icon="⌘" />
              </div>

              <div className="section-heading">
                <div>
                  <h2>Attack Path Visualization</h2>
                  <p>Illustrative relationships between cloud resources</p>
                </div>
                <span className="live-tag">● DEMO GRAPH</span>
              </div>

              <div className="graph-panel">
                <div className="graph-legend">
                  <span><i className="green"></i> Low risk</span>
                  <span><i className="yellow"></i> Medium risk</span>
                  <span><i className="red"></i> High risk</span>
                </div>
                <svg viewBox="0 0 850 300" className="graph" role="img" aria-label="Illustrative cloud resource relationship graph">
                  <defs>
                    <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="#26374c" />
                    </pattern>
                  </defs>
                  <rect width="850" height="300" fill="url(#dots)" />
                  <path className="edge risk-edge" d="M130 145 L310 145 L490 75 L700 145" />
                  <path className="edge safe-edge" d="M310 145 L490 230 L700 145" />
                  <path className="edge" d="M130 145 L310 245" />
                  <Node x="130" y="145" label="Internet" sub="External" type="red" />
                  <Node x="310" y="145" label="Web Server" sub="Compute" type="yellow" />
                  <Node x="490" y="75" label="IAM Role" sub="Identity" type="red" />
                  <Node x="700" y="145" label="Storage" sub="Data" type="red" />
                  <Node x="310" y="245" label="Firewall" sub="Network" type="green" />
                  <Node x="490" y="230" label="Database" sub="Data" type="yellow" />
                </svg>
                <div className="graph-footer">
                  <span>6 sample resources connected</span>
                  <span>Attack paths are illustrative, not live findings</span>
                </div>
              </div>

              <div className="bottom-grid">
                <div className="panel">
                  <div className="panel-title">
                    <div><h2>Recent Findings</h2><p>Issues requiring attention</p></div>
                    <button onClick={() => setActive("Findings")}>View all →</button>
                  </div>
                  {findings.slice(0, 3).map((item) => (
                    <div className="finding-row" key={item.name}>
                      <div className="finding-symbol">⚑</div>
                      <div className="finding-info">
                        <strong>{item.name}</strong>
                        <small>{item.resource}</small>
                      </div>
                      <span className={`severity ${item.severity.toLowerCase()}`}>{item.severity}</span>
                    </div>
                  ))}
                </div>

                <div className="panel recommendation">
                  <div className="ai-label">✧ AI INSIGHT</div>
                  <h2>Recommended Action</h2>
                  <p className="recommendation-main">Review public access to your storage bucket.</p>
                  <p className="recommendation-text">
                    Public storage access may expose sensitive data. Review the bucket's access policy and restrict access where appropriate.
                  </p>
                  <button onClick={() => setActive("AI Recommendations")}>Explore recommendation →</button>
                </div>
              </div>
            </>
          )}

          {active === "Findings" && (
            <div className="panel page-panel">
              <h2>Security Findings</h2>
              <p>Sample findings from the demo environment.</p>
              {findings.map((item) => (
                <div className="finding-row" key={item.name}>
                  <div className="finding-symbol">⚑</div>
                  <div className="finding-info"><strong>{item.name}</strong><small>{item.resource}</small></div>
                  <span className={`severity ${item.severity.toLowerCase()}`}>{item.severity}</span>
                  <span className="status">{item.status}</span>
                </div>
              ))}
            </div>
          )}

          {active === "Attack Paths" && (
            <div className="panel page-panel">
              <h2>Attack Path Analysis</h2>
              <p>Illustrative risk chain for the demo environment.</p>
              <div className="path-chain">
                {["Internet", "Web Server", "IAM Role", "Storage Bucket"].map((item, i) => (
                  <div className="path-step" key={item}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                    {i !== 3 && <b>→</b>}
                  </div>
                ))}
              </div>
              <p className="muted">This is a sample path for UI demonstration, not a verified exploit path.</p>
            </div>
          )}

          {active === "AI Recommendations" && (
            <div className="panel page-panel">
              <div className="ai-label">✧ AI SECURITY ASSISTANT</div>
              <h2>Prioritized Recommendations</h2>
              <div className="recommendation-item"><b>01 · Restrict public storage access</b><p>Review access policies and allow only intended users and services.</p></div>
              <div className="recommendation-item"><b>02 · Apply least privilege to IAM</b><p>Review permissions and remove unnecessary access.</p></div>
              <div className="recommendation-item"><b>03 · Review database encryption</b><p>Check encryption settings and applicable security requirements.</p></div>
            </div>
          )}

          {active === "Fix Simulation" && (
            <div className="panel page-panel">
              <h2>Fix Simulation</h2>
              <p>Preview a proposed security improvement using sample data.</p>
              <div className="simulation-box">
                <span className="severity critical">CRITICAL</span>
                <h3>Restrict public storage access</h3>
                <p>Proposed change: update the sample bucket policy to remove public access.</p>
                <button className="scan-button" onClick={() => alert("Demo only: no cloud settings were changed.")}>Preview simulated fix</button>
                <small>No real cloud resources will be modified.</small>
              </div>
            </div>
          )}

          <footer>CloudGuard AI · Hackathon Prototype · Sample data only</footer>
        </section>
      </main>
    </div>
  );
}

function Stat({ label, value, suffix, note, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-top"><span>{label}</span><i>{icon}</i></div>
      <div className="stat-value">{value}<small>{suffix}</small></div>
      <p>{note}</p>
    </div>
  );
}

function Node({ x, y, label, sub, type }) {
  return (
    <g>
      <rect x={x - 65} y={y - 29} width="130" height="58" rx="10" className={`node node-${type}`} />
      <circle cx={x - 48} cy={y} r="4" className={`node-dot dot-${type}`} />
      <text x={x - 35} y={y - 3} className="node-label">{label}</text>
      <text x={x - 35} y={y + 13} className="node-sub">{sub}</text>
    </g>
  );
}

export default App;
