import { RunStatus } from "@/shared/types/ai-runs";

export default function RunsFilter(props: {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isLoading: boolean;
}) {
  const statusOptions = ["ALL", ...Object.values(RunStatus)];

  return (
    <div className="runs-filter-bar">
      <label className="runs-filter runs-filter-search" htmlFor="runs-search">
        <span>SEARCH</span>
        <input
          id="runs-search"
          type="search"
          value={props.searchQuery}
          onChange={(event) => props.setSearchQuery(event.target.value)}
          placeholder="Run name or repo"
          disabled={props.isLoading}
          aria-label="Search run by name or repository"
        />
      </label>

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
    </div>
  );
}
