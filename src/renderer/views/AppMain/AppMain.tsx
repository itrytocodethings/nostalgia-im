import MainContainer from "../../shared/components/maincontainer/MainContainer";
import SignInForm from "../SignInForm/SignInForm";
import { useAuth } from "../../hooks/Auth";
import BuddyList from "../BuddyList/BuddyList";

const AppMain = () => {
  const { user } = useAuth();
  return <MainContainer>{user ? <BuddyList /> : <SignInForm />}</MainContainer>;
};

export default AppMain;
