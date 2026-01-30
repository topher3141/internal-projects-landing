export default function Page() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial", padding: 32, maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ margin: 0 }}>Internal Projects</h1>
      <p style={{ color: "#555", marginTop: 8 }}>
        Quick links for your dev tools. (Internal use only.)
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 24 }}>
        <Card
          title="ClubScout"
          desc="Sam’s Club liquidation lookup."
          img="/clubscout.png"
          href="#"
        />
        <Card
          title="PrimeScout"
          desc="Amazon liquidation lookup."
          img="/primescout.png"
          href="#"
        />
        <Card
          title="Retailogic"
          desc="Internal ops + tooling suite."
          img={null}
          href="#"
        />
      </div>

      <p style={{ marginTop: 28, fontSize: 12, color: "#777" }}>
        Need access? If you don’t know the password ask your manager.
      </p>
    </main>
  );
}

function Card({
  title,
  desc,
  img,
  href,
}: {
  title: string;
  desc: string;
  img: string | null;
  href: string;
}) {
  return (
    <a
      href={href}
      style={{
        display: "block",
        textDecoration: "none",
        border: "1px solid #e5e5e5",
        borderRadius: 12,
        padding: 16,
        color: "inherit",
      }}
    >
      {img ? (
        <img src={img} alt={title} style={{ width: "100%", height: 140, objectFit: "contain", borderRadius: 8, background: "#fff" }} />
      ) : (
        <div style={{ height: 140, borderRadius: 8, background: "#f4f4f4", display: "flex", alignItems: "center", justifyContent: "center", color: "#666" }}>
          No logo
        </div>
      )}

      <h2 style={{ margin: "12px 0 6px 0", fontSize: 18 }}>{title}</h2>
      <div style={{ color: "#666", fontSize: 14 }}>{desc}</div>

      <div style={{ marginTop: 12, fontSize: 13, color: "#0b57d0" }}>
        Open →
      </div>
    </a>
  );
}

