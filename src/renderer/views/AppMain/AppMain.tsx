import noslogo from "../../../assets/noslogo.png";
import { BsFillKeyFill } from "react-icons/bs";

import TextField from "../../shared/components/inputs/TextField/TextField";
import MainWindow from "../../shared/components/MainWindow/MainWindow";
import { Link } from "react-router-dom";

const AppMain = () => {
  return (
    <div className="container mx-auto h-full max-w-[250px]">
      <main className="flex flex-col h-full">
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
      </main>
    </div>
  );
};

export default AppMain;
