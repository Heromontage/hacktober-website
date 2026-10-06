const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "API request failed");
  }

  return data;
}

export async function getCurrentUser() {
  return apiFetch<{
    username: string;
    avatarUrl: string;
    totalScore: number;
    prCount: number;
    role: string;
  }>("/auth/me");
}

export type LeaderboardUser = {
  rank: number;
  username: string;
  avatarUrl: string;
  totalScore: number;
  prCount: number;
};

export type LeaderboardResponse = {
  users: LeaderboardUser[];
  page: number;
  limit: number;
  total: number;
};

export async function getLeaderboard(
  page = 1,
  limit = 10
): Promise<LeaderboardResponse> {
  return apiFetch<LeaderboardResponse>(
    `/leaderboard?page=${page}&limit=${limit}`
  );
}

export async function getMyRank() {
  return apiFetch<{
    rank: number | null;
    username?: string;
    avatarUrl?: string;
    totalScore?: number;
    prCount?: number;
  }>("/leaderboard/me");
}

export type Repository = {
  _id: string;
  githubOwner: string;
  githubRepo: string;
  githubRepoId: number;
  url: string;
  isActive: boolean;
};

export async function getRepositories() {
  return apiFetch<{ repositories: Repository[] }>("/repositories");
}