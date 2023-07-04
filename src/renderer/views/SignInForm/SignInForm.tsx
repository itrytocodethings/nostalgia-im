import { useEffect, useState } from "react";
import TextField from "../../shared/components/inputs/TextField/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../shared/components/button/Button";
import Image from "../../shared/components/image/Image";

// images
import noslogo from "../../../assets/noslogo.png";
import screennameImage from "../../../assets/ui/SignIn/screenname.png";
import help from "../../../assets/ui/SignIn/help.png";
import setup from "../../../assets/ui/SignIn/setup.png";
import signon from "../../../assets/ui/SignIn/signon.png";

const formSchema = yup
  .object({
    screenname: yup.string().required().min(5),
    password: yup.string().required(),
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

  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    watch("password") && watch("screenname")
      ? setFormDisabled(false)
      : setFormDisabled(true);
  }, [watch("screenname"), watch("password")]);

  return (
    <div className="h-full flex flex-col">
      <div className="main-logo flex justify-end flex-col bg-aim-blue p-2 h-[175px] mb-2 shrink-0">
        <Image src={noslogo} imageClasses="h-auto w-full" />
      </div>
      <hr className="mb-2" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full flex flex-col gap-1"
      >
        <p>{errors.screenname?.message}</p>
        <TextField
          register={register}
          inputId="screenname"
          stackLabel
          inputClasses="m-0"
          labelContent={
            <div className="flex justify-center items-center gap-1 font-extrabold text-xs">
              <Image imageClasses="mb-1" src={screennameImage} />
            </div>
          }
        />
        <div>
          <Link to="/signup">Get a Screen Name</Link>
        </div>
        <TextField
          register={register}
          inputId="password"
          stackLabel
          inputClasses="m-0"
          labelContent={
            <div className="flex justify-center items-center gap-1 font-extrabold text-xs">
              <p>Password</p>
            </div>
          }
          isPassword
        />
      </form>
      <div className="flex justify-between items-center">
        <div id="btns-left" className="flex">
          <Button
            hasWrapper
            wrapperClasses="p-1"
            defaultStyling
            imgSrc={help}
          />
          <Button
            hasWrapper
            wrapperClasses="p-1"
            defaultStyling
            imgSrc={setup}
          />
        </div>
        <Button
          hasWrapper
          wrapperClasses="p-1"
          defaultStyling
          imgSrc={signon}
          onClick={handleSubmit(onSubmit)}
          disabled={formDisabled}
        />
      </div>
      <footer className="text-center p-1">
        <p>Version 1.0</p>
      </footer>
    </div>
  );
};

export default SignInForm;
