import { Run } from "@/shared/types/ai-runs";

export default function AIRun(Job: Run) {
  return (
    <>
      <td scope="col">{Job.name}</td>
      <td scope="col">{Job.repository}</td>
      <td scope="col">{Job.branch}</td>

      <td scope="col">
        <span className="status-badge">{Job.status}</span>
      </td>
    </>
  );
}
