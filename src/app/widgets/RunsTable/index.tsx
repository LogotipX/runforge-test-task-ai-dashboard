import AIRun from "@/entities/AIRun";
import { Run } from "@/shared/types/ai-runs";
import { useMemo, useState } from "react";
import "./ui/styles.scss";
import RunsFilter from "@/features/RunsFilter";

export default function RunsTable(props: { runs: Run[]; isLoading: boolean }) {
  const [selectedStatus, setSelectedStatus] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const skeletonRows = Array.from({ length: 3 }, (_, index) => index);

  const filteredRuns = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return props.runs.filter((run) => {
      const matchesStatus =
        selectedStatus === "ALL" || run.status === selectedStatus;
      const matchesSearch =
        normalizedQuery.length === 0 ||
        run.name.toLowerCase().includes(normalizedQuery) ||
        run.repository.toLowerCase().includes(normalizedQuery);

      return matchesStatus && matchesSearch;
    });
  }, [props.runs, searchQuery, selectedStatus]);

  return (
    <>
      <div className="runs-table-toolbar">
        <RunsFilter
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isLoading={props.isLoading}
        />
      </div>

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
          {props.isLoading ? (
            skeletonRows.map((index) => (
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
          ) : filteredRuns.length === 0 ? (
            <tr>
              <td colSpan={4} className="runs-table-empty">
                No runs found for this status.
              </td>
            </tr>
          ) : (
            filteredRuns.map((run) => (
              <tr key={run.id}>
                <AIRun {...run} />
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
