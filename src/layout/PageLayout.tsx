import React from "react";
import { Footer, Header } from "../components";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex min-h-[calc(100vh-8rem)] pt-20 py-10 justify-center">
        <div className="w-full max-w-4xl">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
