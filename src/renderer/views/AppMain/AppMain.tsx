import noslogo from "../../../assets/noslogo.png";
import { BsFillKeyFill } from "react-icons/bs";

import MainContainer from "../../shared/components/MainContainer/MainContainer";
import TextField from "../../shared/components/inputs/TextField/TextField";
import { Link } from "react-router-dom";

const AppMain = () => {
  return (
    <MainContainer>
      <div className="main-logo flex justify-end flex-col bg-aim-blue p-2 h-[175px]">
        <img className="h-auto w-full" src={noslogo} alt="" />
      </div>
      <hr />
      <form>
        <TextField
          inputId="screenname"
          stackLabel
          inputClasses="m-0"
          labelContent={
            <div className="flex justify-center items-center gap-1 font-extrabold text-xs">
              <p className="text-aim-blue">ScreenName</p>
              <BsFillKeyFill className="fill-aim-red text-2xl m-0" />
            </div>
          }
        />
        <Link to="/signup">Get a Screen Name</Link>
      </form>
    </MainContainer>
  );
};

export default AppMain;
