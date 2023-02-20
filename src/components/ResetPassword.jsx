import React from 'react'
import { useState } from "react";
import logo from '../assets/logo-kiwify.png'

export default function ResetPassword() {

  const user = { email: ""};
  const [userValues, setUserValues] = useState(user);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
      const { name, value, focused } = e.target;
      setUserValues({ ...userValues, [name]: value});
      setFormErrors(validate(userValues));
  };

  const handleSubmit = (e) => {
      if (Object.keys(formErrors).length !== 0) {
          e.preventDefault();
      }
  }

  const validate = (user) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      if (user.email == "") {
          errors.email = "Email is required!";
      } else if (!regex.test(user.email)) {
          errors.email = "This is not a valid email";
      }
      return errors;
  };



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12 w-auto" src={logo} alt="logo" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Redefinir a senha</h2>
          <p className="px-3 mt-2 text-center text-base leading-5 text-gray-600"> Você receberá um e-mail com instruções para redefinir a senha
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form onSubmit={handleSubmit} className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"><div><label for="email" className="block text-sm font-medium leading-5 mb-1 text-gray-700">
            E-mail
          </label>
            <div>
              <input type="text" onChange={handleChange} name="email" className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full" />
            </div>
            {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
          </div>
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  Redefinir senha
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}