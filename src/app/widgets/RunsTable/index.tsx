import AIRun from "@/entities/AIRun";
import { Run } from "@/shared/types/ai-runs";
import "./ui/styles.scss";

export default function RunsTable(props: { runs: Run[]; isLoading: boolean }) {
  const skeletonRows = Array.from({ length: 3 }, (_, index) => index);

  return (
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
        {props.isLoading
          ? skeletonRows.map((index) => (
              <tr key={`skeleton-${index}`}>
                <td>
                  <div className="skeleton skeleton-line skeleton-line-name" />
                </td>
                <td>
                  <div className="skeleton skeleton-line" />
                </td>
                <td>
                  <div className="skeleton skeleton-line" />
                </td>
                <td>
                  <div className="skeleton skeleton-pill" />
                </td>
              </tr>
            ))
          : props.runs.map((run) => (
              <tr key={run.id}>
                <AIRun {...run} />
              </tr>
            ))}
      </tbody>
    </table>
  );
}
