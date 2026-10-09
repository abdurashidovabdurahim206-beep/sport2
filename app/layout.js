import "./globals.css";

export const metadata = {
  title: "Sog‘lom Hayot",
  description:
    "Sport, sog‘liq va kundalik progress platformasi",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="uz">
      <body className="page-bg">
        <div className="layout-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}