export type PublicApiError = {
  kind: "configuration" | "network" | "http" | "timeout";
  message: string;
  status?: number;
};

export type PublicApiResult<T> = { ok: true; data: T } | { ok: false; error: PublicApiError };

/** Server-only boundary for future approved public Mova API calls. */
export async function publicApiRequest<T>(path: string, init?: RequestInit): Promise<PublicApiResult<T>> {
  const baseUrl = process.env.MOVA_API_BASE_URL;
  if (!baseUrl) return { ok: false, error: { kind: "configuration", message: "Public API is not configured." } };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const response = await fetch(new URL(path, baseUrl), { ...init, signal: controller.signal, headers: { accept: "application/json", ...init?.headers } });
    if (!response.ok) return { ok: false, error: { kind: "http", message: "The public service did not respond successfully.", status: response.status } };
    return { ok: true, data: await response.json() as T };
  } catch (error) {
    return { ok: false, error: { kind: error instanceof DOMException && error.name === "AbortError" ? "timeout" : "network", message: "The public service is temporarily unavailable." } };
  } finally {
    clearTimeout(timeout);
  }
}
