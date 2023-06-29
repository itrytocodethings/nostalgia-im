import noslogo from "../../../assets/noslogo.png";
import { BsFillKeyFill } from "react-icons/bs";

import MainContainer from "../../shared/components/MainContainer/MainContainer";
import TextField from "../../shared/components/inputs/TextField/TextField";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  screenname: z.string({
    required_error: "ScreenName is required.",
  }).min(5, 'min 5 chars bro.'),
  // password: z.string({
  //   required_error: "Password Required.",
  // })
});

const AppMain = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => console.log(data);
  console.log(watch("screenname"), 'this is the watch');

  return (
    <MainContainer>
      <div className="main-logo flex justify-end flex-col bg-aim-blue p-2 h-[175px]">
        <img className="h-auto w-full" src={noslogo} alt="" />
      </div>
      <hr />
      <form>
        <TextField
          register={register}
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
        <button onClick={(e) => {
          e.preventDefault();
          if (errors) {
            console.log(errors);
          }
          handleSubmit(onSubmit);
        }}>Click me pls.</button>
      </form>
    </MainContainer>
  );
};

export default AppMain;
