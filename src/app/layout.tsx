import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Instagram Clone",
  description: "A clone of the famous social media app instagram",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* HEADER */}
        <Header />
        {children}
      </body>
    </html>
  );
}
