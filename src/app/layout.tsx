import Header from "@/components/Header";
import "./globals.css";
import Stories from "@/components/Stories/Stories";

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
        {/* STORIES */}
        <Stories />
        {children}
      </body>
    </html>
  );
}
