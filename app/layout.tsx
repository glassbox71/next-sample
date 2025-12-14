import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Next.js Shop",
  description: "Simple Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="p-6 max-w-5xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

// 서버 컴포넌트
// 레이아웃 컴포넌트
// 모든 페이지에 공통으로 들어가는 컴포넌트
