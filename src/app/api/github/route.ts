export const revalidate = 120;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const u = searchParams.get("u") ?? "ripplewave2025";
  const url = `https://api.github.com/users/${u}/repos?sort=updated&per_page=100`;

  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const r = await fetch(url, { headers, next: { revalidate } });
  if (!r.ok) {
    return Response.json({ error: `GitHub ${r.status}` }, { status: 500 });
  }

  const json = await r.json();
  const data = (Array.isArray(json) ? json : []).map((repo: any) => ({
    name: repo.name,
    url: repo.html_url,
    desc: repo.description,
    stars: repo.stargazers_count,
  }));

  return Response.json(data);
}
