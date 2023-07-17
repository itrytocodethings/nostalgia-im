import { Buddies, BuddyStatus } from "../../../shared/lib/types";

export const getOnlineBuddies = ({ buddies }: Buddies) => {
    return buddies.filter(buddy => buddy.status !== BuddyStatus.OFFLINE);
}

export const getOfflineBuddies = ({ buddies }: Buddies) => {
    return buddies.filter(buddy => buddy.status === BuddyStatus.OFFLINE);
}