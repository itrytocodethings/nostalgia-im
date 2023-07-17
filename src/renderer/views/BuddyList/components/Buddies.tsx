import { Buddies } from "../../../shared/lib/types";
import BuddyCategory from "./BuddyCategory";
import { getOnlineBuddies, getOfflineBuddies } from "../util/buddyListUtils";

const Buddies = ({ buddies }: Buddies) => {
  return (
    <>
      <BuddyCategory buddies={buddies} name="Buddies" />
      <BuddyCategory buddies={getOfflineBuddies({ buddies })} name="Offline" hideCount isOfflineCategory />
    </>
  );
};

export default Buddies;
