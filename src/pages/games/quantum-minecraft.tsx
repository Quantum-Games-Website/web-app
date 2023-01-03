/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import { FaHome, FaLessThan } from 'react-icons/fa';

import Header from '@/components/Header';

type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function index({}: Props) {
  return (
    <>
      <QuantumJim />
    </>
  );
}

function QuantumJim() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Dashboard', src: 'Chart_fill' },
    { title: 'Inbox', src: 'Chat' },
    { title: 'Accounts', src: 'User', gap: true },
    { title: 'Schedule ', src: 'Calendar' },
    { title: 'Search', src: 'Search' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Files ', src: 'Folder', gap: true },
    { title: 'Setting', src: 'Setting' },
  ];
  return (
    <div className="flex bg-white">
      <div
        className={`${
          open ? 'w-72' : 'w-24'
        } relative z-10  min-h-screen w-72 bg-dark-purple p-5 pt-8 duration-700`}
      >
        <FaLessThan
          className={`absolute -right-3 top-9 h-8 w-8 cursor-pointer rounded border-2 border-dark-purple bg-white ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex flex-row items-center gap-x-4">
          <FaHome
            className={`h-10 w-10 cursor-pointer bg-white duration-300 ${
              open && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`origin-left text-xl font-medium text-white duration-300 ${
              !open && 'hidden'
            } `}
          >
            Home
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-300 hover:bg-light-white ${
                menu.gap ? 'mt-9' : 'mt-2'
              }`}
            >
              <img src={`/assets/${menu.src}.png`} alt="menuIcons" />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="z-0 min-h-screen  flex-1 bg-[url('/assets/images/background.png')] bg-[length:400px_500px] bg-repeat text-2xl font-semibold ">
        <Header />
        <div className="container my-12 mx-auto   px-4 md:px-12">
          {/* <!-- title --> */}
          <h1 className="font-kanit mb-4 text-6xl hover:text-blue-500">
            Play Now!
          </h1>
          <div className="p-10 text-center">
            <img
              className="h-auto max-w-lg place-items-center items-center justify-center rounded-lg"
              src={'/assets/images/quantumminecraft.png'}
              alt="image description"
            ></img>
          </div>
          <p className="text-gray-600">
            {' '}
            {
              'Explore the Quantum World with Minecraft. I still need to learn how to create quantum mods'
            }
          </p>
        </div>
      </div>
    </div>
  );
}
