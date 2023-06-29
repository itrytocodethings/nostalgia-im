import MainContainer from "../../shared/components/MainContainer/MainContainer";
import noslogo from "../../../assets/noslogo.png";
import { BsFillKeyFill } from "react-icons/bs";
import TextField from "../../shared/components/inputs/TextField/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const formSchema = yup
  .object({
    screenname: yup.string().required().min(5),
    password: yup.string().required()
  })
  .required();

const SignInForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log(errors, "errors");
    console.log(data, "data");
  };
  return (
    <>
      <div className="main-logo flex justify-end flex-col bg-aim-blue p-2 h-[175px]">
        <img className="h-auto w-full" src={noslogo} alt="" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
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
        {/* <input type="text" {...register("screenname")}/> */}
        <p>{errors.screenname?.message}</p>
        <Link to="/signup">Get a Screen Name</Link>
        <button type="submit">Click me pls.</button>
      </form>
    </>
  );
};

export default SignInForm;
