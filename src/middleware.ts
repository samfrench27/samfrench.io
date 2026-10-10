import { NextResponse, type NextRequest } from 'next/server';

// Temporary holding page. While this file exists, every route returns the page below with
// HTTP 503 + Retry-After, the standard signal for "temporarily unavailable", so search engines
// keep the existing index instead of treating this as new content.
// To bring the site back: delete this file (or `git revert` the commit that added it).

const HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sam French | Back soon</title>
<meta name="description" content="Sam French is rebuilding his website. Back soon.">
<meta name="theme-color" content="#060a12">
<style>
  :root { --bg:#060a12; --ink:#f3f6fb; --muted:#b4bfd0; --accent:#a8cdff; --line:rgba(255,255,255,.16); }
  * { box-sizing:border-box; }
  html,body { height:100%; }
  body { margin:0; background:var(--bg); color:var(--ink); font:400 17px/1.7 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; -webkit-font-smoothing:antialiased; overflow-x:hidden; }
  .aurora { position:fixed; inset:0; z-index:-1; overflow:hidden; }
  .aurora i { position:absolute; border-radius:50%; filter:blur(100px); opacity:.5; animation:drift 40s ease-in-out infinite alternate; }
  .aurora i:nth-child(1){ width:58vmax; height:58vmax; background:#1d3f6e; left:-16vmax; top:-22vmax; }
  .aurora i:nth-child(2){ width:46vmax; height:46vmax; background:#2f5f86; right:-14vmax; top:18vmax; opacity:.4; animation-duration:52s; animation-delay:-8s; }
  .aurora i:nth-child(3){ width:40vmax; height:40vmax; background:#1f4a52; left:22vmax; bottom:-24vmax; opacity:.38; animation-duration:60s; animation-delay:-14s; }
  @keyframes drift { to { transform:translate(4vmax,3vmax) scale(1.08); } }
  main { min-height:100%; display:grid; place-items:center; padding:24px; }
  .card { width:min(560px,100%); padding:clamp(28px,6vw,48px); border-radius:26px; background:linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.035)); border:1px solid var(--line);
    -webkit-backdrop-filter:blur(22px) saturate(170%); backdrop-filter:blur(22px) saturate(170%); box-shadow:inset 1.5px 1.5px 0 rgba(255,255,255,.35), 0 28px 70px -30px rgba(0,0,0,.8); }
  img { width:72px; height:72px; border-radius:50%; object-fit:cover; border:1px solid var(--line); display:block; }
  .eyebrow { margin:22px 0 0; font-size:13.5px; font-weight:500; letter-spacing:.02em; color:var(--accent); }
  h1 { margin:8px 0 14px; font-size:clamp(2rem,6vw,2.8rem); line-height:1.1; letter-spacing:-.03em; font-weight:650; }
  p { margin:0 0 26px; color:var(--muted); }
  .links { display:flex; flex-wrap:wrap; gap:10px; }
  .links a { display:inline-flex; align-items:center; min-height:46px; padding:0 20px; border-radius:999px; text-decoration:none; font-weight:600; font-size:15px; color:var(--ink); background:rgba(255,255,255,.08); box-shadow:inset 0 0 0 1px var(--line); transition:background .2s; }
  .links a:first-child { background:var(--accent); color:#06121f; box-shadow:none; }
  .links a:hover { background:rgba(255,255,255,.16); } .links a:first-child:hover { background:#c0dbff; }
  a:focus-visible { outline:2px solid var(--accent); outline-offset:3px; }
  @media (prefers-reduced-motion:reduce) { .aurora i { animation:none; } }
</style>
</head>
<body>
<div class="aurora" aria-hidden="true"><i></i><i></i><i></i></div>
<main>
  <section class="card">
    <img src="/profile-photo.png" width="72" height="72" alt="Portrait of Sam French">
    <p class="eyebrow">Product &amp; Technology Executive · Manchester, UK</p>
    <h1>Sam French</h1>
    <p>I’m rebuilding my website. A new version is on its way, so please check back soon. In the meantime, you’re welcome to get in touch.</p>
    <div class="links">
      <a href="mailto:sam@samfrench.io">Email me</a>
      <a href="https://www.linkedin.com/in/sam-french-359b74a8/" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/samfrench27" rel="noopener noreferrer">GitHub</a>
    </div>
  </section>
</main>
</body>
</html>`;

export function middleware(_request: NextRequest) {
  return new NextResponse(HTML, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Retry-After': '86400',
      'Cache-Control': 'no-store',
    },
  });
}

export const config = {
  // Everything except the assets the holding page itself needs (and the files crawlers look for).
  matcher: ['/((?!_next/static|_next/image|favicon|apple-touch-icon|profile-photo|robots\\.txt|site\\.webmanifest|manifest\\.json).*)'],
};
