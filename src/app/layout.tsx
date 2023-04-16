import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-full">
        {/* HEADER */}
        <Header />
        {children}
      </body>
    </html>
  );
}
