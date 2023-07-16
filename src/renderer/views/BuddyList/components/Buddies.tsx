import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";

const dummyBuddies = [
  { id: 123, name: "omglul123", category: "Buddies" },
  { id: 456, name: "xXxemo420xXx", category: "SomeOtherCategory" },
  { id: 789, name: "xXxiMissAimxXx", category: "Buddies" },
];

const BuddyCategory = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="flex items-center select-none hover:cursor-pointer" onClick={() => {
        setOpen(!open);
      }}>
        {open ? <BiSolidDownArrow className="text-[10px]" /> : <BiSolidRightArrow className="text-[10px]"/>}
        <h5 className="text-xs px-1">Buddies</h5>
      </div>
      <ul className={`list-none px-6 ${!open && 'hidden'}`}>
        <li>coolBuddyName</li>
      </ul>
    </div>
  );
};

const Buddy = () => {};

const Buddies = () => {
  return (
    <>
    <BuddyCategory />
    <BuddyCategory />
    </>
  );
};

export default Buddies;
