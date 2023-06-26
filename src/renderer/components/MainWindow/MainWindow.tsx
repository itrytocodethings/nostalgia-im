import { PropsWithChildren } from "react";
import "./MainWindow.css";

const MainWindow = ({ children, windowTitle }: MainWindowProps) => {
  return (
    <div className="window flex flex-col h-screen">
      <div className="title-bar min-h-[30px]">
        <div className="title-bar-logo"></div>
        <div className="title-bar-text">{windowTitle}</div>
        <div className="title-bar-controls">
          <button
            aria-label="Minimize"
            onClick={() => window.electron.windowHandler.minimize()}
          ></button>
          <button
            aria-label="Maximize"
            onClick={() => window.electron.windowHandler.maximize()}
          ></button>
          <button
            aria-label="Close"
            onClick={() => window.electron.windowHandler.close()}
          ></button>
        </div>
      </div>
      <div className="window-body flex flex-col grow overflow-y-hidden">
        <div className="window-wrapper h-full">{children}</div>
      </div>
    </div>
  );
};
export default MainWindow;

export interface MainWindowProps extends PropsWithChildren {
  windowTitle: string;
}
