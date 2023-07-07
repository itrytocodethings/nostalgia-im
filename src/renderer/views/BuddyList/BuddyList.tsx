import { useAuth } from "../../hooks/Auth";
import Button from "../../shared/components/button/Button";

const BuddyList = () => {
  const { user, signOut } = useAuth();
  return (
    <div>
      <Button
        onClick={() => {
          signOut(user);
        }}
      >
        Signout
      </Button>
    </div>
  );
};

export default BuddyList;
