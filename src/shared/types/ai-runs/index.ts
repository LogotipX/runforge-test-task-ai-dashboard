export enum RunStatus {
  queued = "QUEUED",
  running = "RUNNING",
  succeeded = "SUCCEEDED",
  failed = "FAILED",
}

export type Run = {
  id: string;
  name: string;
  repository: string;
  branch: string;
  status: RunStatus;
  createdAt: string;
  durationSeconds?: number;
  logs: string[];
  result?: string;
};
