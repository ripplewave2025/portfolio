interface GitHubRepo {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}

export const revalidate = 120; // cache 2 min

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const u = searchParams.get("u") || "ripplewave2025";
  const url = `https://api.github.com/users/${u}/repos?sort=updated&per_page=100`;
  const headers: Record<string, string> = {};
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const r = await fetch(url, { headers, next: { revalidate } });
  if (!r.ok) return new Response(JSON.stringify({ error: "GitHub fetch failed" }), { status: 500 });
  const json = await r.json();
  const data = json.map((repo: GitHubRepo) => ({
    name: repo.name,
    url: repo.html_url,
    desc: repo.description,
    stars: repo.stargazers_count,
  }));
  return Response.json(data);
}
