import { useState } from "react";
import { useAuth } from "../../hooks/Auth";
import Button from "../../shared/components/button/Button";
import TopMenu from "../../shared/components/topmenu/TopMenu";
import Buddies from "./components/Buddies";
import ListSetup from "./components/ListSetup";

const BuddyTab = ({ isSelected, tabLabel, onClick }: BuddyTabProps) => {
  return (
    <li role="tab" aria-selected={isSelected}>
      <a
        className={`${isSelected ? "font-bold" : ""}`}
        href="#"
        onClick={(e) => onClick(e)}
      >
        {tabLabel}
      </a>
    </li>
  );
};

const BuddyList = () => {
  const { user, signOut } = useAuth();
  const [showBuddies, setShowBuddies] = useState(true);

  const handleTabState = () => {
    setShowBuddies(!showBuddies);
  };

  return (
    <div className="flex flex-col max-h-full h-full">
      <div>
        <TopMenu />
      </div>
      <div className="my-1 h-full flex flex-col">
        <menu role="tablist">
          <BuddyTab
            isSelected={showBuddies}
            tabLabel="Buddies"
            onClick={handleTabState}
          />
          <BuddyTab
            isSelected={!showBuddies}
            tabLabel="List Setup"
            onClick={handleTabState}
          />
        </menu>
        <div className="window grow max-h-[339px]" role="tabpanel">
          <div className="bg-white p-1 overflow-y-auto no-scrollbar h-full">
            {showBuddies ? <Buddies /> : <ListSetup />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuddyList;

interface BuddyTabProps {
  isSelected: boolean;
  tabLabel: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
