export default function LoginPage() {
  return (
    <main
      style={{
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        padding: 32,
        maxWidth: 520,
        margin: "0 auto",
      }}
    >
      <h1 style={{ margin: 0 }}>Restricted</h1>
      <p style={{ color: "#555", marginTop: 8 }}>
        This page is password protected.
      </p>
      <p style={{ marginTop: 8 }}>
        <b>If you don't know the password ask your manager.</b>
      </p>

      <form action="/api/login" method="POST" style={{ marginTop: 18 }}>
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          autoFocus
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            border: "1px solid #ddd",
            fontSize: 16,
          }}
        />
        <button
          type="submit"
          style={{
            marginTop: 12,
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
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
    </main>
  );
}
