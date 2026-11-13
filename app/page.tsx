export default function Home() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <h1 className="workspace-title">WORKSPACE</h1>
        <nav className="workspace-nav" aria-label="Workspace">
          <a className="nav-item nav-item-active" href="#runs" aria-current="page">Runs</a>
          <a className="nav-item" href="#projects">Projects</a>
          <a className="nav-item" href="#devboxes">Devboxes</a>
          <a className="nav-item" href="#previews">Previews</a>
          <a className="nav-item" href="#snapshots">Snapshots</a>
          <a className="nav-item nav-item-settings" href="#settings">Settings</a>
        </nav>
      </aside>

      <section className="dashboard-content" aria-label="Project runs">
        <header className="project-header">
          <p className="project-name"><span>PROJECT /</span> web-platform</p>
          <span className="live-badge">LIVE</span>
        </header>

        <section className="recent-runs" id="runs" aria-labelledby="recent-runs-title">
          <h2 id="recent-runs-title" className="section-title">RECENT RUNS</h2>
          <table className="runs-table">
            <thead>
              <tr>
                <th scope="col">RUN</th>
                <th scope="col">REPOSITORY</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Auth refactor</td>
                <td>web-platform</td>
                <td><span className="status-badge">RUNNING</span></td>
              </tr>
              <tr>
                <td>Fix checkout tests</td>
                <td>payments</td>
                <td><span className="status-badge">SUCCEEDED</span></td>
              </tr>
              <tr>
                <td>Update dependencies</td>
                <td>api-service</td>
                <td><span className="status-badge">QUEUED</span></td>
              </tr>
            </tbody>
          </table>
        </section>

        <footer className="dashboard-footer">
          <span>ISOLATED RUNTIME</span>
          <span>LOGS · DIFF · PREVIEW</span>
        </footer>
      </section>
      </main>
  );
}
