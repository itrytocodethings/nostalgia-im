import { useAuth } from "../../hooks/Auth";
import Button from "../../shared/components/button/Button";

const BuddyList = () => {
  const { user, signOut } = useAuth();
  return (
    <>
    <div>
      menu
    </div>
      <div className="my-1 h-full">
        <menu role="tablist">
          <li role="tab" aria-selected="true">
            <a href="#tabs">Buddies</a>
          </li>
          <li role="tab">
            <a href="#tabs">List Setup</a>
          </li>
        </menu>
        <div className="window h-[85%] p-2" role="tabpanel">
          <div className="h-full bg-white p-1 overflow-y-auto no-scrollbar">
            <p>the list!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuddyList;
