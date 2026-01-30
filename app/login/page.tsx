export default function LoginPage({
  searchParams,
}: {
  searchParams?: { ok?: string; err?: string };
}) {
  const ok = searchParams?.ok === "1";
  const err = searchParams?.err === "1";

  return (
    <main
      style={{
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        background:
          "radial-gradient(1200px 600px at 10% 10%, #f4f6ff 0%, #ffffff 55%)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 460,
          border: "1px solid #e8e8e8",
          borderRadius: 16,
          padding: 20,
          boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
          background: "#fff",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 24 }}>Internal Projects</h1>
        <p style={{ marginTop: 8, color: "#555", lineHeight: 1.4 }}>
          This page is password protected.
          <br />
          <b>If you don&apos;t know the password ask your manager.</b>
        </p>

        {err && (
          <div
            style={{
              marginTop: 10,
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid #ffd1d1",
              background: "#fff5f5",
              color: "#8a0000",
              fontSize: 14,
            }}
          >
            Incorrect password. Please try again.
          </div>
        )}

        {ok && (
          <>
            {/* Force “refresh” navigation after cookie is set */}
            <meta httpEquiv="refresh" content="0; url=/" />
            <div
              style={{
                marginTop: 10,
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid #d6f5d6",
                background: "#f4fff4",
                color: "#0f5a0f",
                fontSize: 14,
              }}
            >
              Access granted… redirecting.
            </div>
          </>
        )}

        <form action="/api/login" method="POST" style={{ marginTop: 14 }}>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            autoFocus
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid #ddd",
              fontSize: 16,
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              marginTop: 10,
              width: "100%",
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid #111",
              background: "#111",
              color: "#fff",
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Unlock
          </button>
        </form>
      </div>
    </main>
  );
}

