// import { Outlet } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import illustration from '../../assets/images/illustration.png'
import { Logo } from '../components/Logo'

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
        <div className="w-full h-full flex items-center justify-center flex-col gap-16 lg:w-1/2">
          <Logo className="h-6 text-gray-500"/>

          <div className="w-full max-w-[504px] px-8 ">
            <Outlet />

          </div>
        </div>

            <div className="w-1/2 h-full relative lg:flex justify-center items-center p-8 hidden">
            <img
              src={illustration}
              alt="Login Image"
              className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]"/>

            <div className="max-w-[656px] mx-8 bg-white p-10 absolute bottom-8 top-auto rounded-b-[32px]">
              <Logo className="text-teal-900 h-8"/>
              <p className="text-gray-700 font-medium text-xl mt-6">
              Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de    graça!
              </p>
            </div>
          </div>
          </div>
  )
}
