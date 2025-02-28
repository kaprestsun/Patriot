import { ReactNode } from "react";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
      <html lang="en">
      <body className="min-h-screen bg-black text-white py-6 sm:py-8 md:py-12 lg:py-16">
        <Header />
        <main className="p-6 flex flex-col items-center justify-start">{children}</main>
      </body>
    </html>
    );
  };
export default Layout;