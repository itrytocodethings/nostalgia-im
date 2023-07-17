import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";
import { Buddy, BuddyStatus } from "../../../shared/lib/types";

const BuddyCategory = ({ buddies, name, hideCount, isOfflineCategory }: BuddyCategoryProps) => {
    const totalBuddies = buddies.length;
    const online = buddies.filter(buddy => buddy.status !== BuddyStatus.OFFLINE);
    const onlineCount = online.length;

    const [open, setOpen] = useState(true);
    return (
        <div>
            <div className="flex items-center select-none hover:cursor-pointer" onClick={() => {
                setOpen(!open);
            }}>
                {open ? <BiSolidDownArrow className="text-[10px]" /> : <BiSolidRightArrow className="text-[10px]" />}
                <h5 className="text-xs px-1">{name} {!hideCount && `(${onlineCount}/${totalBuddies})`}</h5>
            </div>
            <ul className={`list-none px-6 ${!open && 'hidden'}`}>
                {!isOfflineCategory ? online.map(buddy => <li>{buddy.name}</li>) : buddies.map(buddy => <li>{buddy.name}</li>)}
            </ul>
        </div>
    );
};

export default BuddyCategory;

interface BuddyCategoryProps {
    name: string,
    buddies: Buddy[]
    hideCount?: boolean;
    isOfflineCategory?: boolean;
}