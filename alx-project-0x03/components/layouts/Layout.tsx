import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { PageRouteProps } from "@/interface"; // in index.tsx
import { ButtonProps } from "@/interface";    // in Button.tsx


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
