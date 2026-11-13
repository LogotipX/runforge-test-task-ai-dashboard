"use client";

import AIRun from "@/entities/AIRun";
import { Run, RunStatus } from "@/shared/types/ai-runs";
import RunsFilter from "@/features/RunsFilter";
import RunModalWindow from "@/features/RunModalWindow";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import "./ui/styles.scss";

const statusOptions = ["ALL", ...Object.values(RunStatus)];

export default function RunsTable(props: { runs: Run[]; isLoading: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const rawStatus = searchParams.get("status") ?? "ALL";
  const selectedStatus = statusOptions.includes(rawStatus) ? rawStatus : "ALL";
  const [searchQuery, setSearchQuery] = useState("");

  const setSelectedStatus = (status: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (status === "ALL") {
      params.delete("status");
    } else {
      params.set("status", status);
    }

    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  };

  const [selectedRun, setSelectedRun] = useState<Run | null>(null);
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
              <tr
                key={run.id}
                onClick={() => setSelectedRun(run)}
                className="runs-table-row"
              >
                <AIRun {...run} />
              </tr>
            ))
          )}
        </tbody>
      </table>

      {selectedRun && (
        <RunModalWindow
          selectedRun={selectedRun}
          closeModalWindow={() => setSelectedRun(null)}
        />
      )}
    </>
  );
}
