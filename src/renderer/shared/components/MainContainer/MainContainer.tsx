import { PropsWithChildren } from "react";
const MainContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="container mx-auto h-full max-w-[250px]">
      <main className="flex flex-col h-full">
        {children}
      </main>
    </div>
  );
};

export default MainContainer;
