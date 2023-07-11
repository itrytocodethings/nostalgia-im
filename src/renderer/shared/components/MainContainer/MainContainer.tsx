import { PropsWithChildren } from "react";
const MainContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="container mx-auto h-full">
      <main className="h-full">
        {children}
      </main>
    </div>
  );
};

export default MainContainer;
