import { PropsWithChildren } from "react";
import "./MainWindow.css";
import dude from "../../../../assets/dude.png";
import Image from "../image/Image";

const MainWindow = ({
  children,
  windowTitle,
  maximizeDisabled,
}: MainWindowProps) => {
  return (
    <div className="window flex flex-col h-screen overflow-y-hidden">
      <div className="title-bar">
        <div className="flex items-center gap-2">
          <div className="title-bar-logo">
            <Image imageClasses="w-[20px]" src={dude} />
          </div>
          <div className="title-bar-text">{windowTitle}</div>
        </div>
        <div className="title-bar-controls">
          <button
            aria-label="Minimize"
            onClick={() => window.electron.windowHandler.minimize()}
          ></button>
          {!maximizeDisabled && (
            <button
              aria-label="Maximize"
              onClick={() => window.electron.windowHandler.maximize()}
            ></button>
          )}
          <button
            aria-label="Close"
            onClick={() => window.electron.windowHandler.close()}
          ></button>
        </div>
      </div>
      <div className="window-body flex flex-col grow overflow-y-hidden my-[3px]">
        <div className="window-wrapper h-full overflow-y-hidden">{children}</div>
      </div>
    </div>
  );
};

export default MainWindow;
export interface MainWindowProps extends PropsWithChildren {
  windowTitle: string;
  maximizeDisabled?: boolean;
}
