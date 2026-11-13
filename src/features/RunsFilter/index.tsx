import { RunStatus } from "@/shared/types/ai-runs";

export default function RunsFilter(props: {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  isLoading: boolean;
}) {
  const statusOptions = ["ALL", ...Object.values(RunStatus)];

  return (
    <label className="runs-filter" htmlFor="runs-status-filter">
      <span>STATUS</span>
      <select
        id="runs-status-filter"
        value={props.selectedStatus}
        onChange={(event) => props.setSelectedStatus(event.target.value)}
        disabled={props.isLoading}
        aria-label="Filter runs by status"
      >
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </label>
  );
}
