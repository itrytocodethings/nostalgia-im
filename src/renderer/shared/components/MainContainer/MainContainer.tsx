import { PropsWithChildren } from "react";
const MainContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="container mx-auto h-full max-w-[204px]">
      <main className="h-full">
        {children}
      </main>
    </div>
  );
};

export default MainContainer;
