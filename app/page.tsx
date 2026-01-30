const projects = [
  {
    name: "PrimeScout",
    desc: "Amazon liquidation lookup",
    href: "https://lpnfinder.vercel.app/",
    logo: "/primescout.png",
  },
  {
    name: "ClubScout",
    desc: "Sam’s Club liquidation lookup",
    href: "https://clubscout-lilac.vercel.app/",
    logo: "/clubscout.png",
  },
  {
    name: "Retailogic",
    desc: "Ops + internal tooling suite",
    href: "https://www.retailogic.dev/",
    logo: "/RETAILogic.png",
  },
];

export default function Page() {
  return (
    <main
      style={{
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        minHeight: "100vh",
        padding: 28,
        background:
          "radial-gradient(1200px 700px at 10% 10%, #f4f6ff 0%, #ffffff 55%)",
      }}
    >
      <div style={{ maxWidth: 1050, margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: 28 }}>Internal Projects</h1>
            <p style={{ marginTop: 8, color: "#555" }}>
              Quick links for your dev tools.
            </p>
          </div>

        </header>

        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                border: "1px solid #e8e8e8",
                borderRadius: 16,
                padding: 16,
                background: "#fff",
                boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                transition: "transform 120ms ease",
              }}
            >
<div
  style={{
    aspectRatio: "1 / 1",
    borderRadius: 16,
    border: "1px solid #f0f0f0",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
  }}
>
  <img
    src={p.logo}
    alt={p.name}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
  />
</div>


              <h2 style={{ margin: "12px 0 6px 0", fontSize: 18 }}>
                {p.name}
              </h2>
              <div style={{ color: "#666", fontSize: 14 }}>{p.desc}</div>

              <div
                style={{
                  marginTop: 12,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 13,
                  color: "#0b57d0",
                }}
              >
                <span>Open</span>
                <span aria-hidden>→</span>
              </div>

              <div
                style={{
                  marginTop: 10,
                  fontSize: 12,
                  color: "#777",
                  wordBreak: "break-word",
                }}
              >
                {p.href}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

