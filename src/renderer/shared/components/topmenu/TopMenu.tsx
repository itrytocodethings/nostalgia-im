import Button from "../button/Button";

const TopMenu = () => {
  return (
    <nav>
      <ul className="list-none flex px-0 gap-1">
        <li><Button defaultStyling buttonClasses="px-1 flex justify-center items-center">nosIM</Button></li>
        <li><Button defaultStyling buttonClasses="px-1 flex justify-center items-center">People</Button></li>
        <li><Button defaultStyling buttonClasses="px-1 flex justify-center items-center">Help</Button></li>
      </ul>
    </nav>
  )
}

export default TopMenu;