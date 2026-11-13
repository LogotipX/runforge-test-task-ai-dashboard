"use client";

import { Run } from "@/shared/types/ai-runs";
import { useEffect, useState } from "react";
import { fetchRuns } from "./api/fetchRuns";
import RunsTable from "@/app/widgets/RunsTable";

export default function RunsPage() {
  const [runs, setRuns] = useState<Run[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRuns()
      .then((fetchedRuns) => {
        setRuns(fetchedRuns);
      })
      .catch(() => {
        setRuns([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
        aria-busy={isLoading}
      >
        <h2 id="recent-runs-title" className="section-title">
          RECENT RUNS
        </h2>

        <RunsTable runs={runs} isLoading={isLoading} />
      </section>

      <footer className="dashboard-footer">
        <span>ISOLATED RUNTIME</span>
        <span>LOGS · DIFF · PREVIEW</span>
      </footer>
    </section>
  );
}
