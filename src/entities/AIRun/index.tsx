import { Run, RunStatus } from "@/shared/types/ai-runs";
import "./ui/styles.scss";

const statusClassMap: Record<RunStatus, string> = {
  [RunStatus.queued]: "status-badge--queued",
  [RunStatus.running]: "status-badge--running",
  [RunStatus.succeeded]: "status-badge--succeeded",
  [RunStatus.failed]: "status-badge--failed",
};

export default function AIRun(Job: Run) {
  return (
    <>
      <td scope="RUN">{Job.name}</td>
      <td scope="REPO">{Job.repository}</td>
      <td scope="BRANCH">{Job.branch}</td>

      <td scope="STATUS">
        <span className={`status-badge ${statusClassMap[Job.status]}`}>
          {Job.status}
        </span>
      </td>
    </>
  );
}
