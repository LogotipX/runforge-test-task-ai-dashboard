import { Run } from "@/shared/types/ai-runs";
import { MockRuns } from "../mock/runs";

export async function fetchRuns(): Promise<Run[]> {
  return await new Promise((res) => setTimeout(() => res([...MockRuns]), 1000));
}
