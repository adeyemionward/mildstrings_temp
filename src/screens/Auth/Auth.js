import React, { useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '@mantine/core';
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import FormInput from "../../components/UI/FormInput/FormInput";
import Button from "../../components/UI/Button/Button";



const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  // const dispatch = useDispatch();
  //   const loading = useSelector((state) => state.authReducer.loading)
  const loading = false;
  const [data, setData] = useState({ email: "", firstname: "", lastname: "", password: "", confirmpass: "" });
  const [isConfirmpassed, setIsConfirmpassed] = useState(true);

  const handleChanges = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // if (isSignUp) {
    //   if (data.password === data.confirmpass) {
    //     if (!data.email || !data.firstname || !data.lastname || !data.password) {
    //       alert("all field require")
    //       return;
    //     }
    //     dispatch(signUp(data)).then(() => {
    //       setIsSignUp(false);
    //       resetForm();
    //     })
    //   } else {
    //     setIsConfirmpassed(false)
    //   }
    // } else if (!isSignUp) {
    //   if (!data.email || !data.password) {
    //     alert("all field require")
    //     return;
    //   }
    //   dispatch(logIn(data)).then(() => {
    //     resetForm()
    //   });
    // }

  }

  const resetForm = () => {
    setIsConfirmpassed(true);
    setData({ email: "", firstname: "", lastname: "", password: "", confirmpass: "" });
  }

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-start-4 col-span-7">
        <div className="flex justify-between items-center mt-24 gap-4">
          <div className="flex-center">
            <img className="w-[300px] h-[40px]" src="../assets/Mildstrings-Logo.png" alt="logo" />
          </div>
          <Card>
            <div>
              <FormInput
                type="text"
                name='email'
                value={data.email}
                placeholder="email"
                onChange={handleChanges}
              />
              <FormInput
                type="password"
                name='password'
                value={data.password}
                placeholder="password"
                onChange={handleChanges}
              />
            </div>
            <div className="m-4">
              <Button
                class='w-full text-white bg-[#5F7F41] mr-6 rounded border-none py-3 px-5'
                text="Sign in"
                handleOnclick={() => handleSubmit()}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
