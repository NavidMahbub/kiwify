import React from 'react'
import { useState } from "react";
import logo from '../assets/logo-kiwify.png'

export default function Login() {

    const user = { email: "", password: "", focused: "" };
    const [userValues, setUserValues] = useState(user);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, focused } = e.target;
        setUserValues({ ...userValues, [name]: value, focused: name });
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

        if (user.password == "") {
            errors.password = "Password is required";
        } else if (user.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (user.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }

        return errors;
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div>
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img className="mx-auto h-12 w-auto" src={logo} alt="logo" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Entrar na sua conta</h2>
                    <p className="mt-2 text-center text-base leading-5 text-gray-600"> Ou
                        <a href="/signup?redirect" className="p-2 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            fazer cadastro
                        </a>
                    </p>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <form onSubmit={handleSubmit} className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <div>
                            <label for="email" className="block text-sm font-medium leading-5 mb-1 text-gray-700">E-mail</label>
                            <div>
                                <input type="text" onChange={handleChange} name="email" className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full" />
                            </div>
                            {userValues.focused == "email" && formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
                        </div> 
                    
                        <div className="mt-6">
                            <label for="password" className="block text-sm font-medium leading-5 text-gray-700">Senha</label>
                                <div>
                                    <input type="password" onChange={handleChange} name="password" className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full" />
                                </div>
                                {userValues.focused == "password" && formErrors.password && <span className="text-red-500">{formErrors.password}</span>}
                        </div>
                        <div className="mt-2 flex items-center justify-end">
                            <div className="text-sm leading-5"><a href="/resetPassword" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>
                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    Entrar
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
