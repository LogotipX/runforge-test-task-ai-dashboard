import { formatReadableDate } from "@/shared/helpers/dataFormat";
import { Run } from "@/shared/types/ai-runs";

export default function RunModalWindow(props: {
  selectedRun: Run;
  closeModalWindow: () => void;
}) {
  const createdAtLabel = formatReadableDate(props.selectedRun.createdAt);

  return (
    <div
      className="run-modal-backdrop"
      onClick={() => props.closeModalWindow()}
    >
      <div
        className="run-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="run-modal-title"
      >
        <div className="run-modal-header">
          <h3 id="run-modal-title">{props.selectedRun.name}</h3>
          <button
            type="button"
            className="run-modal-close"
            onClick={() => props.closeModalWindow()}
            aria-label="Close run details"
          >
            ×
          </button>
        </div>

        <dl className="run-modal-list">
          <div>
            <dt>ID</dt>
            <dd>{props.selectedRun.id}</dd>
          </div>
          <div>
            <dt>Repository</dt>
            <dd>{props.selectedRun.repository}</dd>
          </div>
          <div>
            <dt>Branch</dt>
            <dd>{props.selectedRun.branch}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>
              <span
                className={`status-badge status-badge--${props.selectedRun.status.toLowerCase()}`}
              >
                {props.selectedRun.status}
              </span>
            </dd>
          </div>
          <div>
            <dt>Created at</dt>
            <dd>{createdAtLabel}</dd>
          </div>
          <div>
            <dt>Duration</dt>
            <dd>{props.selectedRun.durationSeconds ?? 0} seconds</dd>
          </div>
          <div>
            <dt>Result</dt>
            <dd>{props.selectedRun.result ?? "—"}</dd>
          </div>
          <div>
            <dt>Logs</dt>
            <dd>
              {props.selectedRun.logs.length
                ? props.selectedRun.logs.join(" | ")
                : "No logs available"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
