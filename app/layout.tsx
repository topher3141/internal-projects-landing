export const metadata = {
  title: "Internal Projects",
  description: "Internal landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#fff",
          color: "#111",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
