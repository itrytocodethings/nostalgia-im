import { useAuth } from "../../hooks/Auth";
import Button from "../../shared/components/button/Button";
import TopMenu from "../../shared/components/topmenu/TopMenu";

const BuddyList = () => {
  const { user, signOut } = useAuth();
  return (
    <div className="flex flex-col max-h-full h-full">
    <div>
      <TopMenu />
    </div>
      <div className="my-1 h-full flex flex-col">
        <menu role="tablist">
          <li role="tab" aria-selected="true">
            <a className="font-bold" href="#tabs">Buddies</a>
          </li>
          <li role="tab">
            <a href="#tabs">List Setup</a>
          </li>
        </menu>
        <div className="window grow max-h-[339px]" role="tabpanel">
          <div className="bg-white p-1 overflow-y-auto no-scrollbar h-full">
            <div className="content">the list!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuddyList;
