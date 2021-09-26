import React from 'react';
import { Link } from 'react-router-dom';

export function SignInPage() {
  return (
    <div className="signIn-page">
      <br />
      <br />
      <div className="p-10">
        <h2 className="text-center text-3xl leading-9 font-bold text-gray-800">
          Login ke akun anda
        </h2>
        <p className="text-center text-sm leading-5 text-gray-600">
          Belum punya akun ?
          <Link className="text-blue-500 mx-2" to={"/Register"}>
            Daftar sekarang
          </Link>
          <br />
        </p>
        <br />
        <br />
        <form >
          <div className="flex justify-center">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label 
              className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2"
              htmlFor="email">
                Email Pengguna
              </label>
              <input 
                type="email"
                name="email"
                id="email"
                placeholder="Stefanus2202@gmail.com"
                className="bg-gray-200 appearance-none border-2 border-blue-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
                required
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label 
              className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2"
              htmlFor="password">
                Kata Sandi
              </label>
              <input 
                type="password"
                name="password"
                id="password"
                placeholder="*********"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
                required
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button type="submit"
              className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4  border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-500 hover:bg-teal-400 focus:outline-none focus:border-gray-400 focus:shadow-outline-blue active:bg-blue-400 active:outline-none transition duration-150 ease-in-out">
              Masuk
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}