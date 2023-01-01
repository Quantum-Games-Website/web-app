/* eslint-disable simple-import-sort/imports */
import { FaLessThan, FaHome } from 'react-icons/fa';
import React, { useState } from 'react';
import GridHome from './GridHome';

type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function HomePage({}: Props) {
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
        } relative h-200  w-72 bg-dark-purple p-5 pt-8 duration-700`}
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
            Designer
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

      <div className="relative h-screen flex-1  p-7 text-2xl font-semibold ">
        Home Page
        <GridHome />
      </div>
    </div>
  );
}
