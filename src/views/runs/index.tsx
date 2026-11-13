import AIRun from "@/entities/AIRun";
import { Run, RunStatus } from "@/shared/types/ai-runs";

const MockRuns: Run[] = [
  {
    id: "1",
    name: "Auth refactor",
    repository: "web-platform",
    branch: "main",
    status: RunStatus.running,
    createdAt: "2023-06-01T12:00:00Z",
    durationSeconds: 600,
    logs: [],
  },
  {
    id: "2",
    name: "Fix checkout tests",
    repository: "payments",
    branch: "develop",
    status: RunStatus.succeeded,
    createdAt: "2023-06-01T12:00:00Z",
    durationSeconds: 300,
    logs: [],
  },
  {
    id: "3",
    name: "Update dependencies",
    repository: "api-service",
    branch: "main",
    status: RunStatus.queued,
    createdAt: "2023-06-01T12:00:00Z",
    durationSeconds: 0,
    logs: [],
  },
];

export default function RunsPage() {
  return (
    <section className="dashboard-content" aria-label="Project runs">
      <header className="project-header">
        <p className="project-name">
          <span>PROJECT /</span> web-platform
        </p>
        <span className="live-badge">LIVE</span>
      </header>

      <section
        className="recent-runs"
        id="runs"
        aria-labelledby="recent-runs-title"
      >
        <h2 id="recent-runs-title" className="section-title">
          RECENT RUNS
        </h2>
        <table className="runs-table">
          <thead>
            <tr>
              <th scope="col">RUN</th>
              <th scope="col">REPOSITORY</th>
              <th scope="col">BRANCH</th>
              <th scope="col">STATUS</th>
            </tr>
          </thead>

          <tbody>
            {MockRuns.map((run) => (
              <tr key={run.id}>
                <AIRun {...run} />
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className="dashboard-footer">
        <span>ISOLATED RUNTIME</span>
        <span>LOGS · DIFF · PREVIEW</span>
      </footer>
    </section>
  );
}
